import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
	prices: {
		textAlign: 'end',
	},
}));

const OrderSummary = () => {
	const classes = useStyles();
	return (
		<div>
			{[
				'Rice',
				'French Fries',
				'OX-tails',
				'Cola',
				'dessert',
				'sprite',
				'Rum Cake',
				'Special',
			].map((text, index) => (
				<ListItem button key={text}>
					<ListItemText primary={text} />
					<ListItemText className={classes.prices} primary={'$4.50'} />
				</ListItem>
			))}
		</div>
	);
};

export default OrderSummary;
