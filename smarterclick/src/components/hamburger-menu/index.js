import React from 'react';
import './style.css';
import { slide as Menu } from 'react-burger-menu';

function BurgerMenu() {
	return (
		<Menu  right>
			<a  href="/">Home</a>
			<a  href="/signup">Sign Up</a>
			<a  href="/dashboard">Dashboard</a>
		</Menu>
		
	);
}

export default BurgerMenu;
