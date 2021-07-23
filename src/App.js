import {Provider} from 'react-redux'
import store from './redux';

import CarsTable from './Table/container/Table'
import Search from './Search/container/Search';
import Choise from './Choise/container/Choise';
import Header from './dummies/Header';
import Footer from './dummies/Footer';
import Sidebar from './dummies/Sidebar';
import './App.css';




function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <div className="main">
            <Sidebar/>
            <div className="table">
                <Search/>
                <CarsTable/>
                <Choise/>
            </div>
        </div>
        <Footer/>
      </Provider>
    </div>
  );
}

export default App;
