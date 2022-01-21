import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HistoryItem from '../historyitem/HistoryItem';
import './UserLogged.css';

const UserLogged = ({ setUserLogged, defaultUser, handleDisconnectBtn, user }) => {
    const [history, setHistory] = useState([]);
    console.log(user);
    const url = `https://a.nacapi.com/HPEatsHistory?user_id=${user.id}`;
    useEffect(() => {
        //Récupérer de l'API historique
        axios.get(url)
            .then((res) => setHistory(res.data))
    }, []);
    return (
        <div>
            <p className='UserLoggedPName'>Bienvenue <span className='UserLoggedName'>{user.firstName} {user.name}</span> </p>
            <p className="UserLoggedBtn"><button onClick={handleDisconnectBtn}>Deconnexion</button></p>
            <div className="UserInformation">
                <p>Vos informations</p>
                <form action="">
                    <p><label htmlFor="firstName">Prénom : </label> <input type="text" name="" id="firstName" value={user.firstName} /></p>
                    <p><label htmlFor="name">Nom : </label> <input type="text" name="" id="name" value={user.name} /></p>
                    <p><label htmlFor="distance">Distance : </label> <input type="text" name="" id="distance" value={user.distance} /></p>
                </form>
            </div>
            <HistoryItem history={history} />
        </div>
    )
}

export default UserLogged
