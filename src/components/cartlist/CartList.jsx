import React from 'react'
import CartItem from '../cartitem/CartItem';
import './CartList.css';

const CartList = (props) => {
    const { cart, addToCart, removeFromCart } = props;

    return (
        <div className="CartList">
            {cart.length === 0 ? <div>Le panier est vide</div> :
                (<table className="CartTable">
                    <thead>
                        <tr className="CartTableHead">
                            <td className='CartImgCell'></td>
                            <td>Nom</td>
                            <td>Prix unitaire</td>
                            <td>Quantité</td>
                            <td>Poids</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) =>
                            <CartItem
                                key={item.id}
                                item={item}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                            />)}
                    </tbody>
                </table>)}
        </div>
    )
}

export default CartList
