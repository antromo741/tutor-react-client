import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "../App.css";

class Navbar extends Component {
    
render() {
    return (
           
            
            <nav className="text-center bg-blue-900 text-yellow-100 p-4">
            <div className="headTitle">Tutorfy</div>
                <NavLink
                    className="inline-block px-4 py-2"
                    activeClassName="text-yellow-300"
                    exact
                    to="/"
                >
                    Subjects
                </NavLink>
                <NavLink
                    className="inline-block px-4 py-2"
                    activeClassName="text-yellow-300"
                    exact
                    to="/groups/new"
                >
                    New Subject
                </NavLink>
            </nav>
            
        );
    }
}
export default Navbar;