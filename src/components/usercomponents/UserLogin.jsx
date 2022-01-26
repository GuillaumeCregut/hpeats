import React, { useState } from 'react';
import axios from 'axios';
import "./UserLogin.css";

const UserLogin = ({ login, setLogin, password, setPassword, handleConnectBtn, setToggle, maxId, toggle }) => {
    //Hooks definition
    const [signinFirstname, setSigninFirstname] = useState('');
    const [signinLastName, setSigninLastName] = useState('');
    const [signinPass1, setSigninPass1] = useState('');
    const [signinPass2, setSinginPass2] = useState('');
    const [siginImage, setSigninImage] = useState('');
    const [signinDistance, setSigninDistance] = useState('');
    const handleChangeLogin = (e) => {
        setLogin(e.target.value);
    }
    const handleChangePass = (e) => {
        setPassword(e.target.value);
    }
    const handlePostEvent = () => {
        if (signinPass1 === signinPass2) {
            let newId = maxId + 1;
            axios.post('https://a.nacapi.com/HPEatsUsers/',
                {
                    firstName: signinFirstname,
                    name: signinLastName,
                    id: newId,
                    image: siginImage,
                    distance: signinDistance,
                    password: signinPass1
                })
                .then(function (response) {
                    console.log(response.status);
                    if (response.status === 200) {
                        alert('Vous êtes bien enregistré, veuillez vous connecter')
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            setToggle(!toggle);
            //empty fields
            setSigninDistance('');
            setSigninFirstname('');
            setSigninLastName('');
            setSigninImage('');
            setSigninPass1('');
            setSinginPass2('');
        }
        else {
            alert("Les mots de passe sont différents");
        }
    }

    const handleBackClick = () => {
        const signUpList = document.getElementsByClassName('signUp');
        for (let i = 0; i < signUpList.length; i++) {
            signUpList[i].classList.add('active-sx');
            signUpList[i].classList.remove("inactive-sx");
        };
        const signInList = document.getElementsByClassName('signIn');
        for (let i = 0; i < signInList.length; i++) {
            signInList[i].classList.add('inactive-sx');
            signInList[i].classList.remove("active-sx");
        };
    };

    const handleLogin = () => {
        const signUpList = document.getElementsByClassName('signUp');
        for (let i = 0; i < signUpList.length; i++) {
            signUpList[i].classList.add('inactive-sx');
            signUpList[i].classList.remove("active-sx");
        };
        const signInList = document.getElementsByClassName('signIn');
        for (let i = 0; i < signInList.length; i++) {
            signInList[i].classList.add('active-sx');
            signInList[i].classList.remove("inactive-sx");
        };
    };

    const handleSigin = () => {
        const divSigin = document.getElementById('SignInForm');
        divSigin.style.visibility = "visible";
    }

    return (
        <div className="UserLoginMainContainer">
            <div className='UserLoginContainer'>
                <form className="signUp UserLoginForm">
                    <h3 className='UserTitle'>Créer un compte</h3>
                    <input className="w100 UserInput" type="text" value={signinFirstname} placeholder='Votre prénom' reqired onChange={(e) => setSigninFirstname(e.target.value)} />
                    <input className="w100 UserInput" type="text" value={signinLastName} placeholder='Votre nom' reqired onChange={(e) => setSigninLastName(e.target.value)} />
                    <input type="password" className='UserInput' value={signinPass1} placeholder='mot de passe' onChange={(e) => setSigninPass1(e.target.value)} />
                    <input type="password" className='UserInput' value={signinPass2} placeholder='mot de passe' onChange={(e) => setSinginPass2(e.target.value)} />
                    <input type="text" value={signinDistance} placeholder='Distance' className='UserInput' onChange={(e) => setSigninDistance(e.target.value)}></input>
                    <input type="text" value={siginImage} placeholder='Votre photo' className='UserInput' onChange={(e) => setSigninImage(e.target.value)}></input>
                    <button className="form-btn sx log-in UserBtn" type="button" onClick={handleLogin}>Connexion</button>
                    <button className="form-btn dx UserBtn" type="button" onClick={handlePostEvent}>S'enregistrer</button>
                </form>
                <form className="signIn UserLoginForm">
                    <h3 className='UserTitle'>Connexion</h3>
                    <input className='UserInput' type="text" value={login} placeholder='Votre prénom' reqired onChange={(e) => handleChangeLogin(e)} />
                    <input className='UserInput' type="password" value={password} placeholder='mot de passe' reqired onChange={(e) => handleChangePass(e)} />
                    <button className="form-btn sx back UserBtn" type="button" onClick={handleBackClick}>S'enregistrer</button>
                    <button className="form-btn dx UserBtn" type="button" onClick={handleConnectBtn}>Connexion</button>
                </form>
            </div >
        </div >
    )
}

export default UserLogin
