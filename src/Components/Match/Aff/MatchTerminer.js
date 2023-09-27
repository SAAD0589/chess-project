import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
function MatchTerminer() {
    const Matches=useSelector(state=>state.MatchTerminer)
    const Winner=useSelector(state=>state.winner)
    return (
        <div  className='Tbody'>
           
            <div  class="container navbar bg-muted">
            <Link to="/AffiherMatch" class="text-dark"><button class="btn bg-light  btn-lg">Match en cours </button></Link>
            <Link to="/MatchTerminer" class="text-dark"><button class="btn bg-light btn-lg">Match Terminer</button></Link>
            </div>
            { Matches.length>0 ?
            <div className='container' id='parent'>
        <div className='row'>
          <h1>Match Terminer :</h1>
        {Matches.map((item,index)=>{
          return(
                <div className='container py-5 p-5 ' key={index} id="bolde">
                <h2 className="text-center mx-10">Match {item.id} </h2>
                <h3 className="text-center mx-10">Date: {item.date}</h3>
                <div className="row">
                <div className="col-sm-4">
                  <div className="card" id='cards'>
                  <img class="card-img-top" src={`/pictures/${item.id_joueur1.image}`}/>
                    <div className="card-body">
                      <h5 className="card-title text-center mx-10">{item.id_joueur1.FullName}</h5>
                      <p className="card-text text-center mx-10">{item.id_joueur1.nationality}</p>
                    </div>
                  </div>
                </div>
                <div className='col-sm-2 mx-auto my-auto'>
                    {/* <h1>winner : {item.id_joueur1.id===Winner? <h1>{item.id_joueur1.FullName}</h1>:<h1>{item.id_joueur2.FullName}</h1>}</h1> */}
                    <h1 class="h2Video">VS</h1>
                </div>
            
                <div className="col-sm-4">
                  <div className="card">
                  <img class="card-img-top" src={`/pictures/${item.id_joueur2.image}`} alt="Card image cap"/>
                    <div className="card-body text-center">
                    <h5 className="card-title">{item.id_joueur2.FullName}</h5>
                    <p className="card-text">{item.id_joueur2.nationality}</p>
                    </div>
                  </div>
                </div>
              </div>
                </div>
          )
        })}
      </div>
    </div>
    :<h1 class="h2Video text-muted p-5 m-5 opacity-50">no match has ended yet  . . .</h1>}
        </div>
    );
}

export default MatchTerminer;