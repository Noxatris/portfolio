import React from "react";
import '../styles/StarFall.css';
import constellation from "../img/consVierge.svg";



class StarFall extends React.Component{
    render(){
        return(
            <div class="conteneur_star" id="conteneur_star">
                <img src={constellation} alt="Sa marche pas"></img>
            </div>
        )
    }    
}






export default StarFall;