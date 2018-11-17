import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'><i className="small material-icons left">add_circle</i>New Post</NavLink></li>
            <li><NavLink to='/'>Log out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">EM</NavLink></li>
        </ul>
    )
}

export default SignedInLinks