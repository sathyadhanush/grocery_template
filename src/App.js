

import { Provider } from 'react-redux';
import store from './redux/store';
import AppContainer from './components';
import "./App.css"
function App() {

    return (
      <div className="App">
         <Provider store={store}>
            <AppContainer />
         </Provider>
   
      </div>
    );
  }
  
  export default App;