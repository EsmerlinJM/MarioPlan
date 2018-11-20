import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink className="btn-small green lighten-1" to='/create/post'>Create Post</NavLink></li>
            <li><NavLink className="btn-small blue lighten-1" to='/signup'>Sign Up</NavLink></li>
            <li><NavLink className="btn-small green lighten-1" to='/signin'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks