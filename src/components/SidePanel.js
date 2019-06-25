import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import OrderSummary from './OrderSummary';
import { Button, Typography } from '@material-ui/core';

const drawerWidth = '30%';

const useStyles = makeStyles(theme => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	button_section: {
		display: 'flex',
		margin: 15,
		justifyContent: 'space-between',
	},
	save_button: {
		width: 120,
		background: '#4caf50',
		color: 'white',
	},
	confirm_button: {
		width: 120,
		color: 'white',
		background: '#ffa000',
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	},
	title: {
		padding: theme.spacing(2),
	},
}));

export default function SidePanel() {
	const classes = useStyles();

	return (
		<Drawer
			className={classes.drawer}
			variant='permanent'
			classes={{
				paper: classes.drawerPaper,
			}}
			anchor='right'>
			<div className={classes.toolbar}>
				<Typography className={classes.title}>Order Summary</Typography>
			</div>
			<Divider />
			<List>
				<OrderSummary />
			</List>
			<Divider />
			<div className={classes.button_section}>
				<Button className={classes.save_button} variant='contained'>
					Save
				</Button>
				<Button className={classes.confirm_button} variant='contained'>
					Confirm
				</Button>
			</div>
		</Drawer>
	);
}
