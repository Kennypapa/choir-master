import './App.css';
import Header from './Component/Header';
import MainPage from './Component/MainPage';
import ForgotPassword from './Component/Pages/ForgotPassword';
import ResetPassword from './Component/Pages/ResetPassword';
import Code from './Component/Pages/Code';
import Signup from './Component/Pages/Signup';
import Login from './Component/Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/ForgotPassword' element={<ForgotPassword />}/>
            <Route path='/ResetPassword' element={<ResetPassword />}/>
            <Route path='/Code' element={<Code />}/>
            <Route path='/Signup' element={<Signup />}/>
            <Route path='/Login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
