import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
	},
}));

function TabContainer(props) {
	return (
		<Typography component='div' style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

export default function ProductList() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	function handleChange(event, newValue) {
		setValue(newValue);
	}
	return (
		<div className={classes.root}>
			{value === 0 && (
				<TabContainer>
					<DrinkList />
				</TabContainer>
			)}
			{value === 1 && (
				<TabContainer>
					<LunchList />
				</TabContainer>
			)}
			{value === 2 && (
				<TabContainer>
					<DessertList />
				</TabContainer>
			)}
			{value === 3 && (
				<TabContainer>
					<SpecialsList />
				</TabContainer>
			)}
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
