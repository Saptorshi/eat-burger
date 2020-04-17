import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	let burgerIng = Object.keys(props.ingredients)
						.map(igkey => {
							return [...Array(props.ingredients[igkey])].map((_, i) => {
								return <BurgerIngredient key={igkey+i} type={igkey} />
							})
						})
						.reduce((arr, el) => {
							return arr.concat(el);
						})
	
	if( burgerIng.length === 0 ) {
		burgerIng = <p>Please add ingredients</p>
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{burgerIng}
			<BurgerIngredient type="bread-bottom" />

		</div>
	)
}


export default burger;