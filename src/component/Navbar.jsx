import React from 'react'
import { NavLink, Link } from 'react-router-dom';
// import './App.css';
import '../App.css'
export default function Navbar() {
  return (
    <header className="App-header">
          <nav className='navbar'>
           
            <div className='logo-company'><Link to='/'><i className="fa-brands fa-staylinked fa-2xl imp"></i></Link></div>
            
            <div className=' nav-elem' id="nav-2">
              <div className='input'>
                <input type="text" name="input" className='input-item'></input>
              </div>
            </div>
            <div className=' nav-elem' id="nav-3">Fashion
              <i icon="fa-solid fa-user" />
            </div>
            <div className=' nav-elem' id="nav-4">category</div>
            <div className=' nav-elem' id="nav-5">
              <i className="fa-light fa-bag-shopping"></i>
              <i className="fa-light fa-bag-shopping"></i>
            </div>
          </nav>
            <nav className='navbar2'>
            
            <div className='nav-bar'>
   

              <div className='category-name'>
               
                <div className='nav2-elem'><NavLink to='/kids' className='nav-inner'>Kids</NavLink></div>
                <div className='nav2-elem'><NavLink to='/women'className='nav-inner'>Women</NavLink></div>
                <div className='nav2-elem'><NavLink to='/Men'  className='nav-inner'>Men</NavLink></div>
                <div className='nav2-elem'><NavLink to='Home&Living' className='nav-inner'>Home & Living</NavLink></div>
                <div className='nav2-elem'><NavLink to='/Studio'className='nav-inner'>Studio</NavLink></div>
                
            </div>
       
            <div className='icon-nav'>
                <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
                  <li style={{ display: "flex", flexDirection: "column" }}><i class="fa-solid fa-user"></i> Account</li>
                  <li style={{ display: "flex", flexDirection: "column" }}><i class="fa-solid fa-heart"></i>WishList</li>
                  <li style={{ display: "flex", flexDirection: "column" }}><i class="fa-solid fa-bag-shopping"></i>Bag</li>
                </ul>
              </div>

            </div>
            {/* <NavOpen></NavOpen>  */}
          </nav>
         
        </header>
        
  )
}


 // const [display, setDisplay] = useState("display-none");
  
  //  const showNav = useCallback((cloths) => {
  //   console.log("show Nv")
  //   setDisplay("display");
  // },[]);
  
  // const hideNav = useCallback(()=>{
  //   console.log("yes i am here ")
  //   setDisplay("display-none")
  // },[]);