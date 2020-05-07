import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Nav = () => {


    const [isOpen, setIsOpen] = useState(true);
    function clickHandler() {
        setIsOpen(true)
    }
    return (
        <div>

            <>
                <div className="navbar">
                    <span className="logo">Logo</span>
                    <span className="hamburger"
                        onClick={clickHandler}>Menu</span>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/projects">
                        <li>Projects</li>
                    </Link>
                    <Link to="/" exact>
                        <li>Home</li>
                    </Link>

                </div>
                <h2>Home</h2>
            </>


        </div >
    );
}

export default Nav;
