import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create/post'>New Post</NavLink></li>
            <li><NavLink to='/logout'>Log Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">EM</NavLink></li>
        </ul>
    )
}

export default SignedInLinks