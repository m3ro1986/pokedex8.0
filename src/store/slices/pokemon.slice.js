import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {},
    reducers: {
        getPokemon: ( state, action ) => {
            const pokemon = action.payload;
            return pokemon;
        }
    }
})

export const getPokemonThunk = (id) => dispatch => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( res => dispatch( getPokemon( res.data )))
}

export const { getPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;