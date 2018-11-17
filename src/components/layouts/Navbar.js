import React from 'react';
import { Link } from 'react-router-dom'
import SingInLinks from './SignedInLinks'
import SingOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                <SingInLinks></SingInLinks>
                <SingOutLinks></SingOutLinks>
            </div>
        </nav>
    )
}

export default Navbar