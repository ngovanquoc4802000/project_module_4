import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/foody-vn.png';

function Sidebar() {
    return (
        <div className="bg-dark text-white p-3" style={{width: '250px', height: '100vh'}}>
            <h4 className="text-center mb-4">
                <img src={logo} alt="Logo" style={{width: '120px'}}/>
            </h4>
            <h6 className="text-center text-secondary">Management Foody</h6>
            <ul className="nav flex-column mt-4">
                <li className="nav-item mb-2">
                    <Link to="/category" className="nav-link text-white"> Category</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/user" className="nav-link text-white"> User</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/food" className="nav-link text-white"> Food</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
