import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../store/slices/isLoading.slice';
import { getPokemonThunk } from '../../store/slices/pokemon.slice';


const Controls = () => {


    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon);
    const [name, setName] = useState('');
    const [animated, setAnimated] = useState('normal');
    const [back, setBack] = useState('');
    const [slide, setSlide] = useState('');
    const [random, setRandom] = useState(() => Math.floor(Math.random() * 649));
    const [placeHolder, setPlaceHolder] = useState('your name');

    useEffect(() => {
        dispatch(getPokemonThunk(random))
    }, [])

    const changeColorPokemon = () => {
        animated === 'normal' ? setAnimated('shiny') : setAnimated('normal')
    }

    const turnPokemon = () => {
        back === '' ? setBack('back/') : setBack('')
    }

    const changePokemon = (btn) => {
        if (btn === 'R') {
            setSlide('slideR')
            setTimeout(() => {
                setRandom(random + 1);
                dispatch(getPokemonThunk(random + 1));
            }, 750)
            setTimeout(() => {
                setSlide('');
            }, 1500)
        } else {
            setSlide('slideL')
            setTimeout(() => {
                setRandom(random - 1);
                dispatch(getPokemonThunk(random - 1));
            }, 750)
            setTimeout(() => {
                setSlide('');
            }, 1500)
        }

    }

    const goPokedex = () => {
        dispatch( setIsLoading( 'loading' ))
        setTimeout( () => {
            dispatch( setIsLoading( '' ))
        }, 1500)
    }

    return (
        <div className='controlBox'>
            <input
                type="text"
                placeholder={placeHolder}
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <div className='controlsBox'>
                <div className='imgBox'>
                    <img className={slide} src={`animated/${animated}/${back}${random}.gif`} alt="" />
                    <span className='pokeName'>{pokemon.name}</span>
                    <span className='pokeColor'>{animated}</span>
                    <span className='pokeNumber'>{pokemon.id}</span>
                </div>
                <button onClick={changeColorPokemon} className='btns up'></button>
                <button onClick={turnPokemon} className='btns down'></button>
                <button onClick={() => changePokemon('R')} className='btns right'></button>
                <button onClick={() => changePokemon('L')} className='btns left'></button>

                <button onClick={goPokedex} className='go'>go</button>
            </div>
        </div>
    );
};

export default Controls;