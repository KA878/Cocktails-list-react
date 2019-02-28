import * as React from 'react'

export default function CocktailDetails(props) {

  const cocktail = props.drink
  console.log(cocktail)
  return (<div>
    <h2>{ cocktail.drink }</h2>

    <p>
      <i>{ cocktail.category }</i>
    </p>

    {<ul>
      <li key={cocktail.instructions}>{ cocktail.instructions }</li> 
    </ul>}
  </div>)
}