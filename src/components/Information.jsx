import React from 'react';
import Menu from '../components/Menu';
import Profile from '../components/Profile';
import Competence from '../components/Competence';
import Projet from '../components/Projet';
import '../styles/Information.css';


class Information extends React.Component {
    render() {
        return (
            <div class="conteneur_information">
                <div class="conteneur_information_titre">
                    <h2 id="title">Profile</h2>
                </div>
                <div class="conteneur_interactive">
                    <Menu/>
                    <Profile/>
                    <Competence/>
                    <Projet/>
                </div>
            </div>
        );
    }
}

export default Information;