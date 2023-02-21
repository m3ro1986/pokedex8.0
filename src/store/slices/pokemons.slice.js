import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getPokemon } from './pokemon.slice';

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: [],
    reducers: {
        getPokemons: ( state, action ) => {
            const pokemons = action.payload;
            return pokemons;
        }
    }
})

export const getPokemonsThunk = () => dispatch => {

    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1279`)
        .then( res => dispatch( getPokemons( res.data.results )))

}


export const { getPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;