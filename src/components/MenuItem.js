import React from 'react';

function MenuItem({ item }) {
    return (
        <li>
            {item.name} - ${item.price.toFixed(2)}
        </li>
    );
}

export default MenuItem;
