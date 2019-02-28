import * as React from 'react'
import CocktailsList from './CocktailsList'
import { connect } from 'react-redux'

class CocktailsListContainer extends React.Component {
  selectDrink = (id) => {
    this.props.dispatch({
        type: 'SELECT_DRINK',
        payload: id
    })
  }

  render() {
    return <CocktailsList drinks={this.props.drinks} selectDrink={this.selectDrink} />
  }
}

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks
  }
}

export default connect(mapStateToProps)(CocktailsListContainer)