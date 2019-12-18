import React from 'react';
import countryReducer from '../reducers/countryReducer'
import favoriteReducer from '../reducers/favoriteReducer'

const initialState = {};
const Store = React.createContext();
const Dispatch = React.createContext();

const combinedReducers = ({ countries, favorites}, action) => ({
  countries: countryReducer(countries, action),
  favorites: favoriteReducer(favorites, action),
})

function StateProvider({ children }) {
  const [state, dispatch] = React.useReducer(combinedReducers, initialState)

  return (
    <Store.Provider value={state}>
      <Dispatch.Provider value={dispatch}>
        {children}
      </Dispatch.Provider>
    </Store.Provider>
  )
}

function useStore() {
  const context = React.useContext(Store)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

function useDispatch() {
  const context = React.useContext(Dispatch)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

export { StateProvider, useStore, useDispatch }
