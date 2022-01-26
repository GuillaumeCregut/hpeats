import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserLogin from '../components/usercomponents/UserLogin';
import UserLogged from '../components/usercomponents/UserLogged';
import CartIcon from '../components/navbar/CartIcon';
import Logo from '../components/Logo';
import './UserPage.css';
import LogoUser from '../components/logouser/LogoUser';

const UserPage = ({ userLogged, setUserLogged, user, setUser, defaultUser, setIdHisto, cart }) => {
    //Récupération de la liste des utilisateurs
    const url = 'https://a.nacapi.com/HPEatsUsers';
    const [users, setUsers] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        axios.get(url)
            .then((res) => res.data)
            .then((data) => setUsers(data));
    }, [toggle]);

    let maxId = 0;
    users.forEach((item) => {
        if (item.id > maxId) {
            maxId = item.id;
        }
    });

    const handleDisconnectBtn = () => {
        setUserLogged(false);
        setUser(defaultUser);
    }
    const handleConnectBtn = () => {
        if (login === '' | password === '') {
            return;
        }
        //Compare avec le tableau
        const userItem = users.find((user) => user.firstName === login);
        if (userItem !== undefined) {
            if (userItem.password === password) {
                setUserLogged(true);
                setUser(userItem);
                setLogin('');
                setPassword('');
            }
            else {
                alert('Mot de passe incorrect');
            }
        }
        else
            alert("Vous n'avez pas de compte chez nous");
    }

    return (
        <div>
            <div className="UserHeader">
                <div className='UserLogoHeader'>
                    <Link to="/"><Logo /></Link>
                </div>
                <div className="UserLogoDiv">
                    <LogoUser user={user} />
                    <Link to='/cart' className='cart'><CartIcon cart={cart} /></Link>
                </div>
            </div>
            <h1 className='UserPageTitle'>Utilisateurs</h1>
            {userLogged ?
                <UserLogged
                    setUserLogged={setUserLogged}
                    handleDisconnectBtn={handleDisconnectBtn}
                    user={user}
                /> :
                <UserLogin
                    login={login}
                    setLogin={setLogin}
                    password={password}
                    setPassword={setPassword}
                    handleConnectBtn={handleConnectBtn}
                    setToggle={setToggle}
                    maxId={maxId}
                    toggle={toggle}
                />}
        </div>
    )
}

export default UserPage
