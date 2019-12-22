import React from 'react';
import Country from './country'
import { getCountriesQuery } from '../queries/country'
import { useStore, useDispatch } from '../state-management/stores/store'

const Countries = () => {
  const [effectRanState, setEffectState] = React.useState(false)
  const store = useStore()
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!effectRanState) {
        const countriesPromise = getCountriesQuery()
        countriesPromise.then(countries => dispatch({
          type: 'salutari',
          countries,
        }))
        setEffectState(true)
    }
  }, [effectRanState])

  return (
    <React.Fragment>
      <div className='country-container'>
        {(store.countries || []).map((el) => <Country key={`country_${el.id}`} {...el}></Country>)}
      </div>
    </React.Fragment>
  )
}



export default Countries
