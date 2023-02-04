import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Hotel from './pages/Hotels/Hotel';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import List from './components/list/list';
import Login from './components/login/login';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/hotel/:id" element={<Hotel/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
