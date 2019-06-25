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
		margin: 0,
		// justifyContent: 'space-between',
	},
	save_button: {
		position: 'absolute',
		top: 'auto',
		right: 'auto',
		left: 0,
		bottom: 0,
		height: 70,
		width: '50%',
		background: '#4caf50',
		color: 'white',
	},
	confirm_button: {
		position: 'absolute',
		top: 'auto',
		right: 0,
		left: 'auto',
		bottom: 0,
		width: '50%',
		height: 70,
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
	total: {
		padding: theme.spacing(2),
		display: 'flex',
		justifyContent: 'space-between',
	},
	prices: {
		textAlign: 'end',
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
			<div className={classes.total}>
				<Typography>Tax</Typography>
				<Typography className={classes.prices}>$3.00</Typography>
			</div>
			<Divider />
			<div className={classes.total}>
				<Typography>Total</Typography>
				<Typography className={classes.prices}>$12.00</Typography>
			</div>
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
