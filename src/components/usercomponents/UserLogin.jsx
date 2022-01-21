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

    return (
        <div>
            <div className='LoginDiv'>
                <h2>Se connecter</h2>
                <input type="text" value={login} name="login" placeholder='Votre prénom' className='InputUSerLogin' onChange={(e) => handleChangeLogin(e)}></input>
                <input type="password" value={password} name="password" placeholder='mot de passe' className='InputUSerLogin' onChange={(e) => handleChangePass(e)}></input>
                <button onClick={handleConnectBtn}>Connexion</button>
            </div>
            <div className='SignInDiv'>
                <h2>S'enregistrer</h2>
                <input type="text" value={signinFirstname} name="firstname" placeholder='Votre prénom' className='InputUSerLogin' onChange={(e) => setSigninFirstname(e.target.value)}></input>
                <input type="text" value={signinLastName} name="lastname" placeholder='Votre nom' className='InputUSerLogin' onChange={(e) => setSigninLastName(e.target.value)}></input>
                <input type="password" value={signinPass1} name="password" placeholder='mot de passe' className='InputUSerLogin' onChange={(e) => setSigninPass1(e.target.value)}></input>
                <input type="password" value={signinPass2} name="password" placeholder='mot de passe' className='InputUSerLogin' onChange={(e) => setSinginPass2(e.target.value)}></input>
                <input type="text" value={signinDistance} name="distance" placeholder='Distance' className='InputUSerLogin' onChange={(e) => setSigninDistance(e.target.value)}></input>
                <input type="text" value={siginImage} name="image" placeholder='Votre photo' className='InputUSerLogin' onChange={(e) => setSigninImage(e.target.value)}></input>
                <button onClick={handlePostEvent}>S'enregistrer</button>
            </div>
        </div>
    )
}

export default UserLogin
