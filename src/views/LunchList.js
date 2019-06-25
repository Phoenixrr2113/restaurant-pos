import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	gridList: {
		// width: 'auto',
		// height: 'auto',
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
}));

const tileData = [
	{
		img:
			'https://res.cloudinary.com/dlrdfp08e/image/upload/v1560956945/seabreeze/oxtail-meal.jpg',
		title: 'OX-Tail',
		author: 'author',
	},
	{
		img:
			'https://res.cloudinary.com/dlrdfp08e/image/upload/v1560956945/seabreeze/oxtail-meal.jpg',
		title: 'OX-Tail',
		author: 'author',
	},
	{
		img:
			'https://res.cloudinary.com/dlrdfp08e/image/upload/v1560956945/seabreeze/oxtail-meal.jpg',
		title: 'OX-Tail',
		author: 'author',
	},
	{
		img:
			'https://res.cloudinary.com/dlrdfp08e/image/upload/v1560956945/seabreeze/oxtail-meal.jpg',
		title: 'OX-Tail',
		author: 'author',
	},
	{
		img:
			'https://res.cloudinary.com/dlrdfp08e/image/upload/v1560956945/seabreeze/oxtail-meal.jpg',
		title: 'OX-Tail',
		author: 'author',
	},
	{
		img:
			'https://res.cloudinary.com/dlrdfp08e/image/upload/v1560956945/seabreeze/oxtail-meal.jpg',
		title: 'OX-Tail',
		author: 'author',
	},
	{
		img:
			'https://res.cloudinary.com/dlrdfp08e/image/upload/v1560956945/seabreeze/oxtail-meal.jpg',
		title: 'OX-Tail',
		author: 'author',
	},
	{
		img:
			'https://res.cloudinary.com/dlrdfp08e/image/upload/v1560956945/seabreeze/oxtail-meal.jpg',
		title: 'OX-Tail',
		author: 'author',
	},
];

const LunchList = () => {
	const classes = useStyles();
	return (
		<GridList cols={3} cellHeight={160} className={classes.gridList}>
			<GridListTile key='Subheader' cols={3} style={{ height: 'auto' }}>
				<ListSubheader component='div'>LUNCH</ListSubheader>
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

export default LunchList;
