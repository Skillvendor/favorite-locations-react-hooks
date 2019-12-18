import { get, post, del, put } from './query'

export async function getCountriesQuery() {
  let countries = await get('api/spots/countries')

  return countries.data
}

// export async function postCountriesQuery(params) {
//   let country = await post('api/spots/countries', params)

//   console.log('am asteptat crearea')
//   console.log(country)

//   return country.data
// }

// export async function deleteCountryQuery(countryId) {
//   await del(`api/spots/countries/${countryId}`)

//   return
// }

// export async function updateCountryQuery(countryId, params) {
//   console.log("in update")
//   console.log(params)
//   let country = await put(`api/spots/countries/${countryId}`, params)

//   return country.data
// }
