import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HistoryItem from '../historyitem/HistoryItem';
import './UserLogged.css';

const UserLogged = ({ setUserLogged, defaultUser, handleDisconnectBtn, user }) => {
    const [history, setHistory] = useState([]);
    const url=`${process.env.REACT_APP_API_URL}history/?user_id=${user.id}`;
  //  const url = `https://a.nacapi.com/HPEatsHistory?user_id=${user.id}`;
    useEffect(() => {
        //Récupérer de l'API historique
        axios.get(url)
            .then((res) => setHistory(res.data))
    }, []);

    const handleChangeUserInfo = (modUser) => {
        console.log(modUser);
        //On modifie dans l'API
        //On modifie dans le state
        //Si tout OK, on affiche OK
        alert('Changement effectué');
    }

    return (
        <div>
            <p className='UserLoggedPName'>Bienvenue <span className='UserLoggedName'>{user.firstName} {user.name}</span> </p>
            <p className="UserLoggedBtn"><span onClick={handleDisconnectBtn} className='UserDisconnectBtn'>Deconnexion</span></p>
            <div className="UserInformation">
            </div>
            <HistoryItem history={history} />
        </div>
    )
}

export default UserLogged
