import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login"
import Signup from './pages/Signup';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
import Details from './pages/Details';

function App() {
  return (
    <div className="App myBackground w-full min-h-screen myText">
      <Navbar/>

      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<Login/>} path='/login'/>
        <Route element={<Signup/>} path='/signup'/>
        <Route  element={<Search/>} path='/search' />
        <Route element={<Favourites/>} path='/favourites'/>
        <Route element={<Details/>} path='/details'/>
      </Routes>
    </div>
  );
}

export default App;
