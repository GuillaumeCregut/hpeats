import React from 'react'

const UserLogged = ({ setUserLogged, defaultUser, handleDisconnectBtn }) => {

    return (
        <div>
            <h2>Utilisateur connecté</h2>
            <button onClick={handleDisconnectBtn}>Deconnexion</button>
        </div>
    )
}

export default UserLogged
