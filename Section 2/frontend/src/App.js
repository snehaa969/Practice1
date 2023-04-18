import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup  from './components/Signup';
import EventHandling from './components/EventHandling';

function App() {
  return (
    <div >
    <hr />
  
      <BrowserRouter>
      <Navbar/>
          <Routes>
    
              <Route path='/' element={<Navigate to='/home' />} />
              <Route path='home' element={<Home/>} />
              <Route path='login' element={<Login/>} />
              <Route path='signup' element={<Signup/>} />
              <Route path='eventhandling' element={<EventHandling/>} />

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
