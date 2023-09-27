import React from 'react';
import { useSelector } from 'react-redux';

function TopScore() {
    const player=useSelector(state=>state.Joueur)
    const ranking=[];
    player.map(e=>ranking.push({score:e.score,fullname:e.FullName}))
    const sortedRanking=ranking.sort(function(a, b){return b.score-a.score})
    return(
        <table class="table table-striped ">

            { sortedRanking.map((e)=><><tr><th>{e.fullname}</th> <th>{e.score}</th></tr><hr></hr></>   )}  
        </table>
       
    )

}

export default TopScore;