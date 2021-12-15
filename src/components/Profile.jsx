import React from 'react';
import '../styles/Profile.css';

class Profile extends React.Component {
    render() {
        return (
            <div class="conteneur_profile">
               <div class="conteneur_profile_info" id="profile_qui">
                    <p>Qui suis-je ?</p>
               </div>
               <div class="conteneur_profile_info" id="profile_competence">
                    <p>Mes passions</p> 
               </div>
               <div class="conteneur_profile_info" id="profile_projet">
                    <p>Mon Parcours</p>
               </div>
            </div>
        )
    }
}

export default Profile;