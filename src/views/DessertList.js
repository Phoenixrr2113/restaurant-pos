import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';

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

const DessertList = () => {
	const classes = useStyles();
	return (
		<GridList cellHeight={180} className={classes.gridList}>
			<GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
				<ListSubheader component='div'>DESSERT</ListSubheader>
			</GridListTile>
			{tileData.map(tile => (
				<GridListTile key={tile.img}>
					<img src={tile.img} alt={tile.title} />
					<GridListTileBar title={tile.title} />
				</GridListTile>
			))}
		</GridList>
	);
};

export default DessertList;
