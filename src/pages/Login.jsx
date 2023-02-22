import '../styles/login.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WelcomeMessage from '../components/loginComponents/WelcomeMessage';
import Controls from '../components/loginComponents/Controls';
import { getPokemonsThunk } from '../store/slices/pokemons.slice';

const Login = () => {

    const dispatch = useDispatch();
    const loading = useSelector( state => state.isLoading )

    useEffect( () => {
        dispatch( getPokemonsThunk() )
    },[])

    return (
        <div className='loginBox'>
            <main>
                <figure>
                    <img src="pokedexlogo.png" alt="" />
                    <span className={`${loading}`}></span>
                    <WelcomeMessage />
                    <Controls />
                </figure>
            </main>
        </div>
    );
};

export default Login;