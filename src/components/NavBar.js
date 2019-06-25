import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 'auto';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginRight: drawerWidth,
	},
}));

const NavBar = () => {
	const classes = useStyles();
	return (
		<AppBar position='fixed' className={classes.appBar}>
			<Toolbar>
				<Typography variant='h6' noWrap>
					Cashier
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
