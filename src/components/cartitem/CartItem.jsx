import React from 'react';
import './CartItem.css';
import './CartItem.css';

const CartItem = (props) => {
    const { item, addToCart, removeFromCart } = props;
    let price = parseInt(item.price).toFixed(2);
    let quantity = parseInt(item.qty);

    return (
        <tr className="CartRow">
            <td className="CartCell CartImgCell"><img src="{item.image}" alt={item.name} className="CartImageItem" /></td>
            <td className="CartCell">{item.name}</td>
            <td className="CartCell">{price}<i className="fab fa-d-and-d fa-1x MoneyIcon"></i></td>
            <td className="CartCell CartCellQty"><button className="CartListBtn CartListBenMin" onClick={() => removeFromCart(item)}>-</button> {quantity} <button className="CartListBtn CartListBeAdd" onClick={() => addToCart(item)}>+</button></td>
            <td className="CartCell">{item.weight}</td>
            <td className="CartCell">{quantity * price} <i className="fab fa-d-and-d fa-1x MoneyIcon"></i></td>
        </tr>
    )
}

export default CartItem
