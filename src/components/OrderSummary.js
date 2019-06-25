import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const OrderSummary = () => {
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
					<ListItemIcon>
						{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
					</ListItemIcon>
					<ListItemText primary={text} />
				</ListItem>
			))}
		</div>
	);
};

export default OrderSummary;
