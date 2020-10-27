import React from 'react';
import Followers from './Followers';
import Projects from './Projects';
import Rank from './Rank';
import mount from '../../images/mount.jpg'
import user from '../../images/user.png'
const Profile = () => {
    return (
        <div className="profile">
            <div className="image">
                <img src={mount} className="topImage" width="100%" alt="mount" />
                
                <img className="user" src={user} width="100%" alt="user" />
               
            </div>
            <h3 className="name">Ayo Boluwatife Gbemi</h3>
            <h4 className="location">Los Angeles</h4>
            <button className="badge">Pro Level</button>
            <div className="profileProp">
                <Followers />
                <Projects/>
                <Rank/>
            </div>
             
        </div>
    );
}
export default Profile;
