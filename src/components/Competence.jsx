import React from 'react';
import { faUser, faFileCode, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Competence.css';

class Competence extends React.Component {
  render() {
    return (
      <div class="conteneur_competence">
        <div class="conteneur_langage">
          <h2>FrontEnd</h2>
          <div>
            <h3>Langage</h3>
            <div>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>Javascript</p>
              <p>PHP (en cours d'apprentissage)</p>
            </div>
            <h3>Technologie</h3>
            <div>
              <p>Vue.js</p>
              <p>React.js</p>
              <p>Bootstrap</p>
              <p>SASS</p>
            </div>
          </div>
        </div>
        <div class="conteneur_langage">
          <h2>Backend</h2>
          <div>
            <h3>Langage</h3>
            <div>
              <p>Javascript</p>
              <p>SQL</p>
            </div>
            <h3>Technologie</h3>
            <div>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>MongoDB</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Competence;