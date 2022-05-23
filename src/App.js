import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import OrderPage from "./components/OrderPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import '../src/styles/Styles.css';

function App() {
  return (
    <Router>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<><Header/> <MainPage/></>}/>
        <Route path="/about" element={<><About/></>}/>
        <Route path="/order" element={<><OrderPage/></>}/>
        <Route path="/login" element={<><LoginPage/></>}/>
        <Route path="/register" element={<><RegisterPage/></>}/>
        <Route path="*" element={<> <ErrorPage/> </>}/>
      </Routes>   
    </Router>
  );
}

export default App;
