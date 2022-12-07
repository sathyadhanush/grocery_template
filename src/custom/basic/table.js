import {useEffect, useState} from 'react';
import {Button, Icon, Label, Pagination, Segment, Table, TableCell, TableRow} from 'semantic-ui-react';
import {TSearch} from "./input";

export const SiteTable = (props) => {
    const [resetKey,setKey] = useState(Math.random())
    const { columns, data,search=false,onTagClick=null,tag=null,title=null, totalPages = 0,addButtonText='Add New',limit=10,onPageChange=null, action = null,searchLoading=false,searchKey=null, onAdd = null,onSearch = null, pagination = false, loading = false } = props;
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        let items = [...data];
        setTableData(items)
    }, [data])

    const handlePageChange = (e,{activePage})=>{
        onPageChange?.(activePage)
    }
    const handleChange = (val='')=>{
        if(searchKey && val.trim()) {
            let items = [...data];
            let newItems = items.filter(a => a[searchKey].toLowerCase().indexOf(val) > -1);
            setTableData(newItems)
        }
    }
    const handleClear = ()=>{
        onSearch?.('')
        setKey(Math.random())
        onTagClick?.()
    }
    return (
        <Segment loading={loading}>
            <Table compact >
             <TableRow>
                 {onAdd && <TableCell colSpan="3">
                    <Button type={"button"} onClick={onAdd} size={"small"} primary><Icon name={"plus circle"} /> {addButtonText}</Button>
                     {title && title}
                     {tag &&  <Label as='a' className={"ml-4"} color={"teal"} onClick={onTagClick} size={"large"}>{tag}<Icon name='delete'/></Label>}
                </TableCell>}
                 {search && <TableCell textAlign={'right'} colSpan={100}>
                     <Button size={"small"} onClick={handleClear}>Clear</Button>
                     <TSearch key={resetKey} loading={searchLoading} onSearch={onSearch} onChange={handleChange} data={tableData}/>
                 </TableCell>}
            </TableRow>
            </Table>
            <Table celled padded compact selectable>
                <Table.Header>
                    <Table.Row>
                        {action && <Table.HeaderCell width={2} textAlign={"center"}>{null}</Table.HeaderCell>}
                        {columns && columns.map(({ title, prevent }) => {
                            return <Table.HeaderCell className="capitalize" key={title}>{!prevent && title}</Table.HeaderCell>;
                        })}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {tableData.length === 0 ?
                        (!loading && <TableRow><Table.HeaderCell colSpan={100} textAlign={"center"}>{"No Records found"}</Table.HeaderCell></TableRow>) :
                        tableData.map((a, i) => (
                        <TableRow key={a?._id}>
                            {/* <TableAction data={a} index={i} action={action} /> */}
                            {columns && columns.map(({ field, render }) => (
                                render ? <Table.Cell key={a?._id + field} className="capital">{render(a)}</Table.Cell> : <Table.Cell
                                    key={a?.[field]}>{a?.[field]}</Table.Cell>
                            ))}
                        </TableRow>
                    ))}
                </Table.Body>
                {pagination && totalPages ? <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan={100}>
                            <Pagination
                                size='tiny' floated={'right'}
                                defaultActivePage={1}
                                siblingRange={1}
                                onPageChange={handlePageChange}
                                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                                nextItem={{ content: <Icon name='angle right' />, icon: true }}
                                totalPages={Math.ceil(totalPages/limit)}
                            />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>:null}
            </Table>
        </Segment>
    );
};

const TableAction = ({ action, data, index }) => {
    const actionKeys = Object.keys(action)
    return (
        actionKeys ? <Table.Cell textAlign="center">
            {actionKeys.indexOf('view') > -1 && <Button type={"button"} onClick={(e) => action?.view(e, data, index)} size="mini" icon={"eye"} />}
            {actionKeys.indexOf('edit') > -1 && <Button type={"button"} onClick={(e) => action?.edit(e, data, index)} size="mini" icon={"edit"} />}
            {actionKeys.indexOf('delete') > -1 && <Button type={"button"} onClick={(e) => action?.delete(e, data, index)} size="mini" icon={"trash"} />}
        </Table.Cell> : null
    );
};

