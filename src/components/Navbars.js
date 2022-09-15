import React from 'react';
import { Link } from "react-router-dom";

const Navbars = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/"> Hello</Link></li>
                    <li><Link to="/play"> play</Link></li>
                    <li><Link to="/services"> Services</Link></li>
                    <li><Link to="/post/js"> Javascript</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbars;