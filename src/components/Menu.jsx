import React from 'react';
import '../styles/Menu.css';
import { faUser, faFileCode, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Profile from '../components/Profile';
import ReactDOM from 'react-dom';

function menuClick(e) {

    let title = document.getElementById("title");
    let profile = document.getElementsByClassName("conteneur_profile")[0];
    let competence = document.getElementsByClassName("conteneur_competence")[0];
    let projet = document.getElementsByClassName("conteneur_projet")[0];
    // Icone Profile (Rouge)
    if (e.target.checked === true && (e.target.id === "profile" || e.target.id === "icone.profile")) {
        title.innerHTML = "Profile";
        profile.style.display = "flex";
        competence.style.display = "none";
        projet.style.display = "none";
    }

    // Icone Competence (Vert)
    if (e.target.checked === true && (e.target.id === "competence" || e.target.id === "icone.competence")) {
        title.innerHTML = "Compétences";
        profile.style.display = "none";
        competence.style.display = "flex";
        projet.style.display = "none";
    }

    // Icone Projet (Bleu)
    if (e.target.checked === true && (e.target.id === "projet" || e.target.id === "icone.projet")) {
        title.innerHTML = "Projets";
        profile.style.display = "none";
        competence.style.display = "none";
        projet.style.display = "flex";
    }
}

class Menu extends React.Component {
    render(){
        return(
            <div class="conteneur_global">
                    <div class="conteneur_bouton" id="icone_profile" onClick={menuClick} >
                        <input type="radio" id="profile" name="menu" value="profile" />
                        <label for="profile">
                            <FontAwesomeIcon icon={faUser} />
                        </label>
                    </div>

                    <div class="conteneur_bouton" id="icone_competence" onChange={menuClick}>
                        <input type="radio" id="competence" name="menu" value="competence" />
                        <label for="competence">
                            <FontAwesomeIcon icon={faBook} />
                        </label>
                    </div>


                    <div class="conteneur_bouton" id="icone_projet" onClick={menuClick}>
                        <input type="radio" id="projet" name="menu" value="projet" />
                        <label for="projet">
                            <FontAwesomeIcon icon={faFileCode} />
                        </label>
                    </div>
                </div>
        )
    }
}

export default Menu;