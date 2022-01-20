import React from 'react';
import './LogoUser.css';
import unknownUser from '../../assets/img/unknown.png';
import './LogoUser.css';

const LogoUser = ({ user }) => {

    return (
        <div className='IconUser'>
            <img src={user.image === '' ? unknownUser : user.image} alt={user.name} />
        </div>
    )
}

export default LogoUser
