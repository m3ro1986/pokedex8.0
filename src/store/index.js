import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice'
import pokemonSlice from './slices/pokemon.slice'
import pokemonsSlice from './slices/pokemons.slice'
import userNameSlice from './slices/userName.slice'

export default configureStore({
  reducer: {
        userName: userNameSlice,
        pokemons: pokemonsSlice,
        pokemon: pokemonSlice,
        isLoading: isLoadingSlice,
	}
})