import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DrinkList from './DrinkList';
import LunchList from './LunchList';
import DessertList from './DessertList';
import SpecialsList from './SpecialsList';

const drawerWidth = 'auto';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginRight: drawerWidth,
		top: 'auto',
		bottom: 0,
		background: '#4caf50',
	},
}));

export default function ProductList() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	function handleChange(event, newValue) {
		setValue(newValue);
	}
	return (
		<div className={classes.root}>
			{value === 0 && <DrinkList />}
			{value === 1 && <LunchList />}
			{value === 2 && <DessertList />}
			{value === 3 && <SpecialsList />}
			<AppBar position='fixed' className={classes.appBar}>
				<Tabs value={value} onChange={handleChange}>
					<Tab label='Drinks' />
					<Tab label='Lunch' />
					<Tab label='Desserts' />
					<Tab label='Specials' />
				</Tabs>
			</AppBar>
		</div>
	);
}
