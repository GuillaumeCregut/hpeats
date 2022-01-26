import React, { useState } from 'react'

const UserInfoForm = (user, handleChangeUserInfo) => {
    const userInfo = user.user;
    const [infoName, setInfoName] = useState(userInfo.name);
    const [infoFirstName, setInfoFirstName] = useState(userInfo.firstName);
    const [infoDistance, setInfoDistance] = useState(userInfo.distance);
    const [infoImage, setInfoImage] = useState(userInfo.image);
    const [infoPass1, setInfoPass1] = useState(userInfo.password);
    const [infoPass2, setInfoPass2] = useState(userInfo.password);
    const handleClickBtn = (e) => {
        e.preventDefault();
        if (infoPass1 === infoPass2) {
            if (window.confirm('Voulez vous modifier vos informations ?')) {
                const modifiedUser = {
                    firstName: infoFirstName,
                    name: infoFirstName,
                    id: userInfo.id,
                    image: infoImage,
                    distance: infoDistance,
                    password: infoPass1
                }
                handleChangeUserInfo(modifiedUser);
            }
        }
        else {
            alert('les mots de passes sont différents');
        }
    };
    return (
        <div>
            <p>Vos informations</p>
            <form action="">
                <p><label htmlFor="firstName">Prénom : </label> <input type="text" id="firstName" value={infoFirstName} onChange={(e) => setInfoFirstName(e.target.value)} /></p>
                <p><label htmlFor="name">Nom : </label> <input type="text" id="name" value={infoName} onChange={(e) => setInfoName(e.target.value)} /></p>
                <p><label htmlFor="distance">Distance : </label> <input type="text" id="distance" value={infoDistance} onChange={(e) => setInfoDistance(e.target.value)} /></p>
                <p><label htmlFor="image">Photo : </label> <input type="text" id="image" value={infoImage} onChange={(e) => setInfoImage(e.target.value)} /></p>
                <p><label htmlFor="pass1">Mot de passe : </label> <input type="password" id="pass1" value={infoPass1} onChange={(e) => setInfoPass1(e.target.value)} /></p>
                <p><label htmlFor="pass2">Confirmer : </label> <input type="password" id="pass2" value={infoPass2} onChange={(e) => setInfoPass2(e.target.value)} /></p>
                <p><button onClick={handleClickBtn}>Modifier</button></p>
            </form>
        </div>
    )
}

export default UserInfoForm
