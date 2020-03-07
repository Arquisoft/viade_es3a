import React from 'react';
import './NavBar.css'

const NavBar = () => {
    return (
        <header className="navBar">
            <nav className="navBar_nav">
                <div className="navBarLogo">
                    <a href="/">LOGO</a>
                </div>
                <div className="spaceOptions"></div>
                <div className="navBarOptions">
                    <ul>
                        <li>
                            <a href="/addRoute">Add route</a>
                        </li>
                        <li>
                            <a href="/loadRoute">Load route</a>
                        </li>
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                        <li>
                            <a href="/friends">Friends</a>
                        </li>
                    </ul>
                </div>
                <div className="spaceLogout"></div>
                <div className="navBarLogout">
                    <a href="/logout">Logout</a>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;