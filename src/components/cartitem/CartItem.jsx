import React, { useState } from 'react';

const CartItem = (props) => {
    return (
        <tr>
            <td>{props.image}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td><button>-</button>{props.quantity}<button>+</button></td>
            <td>{props.weight}</td>
            <td>x</td>
        </tr>
    )
}

export default CartItem
