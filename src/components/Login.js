import { Button } from '@material-ui/core';
import React from 'react'
import { auth, provider } from '../firebase';
import './Login.css';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

function Login() {
    const [{}, dispatch] = useStateValue();
    const loginHandler=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            })
        }).catch((error)=> alert(error.message));


    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="/logo.png"/>
                <img src="/textlogo.jpg"/>
            </div>

            <Button onClick={loginHandler} >Sign Up</Button>
        </div>
    )
}

export default Login
