import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink className="btn-small green lighten-1" to='/create/post'>New Post</NavLink></li>
            <li><button className="btn-small red lighten-1" onClick={props.signOut}>Log Out</button></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">EM</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()) 
    }
}

export default connect (null, mapDispatchToProps)(SignedInLinks)