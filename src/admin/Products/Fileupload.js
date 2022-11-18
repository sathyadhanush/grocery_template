import React, {useState} from 'react';
import { Url} from '../../constants/Global';
import { Button} from "evergreen-ui";

function FileUploadPage(){
	const [selectedFile, setSelectedFile] = useState();
	
    const [isSelected, setIsSelected] = useState();
	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
		console.log(event.target.files[0]);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('file', selectedFile);
        formData.append('product_id',30);
		fetch(
            Url+'/app/v1/product/img',
			{
				method: 'POST',
				body: formData,
                headers:{
                    'auth-token': localStorage.getItem('x-auth-token'),
                    'x-app-key':localStorage.getItem('app-key')
                  }
			}
		)
			.then((response) => response.json())
			.then((result) => {
				alert("successfully Posteded...");
			})
			.catch((error) => {
				alert(JSON.stringify(error.data));
			});
	};


	return(
   <div>
			<input type="file" name="file"  onChange={changeHandler} />
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<Button kind="primary"  onClick={handleSubmission}>Submit</Button>
			</div>
		</div>
	)
};
export default FileUploadPage;