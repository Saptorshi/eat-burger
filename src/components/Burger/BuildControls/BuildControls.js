import React from 'react';
import classes from './BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';


const controls = [
	{label : "Salad", type : "salad"},
	{label : "Bacon", type : "bacon"},
	{label : "Meat", type : "meat"},
	{label : "Cheese", type : "cheese"},
] 

const buildControls = (props) => (
	<div className={classes.buildControls}>
		{controls.map(c => (
			<BuildControl key={c.label} label={c.label}/>
		)) }
	</div>
)

export default buildControls;