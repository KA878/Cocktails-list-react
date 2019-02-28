import * as React from 'react'

export default function Cocktails(props) {
  return (<div>
    <h1>Cocktails Menu</h1>
    <ul>
      { props.drinks.map(drink =>
        <li key={drink.id} onClick={() => props.selectDrink(drink.id)}>
          { drink.drink }
        </li>
      ) }
    </ul>
  </div>)
}