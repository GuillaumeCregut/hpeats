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
            <p>Bienvenue <span className=''>{user.firstName} {user.name}</span> </p>
            <HistoryItem history={history} />
            <button onClick={handleDisconnectBtn}>Deconnexion</button>
        </div>
    )
}

export default UserLogged
