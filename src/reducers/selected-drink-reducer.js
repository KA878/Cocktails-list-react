const reducer = (state = null, action = {}) => {
    switch (action.type) {
    case 'SELECT_DRINK':
      return action.payload
    default:
      return state
    }
  }
  
  export default reducer