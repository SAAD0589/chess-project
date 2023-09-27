import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Del_Match } from '../../redux/Action';

import '../../css/Desing.css';
import Loading from './Loading';

function TerminerMatch() {
    const dispatch=useDispatch()
    const obj=useParams()
    const id=obj.id;
    const Matches=useSelector(state=>state.Match)
    const Match=Matches.find(e=>e.id==id)
    const [ShowComp,SetShowComp]=useState(true);
    const obj2=useParams()
    const index=obj2.index;
    useEffect(()=>{
        setInterval(()=>{
        SetShowComp(false)
        },5000)
    }
    ,[]
    )
    // console.log(Match.id_gagnant)*
    const Deciding=(nb)=>{
        
        console.log("hello") 
        // return(nb==0 ? <h1 class="h1. Bootstrap heading">{Match.id_joueur1.FullName} </h1> :<h1 class="h1. Bootstrap heading">{Match.id_joueur2.FullName} </h1>&& 
        if(nb===0){
            // dispatch(ChangeWinner(Match.id_joueur1.id))
            // dispatch(WinnerWinnerChikenDiner())
           return( <h1 class="h1. Bootstrap heading">{Match.id_joueur1.FullName} </h1>)
        }else if(nb===1){
            // dispatch(ChangeWinner(Match.id_joueur2.id))
            // dispatch(WinnerWinnerChikenDiner())
           return (<h1 class="h1. Bootstrap heading">{Match.id_joueur2.FullName} </h1>)
        }
       
    }
    
      
    return(
        <div className='container py-5 mt-5  'id="bolde">
            <Link class="text-dark" to="/AffiherMatch" >
                <button class="btn btn-outline-dark" onClick={()=>dispatch(Del_Match(index))}>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg> 
                        go back
                   
                
                </button>
                </Link>
                <h2 className="text-center mx-10">Match {Match.id} </h2>
                <h3 className="text-center mx-10">Date: {Match.date}</h3>
                <div className="row">
                    <div className="col-sm-4 p-5">
                    <div className="card" id='cards'>
                    <img class="card-img-top" src={`/pictures/${Match.id_joueur1.image}`} alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center mx-10">{Match.id_joueur1.FullName}</h5>
                        <p className="card-text text-center mx-10">{Match.id_joueur1.nationality}</p>
                        </div>
                    </div>
                    </div>
                    <div className='col-sm-3 text-center m-auto '>
                        {ShowComp ? <Loading></Loading> : Deciding(Math.floor(Math.random()*2))  }
                    </div>

                    <div className="col-sm-4 p-5">
                    <div className="card">
                    <img class="card-img-top" src={`/pictures/${Match.id_joueur2.image}`} alt="Card image cap"/>
                        <div className="card-body text-center">
                        <h5 className="card-title">{Match.id_joueur2.FullName}</h5>
                        <p className="card-text">{Match.id_joueur2.nationality}</p>
                        </div>
                    </div>
                    </div>
              </div>
                </div>
    )
    
}

export default TerminerMatch;