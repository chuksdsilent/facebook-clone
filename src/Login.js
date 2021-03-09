import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            }).catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div>

                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
                    alt="facebook logo" />
                <Button type="submit" onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login
