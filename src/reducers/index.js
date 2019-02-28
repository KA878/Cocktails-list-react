import { combineReducers } from 'redux'
import drinks from './drinks-reducer'
import selectedDrink from './selected-drink-reducer'

export default combineReducers({
  drinks,
  selectedDrink
})