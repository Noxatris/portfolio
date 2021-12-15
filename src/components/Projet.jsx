import React from 'react';
import '../styles/Projet.css';
import { faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Projet extends React.Component{
    render(){
      return (
        <div class="conteneur_projet">
          <div class="liste_projet">
            <div class="projet"></div>
            <div class="projet"></div>
            <div class="projet"></div>
            <div class="projet"></div>
            <div class="projet"></div>
            <div class="projet"></div>
            <div class="projet"></div>
          </div>
          <div class="btn_liste_projet">
            <div class="btn_projet" id="btn_scrollUp">
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
            <div class="btn_projet" id="btn_scrollDown">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          </div>
        </div>
      )
    }
}

export default Projet;