import React from 'react';
import { Route,Routes } from 'react-router-dom';
import App from '../App/App';
import Accueil from '../Accueil/Accueil';
import AfficherPLR from "../Joueurs/Aff/AfficherPLR"
import AjouterPLR from '../Joueurs/AjouterPL/AjouterPLR';
import AfficherMatch from "../Match/Aff/AfficherMatch"
import AjouteMatch from "../Match/nvMatch/AjouteMatch"
import TopScore from '../Joueurs/TopScore/TopScore';
import RechercheJ from '../Joueurs/RechercheJ.js/RechercheJ';
import TerminerMatch from '../Match/terminerMatch/terminerMatch';
import MatchTerminer from '../Match/Aff/MatchTerminer';
function Routs() {
    return (
        <div>
            <App></App>
            <Routes>
                 <Route path='/' element={<Accueil/>}/>
                <Route path='/AffiherJoueur' element={<AfficherPLR/>}/> 
                <Route path='/AffiherMatch' element={<AfficherMatch></AfficherMatch>}/>
                <Route path='/AjouterMatch' element={<AjouteMatch></AjouteMatch>}/>
                <Route path='/AjouterJoueur' element={<AjouterPLR></AjouterPLR>}/>
                <Route path='/TopScore' element={<TopScore></TopScore>}/>
                <Route path='/RechercherJ' element={<RechercheJ></RechercheJ>}/>
                <Route path='/terminerMatch/:id/:index' element={<TerminerMatch></TerminerMatch>}/>   
                <Route path='/MatchTerminer' element={<MatchTerminer></MatchTerminer>}/>   
            </Routes>
        </div>
    );
}

export default Routs;