import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
    LogoutButton
  } from '@inrupt/solid-react-components';
import AddRoute from "../Panel/AddRoute/AddRoute.js";



const NavBar = () => {
   
        return (
         <header className="navBar">
            <nav class="navbar navbar-dark bg-dark"  display="flex" position="fixed">
                <div className="navBarLogo">
                    <img src={require('../../img/logo_viade_es3a.jpg')} alt="React logo" width="160" />
                </div>
                <div className="navBarOptions"> 
                        {/* No va el onClick */}
                         <a class="nav-addRoute" href="/addRoute" onClick={() => <AddRoute/>}>Add route</a>

                            <a class="nav-LoadRoute" href="/loadRoute">Load routes</a>

                            <a class="nav-Profile" href="/profile">Profile</a>
                            
                           <a class="nav-Friends" href="/friends">Friends</a>
                </div>
                <div className="navBarLogout">
                     <LogoutButton/>
                </div>
            </nav>
         </header>
        );
    
};

export default NavBar;

// <header className="navBar">
//             <nav className="navBar_nav">
//                 <div className="navBarLogo">
//                 <img src={require('../../img/logo_viade_es3a.jpg')} alt="React logo" width="150" />
//                 </div>
//                 <div className="spaceOptions"></div>
//                 <div className="navBarOptions">
//                     <ul>
//                         <li>
//                             <a href="/addRoute">Add route</a>
//                         </li>
//                         <li>
//                             <a href="/loadRoute">Load route</a>
//                         </li>
//                         <li>
//                             <a href="/profile">Profile</a>
//                         </li>
//                         <li>
//                             <a href="/friends">Friends</a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="spaceLogout"></div>
//                 <div className="navBarLogout">
//                     <LogoutButton/>
//                 </div>
//             </nav>
//         </header>