import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardList from '../components/cartlist/CartList';
import Logo from '../components/Logo';
import LogoUser from '../components/logouser/LogoUser'
import './Cart.css';
import Carousel from '../components/carousel/Carousel';
import axios from 'axios';
import AdBox from '../components/adbox/AdBox';


const Cart = (props) => {
    /*here we call API for animals */
    const [animalCards, setAnimalCards] = useState([]);
    const url = 'https://a.nacapi.com/HPEatsAnimals';

    useEffect(() => {
        axios
            .get(url)
            .then((res) => res.data)
            .then((data) => setAnimalCards(data))
    }, []);

    /*Def local variables */
    const { cartItems, addToCart, removeFromCart, shippinPrice, setShippinPrice, userLogged, user } = props;
    /*Calculate total price and total Weight*/
    let totalWeight = 0;
    let totalPriceItems = 0;
    cartItems.forEach((item) => {
        totalPriceItems += item.price * item.qty;
        totalWeight += item.weight * item.qty;
        return 0;
    })
    let totalPrice = totalPriceItems + parseInt(shippinPrice);
    const validCart = () => {
        if (shippinPrice === 0) {
            alert('Veuillez selectionner un mode de livraison');
        }
        else {
            if (userLogged) {
                let today = new Date().toDateString();
                alert(`Veuillez régler le montant de ${totalPrice} mornilles`);
                //Log dans l'API
                axios.post('https://a.nacapi.com/HPEatsHistory/',
                    {
                        "date": today,
                        "user_id": user.id,
                        "total_price": totalPrice
                    })
                    .then(
                        function (response) {
                            console.log(response.status);
                            if (response.status === 200) {
                                alert('Votre commande à bien été enregistrée')
                            }
                        }
                    )
                    .catch(
                        function (error) {
                            console.log(error);
                        }
                    );
            }
            else {
                alert('Veuillez vous connecter pour commander');
            }
        }
    }

    return (
        <div>
            <div className="LogoDiv">
                <Link to="/"><Logo /></Link>
                <h2 className="CartTitle">Panier</h2>
                <Link to="/user"> <LogoUser user={user} /> </Link>
            </div>
            <CardList
                cart={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart} />

            <div className='CartCheckOut'>
                <p>Prix Total : <span className="">{totalPriceItems}</span> <i className="fab fa-d-and-d fa-2x MoneyIcon"></i></p>
                <p>Poids total : {totalWeight} kg</p>
            </div>
            <Carousel animalCard={animalCards} totalWeight={totalWeight} updatePrice={setShippinPrice} />
            <div className='CartCheckOut' >
                <p>Montant à payer : <span className="">{totalPrice}</span> <i className="fab fa-d-and-d fa-2x MoneyIcon"></i></p>
                <div className={totalPrice === 0 ? 'CartUnvalidBtn' : 'CartValidationBtn'} onClick={validCart}>Valider le panier</div>
            </div>
            <AdBox />
        </div>
    )
}

export default Cart
