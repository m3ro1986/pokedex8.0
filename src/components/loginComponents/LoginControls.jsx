import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsLoading } from '../../store/slices/isLoading.slice';
import { getPokemon } from '../../store/slices/pokemon.slice';
import { getPokemonsThunk } from '../../store/slices/pokemons.slice';
import { getUserName } from '../../store/slices/userName.slice';

const LoginControls = () => {

    const [name, setName] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pokemon = useSelector( state => state.pokemon );
    const [ front, setFront ] = useState('front');
    const [ slide, setSlide ] = useState('');
    const [ random, setRandom ] = useState( () => Math.floor(Math.random() * 1000) )

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
            .then(res => dispatch(getPokemon(res.data)))
    }, [random])

    const goPokemons = () => {

        if (name !== '') {
            dispatch(getUserName(name));
            dispatch(getPokemonsThunk());
            dispatch(setIsLoading('loading'));
            setTimeout( () => {
                navigate('/pokemons')
                dispatch(setIsLoading(''));
            }, 1500)
        } else {
            alert('give me a name');
        }
    }

    const changePokemon = (next) => {
        if (random > 1 && random < 1000) {
            if (next === 'next') {
                setRandom(random + 1);setSlide('slideRight')
            } else {
                setRandom(random - 1);setSlide('slideLeft')
            }
        } else {
            if (random === 1) {
                next === 'next' ? setRandom(random + 1) : setRandom(random)
            } else {
                next === 'next' ? setRandom(random) : setRandom(random - 1)
            }
        }
    }

    const turnPokemon = () => {
        front === 'front' ? setFront('') : setFront('front')
        setSlide('slideRigth')
    }


    return (
        <div className='loginControlBox'>
            <input
                type="text"
                placeholder='your name'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <div>
                {
                    front === 'front' ? 
                    <img className={`${slide}`} style={{ width: '80px'}} src={pokemon.sprites?.front_default} alt="" /> :
                    <img className={`${slide}`} style={{ width: '80px'}} src={pokemon.sprites?.back_default} alt="" />
                }

                <span>{pokemon.name} # {pokemon.id}</span>
            </div>

            <button className='arrows up' onClick={ () => changePokemon('next')}></button>
            <button className='arrows down' onClick={ () => changePokemon('')}></button>
            <button className='arrows left' onClick={turnPokemon} ></button>
            <button className='arrows right' onClick={turnPokemon} ></button>

            <button className='go' onClick={goPokemons}></button>
        </div>
    );
};

export default LoginControls;