import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SidePanel from '../components/SidePanel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import NavBar from '../components/NavBar';
import ProductList from './ProductList';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	},
}));

export default function PermanentDrawerRight() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<NavBar />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<ProductList />
			</main>
			<SidePanel />
		</div>
	);
}
