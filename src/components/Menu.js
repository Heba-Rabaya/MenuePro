import React from 'react';
import MenuItem from './MenuItem';

const menuItems = [
    { id: 1, name: 'Pizza', price: 12.99 },
    { id: 2, name: 'Burger', price: 9.99 },
    { id: 3, name: 'Pasta', price: 11.99 },
];

function Menu() {
    return (
        <div>
            <h2>Our Menu</h2>
            <ul>
                {menuItems.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}

export default Menu;
