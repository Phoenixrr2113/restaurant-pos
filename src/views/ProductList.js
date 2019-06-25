import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import tileData from './tileData';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: 500,
		height: 450,
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
}));

const tileData = [
	{
		img: 'image',
		title: 'Image',
		author: 'author',
	},
];

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
			<GridList cellHeight={180} className={classes.gridList}>
				<GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
					<ListSubheader component='div'>December</ListSubheader>
				</GridListTile>
				{tileData.map(tile => (
					<GridListTile key={tile.img}>
						<img src={tile.img} alt={tile.title} />
						<GridListTileBar
							title={tile.title}
							subtitle={<span>by: {tile.author}</span>}
							actionIcon={
								<IconButton
									aria-label={`info about ${tile.title}`}
									className={classes.icon}>
									<InfoIcon />
								</IconButton>
							}
						/>
					</GridListTile>
				))}
			</GridList>
			<AppBar position='static'>
				<Tabs value={value} onChange={handleChange}>
					<Tab label='Item One' />
					<Tab label='Item Two' />
					<Tab label='Item Three' />
				</Tabs>
			</AppBar>
			{/* {value === 0 && <TabContainer>Item One</TabContainer>}
			{value === 1 && <TabContainer>Item Two</TabContainer>}
			{value === 2 && <TabContainer>Item Three</TabContainer>} */}
		</div>
	);
}
