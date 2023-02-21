import '../styles/login.css';
import React, { useEffect } from 'react';
import WelcomeMessage from '../components/loginComponents/WelcomeMessage';
import LoginControls from '../components/loginComponents/LoginControls';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Login = () => {

    const loading = useSelector( state => state.isLoading )

    return (
        <div className='loginBox'>
            <main>
                <figure>
                    <span className={`${loading}`}></span>
                    <WelcomeMessage />
                    <LoginControls />
                </figure>
            </main>
        </div>
    );
};

export default Login;