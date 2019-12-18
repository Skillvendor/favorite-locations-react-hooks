export default function favoriteReducer(state, action) {
  switch(action.type) {
    case 'salutari favorite':
      console.log('HEY DIN FAVORITE')
      return state
    default:
      return state
  }
}
