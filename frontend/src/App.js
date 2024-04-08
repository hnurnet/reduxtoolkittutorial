import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Userlist from './components/Userlist';
import Header from './components/Header';
import Footer from './components/Footer';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/userlist' element={<Userlist/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
     </Routes>
     <Footer/>
     
    </div>
  );
}

export default App;
