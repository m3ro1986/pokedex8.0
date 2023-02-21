import { createSlice } from '@reduxjs/toolkit';

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

export const { getPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;