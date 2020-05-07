import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(true);

    function clickHandler() {
        setIsOpen(false)
    }
    function handleClose() {
        setIsOpen(true)
    }

    return (
        <div>
            {isOpen ?
                (
                    <div className="navbar">
                        <Link to="/">
                            <span className="logo">Logo</span>
                        </Link>

                        <span className="hamburger"
                            onClick={clickHandler}>Menu</span>
                    </div>

                )
                :
                (

                    <div className="modal-menu">
                        <p onClick={handleClose} className="close"> close</p>
                        <NavLink to="/about" activeClassName="selected" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>
                            <li onClick={handleClose}>About</li>
                        </NavLink>
                        <NavLink to="/projects" activeClassName="selected" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>
                            <li onClick={handleClose}>Projects</li>
                        </NavLink>
                        <NavLink to="/" exact activeClassName="selected" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>
                            <li onClick={handleClose}>Home</li>
                        </NavLink>
                    </div>

                )}



        </div >
    );
}

export default Nav;
