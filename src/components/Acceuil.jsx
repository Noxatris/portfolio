import React from 'react';
import '../styles/Acceuil.css';
import Services from '../components/Services';


class Acceuil extends React.Component {
    render() {
        return (
            <div class="conteneur_acceuil">
                <div class="conteneur_titre">
                    <h1>Mon super portfolio</h1>
                </div>
                <Services />
            </div>
        )
    }
}


export default Acceuil;