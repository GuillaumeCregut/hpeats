import React from 'react'
import CartItem from '../cartitem/CartItem';

const CartList = (props) => {
    //Props contient le tableau de commande
    const arrayCart = props.cart;
    console.log(props);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td>Nom</td>
                        <td>Prix unitaire</td>
                        <td>Quantité</td>
                        <td>Poids</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    {arrayCart.map((item) =>
                        <CartItem
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            quantity={item.quantity}
                            weight={item.weight}
                        />)}

                </tbody>
            </table>
        </div>
    )
}

export default CartList
