export default function countryReducer(state, action) {
  switch(action.type) {
    case 'salutari':
      console.log('HEY')
      console.log(state)
      console.log(action)
      state = action.countries
      return state
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
