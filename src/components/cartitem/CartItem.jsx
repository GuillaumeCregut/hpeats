import React from 'react';

const CartItem = (props) => {
    const { item, addToCart, removeFromCart } = props;
    let price = parseInt(item.price).toFixed(2);
    let quantity = parseInt(item.qty);
    return (
        <tr>
            <td>{item.image}</td>
            <td>{item.name}</td>
            <td>{price}</td>
            <td><button onClick={() => removeFromCart(item)}>-</button>{quantity}<button onClick={() => addToCart(item)}>+</button></td>
            <td>{item.weight}</td>
            <td>x</td>
        </tr>
    )
}

export default CartItem
