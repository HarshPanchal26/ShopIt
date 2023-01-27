import './App.css';
import Home from './component/Home';
import './css/navOpen.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
// import { Route, Router, Routes } from 'react-router-dom@6';
import Navbar from './component/Navbar';
import Kids from './component/Kids';
import Footer from './component/Footer';
import ImageSlider from './component/ImageSlider';
import Offers from './component/Offers';
import SignIn from './component/SignIn';
import Update from './component/Update';
function App() {


  return (
    <>
      {console.log("App is created once again")}
      <Offers></Offers>
      <div className="App">
       
        <Navbar />
        {/* <Route path='/update-data' element={<Update/>}></Route> */}
        {/* <Router> */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {console.log("1st")};
          <Route path='/authentication' element={<SignIn />} />
          <Route path='/kids' element={<Kids />}></Route>
          {console.log("2nd")};
        </Routes>

        {/* </Router> */}

      </div>
    </>

  );
}

export default App;




