import * as React from 'react'
import { connect } from 'react-redux'
import CocktailDetails from './CocktailDetails'

class CocktailDetailsContainer extends React.Component {
  render() {
    const drink = this.props.drink
    if (!drink) return null

    return <CocktailDetails drink={drink} />
  }
}

const mapStateToProps = (state) => {
  if (state.selectedDrink !== null) {
    return {
      drink: state.drinks.find(drink => drink.id === state.selectedDrink)
    }
  }
  return {}
}

export default connect(mapStateToProps)(CocktailDetailsContainer)