import React  from 'react'
import {useDispatch,  useSelector } from 'react-redux/es/exports'
import {Link} from 'react-router-dom'
import '../../css/Desing.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
import TopScore from '../../Joueurs/TopScore/TopScore';
import { useState } from 'react'
import { Add_trmMatch } from '../../redux/Action';


export default function AfficheMatch() {
    const items=useSelector(data=>data.Match)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch()
  return (
    <div className='ParentName'>
      <div class="container navbar bg-muted">
      <Link to="/AffiherMatch" class="text-dark"><button class="btn bg-light  btn-lg">Match en cours </button></Link>
      <Link to="/MatchTerminer" class="text-dark"><button class="btn bg-light btn-lg">Match Terminer</button></Link>
      </div>
      
       <div class="sideBar ">
        <nav class='pt-3 '>
            <div className="navbar-item">
              <Button variant="light btn-outline-dark" onClick={handleShow} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg> Top Score
              </Button>
            </div>
            </nav>
        </div>
        {items.length>0? 
        
      
        <div className='container' id='parent'>
        <div className='row'>
          <h1>Match en cours :</h1>
        {items.map((item,index)=>{
          const src1 ="./pictures/"+item.id_joueur1.image
          const src2 ="./pictures/"+item.id_joueur2.image
          return(
                <div className='container py-5 p-5 ' key={index} id="bolde">
                <h2 className="text-center mx-10">Match {item.id} </h2>
                <h3 className="text-center mx-10">Date: {item.date}</h3>
                <div className="row">
                <div className="col-sm-4">
                  <div className="card" id='cards'>
                  <img class="card-img-top" src={src1} alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title text-center mx-10">{item.id_joueur1.FullName}</h5>
                      <p className="card-text text-center mx-10">{item.id_joueur1.nationality}</p>
                    </div>
                  </div>
                </div>
                <div className='col-sm-2 mx-auto my-auto'>
                    <h1 className='text-center'>VS</h1>
                    <Link to={`/terminerMatch/${item.id}/${index}`}><button className="btn btn-secondary btn-lg btn-block mt-2 btn-fluid" id='btn'onClick={()=>dispatch(Add_trmMatch(item))} >Termine Match</button></Link>
                </div>
            
                <div className="col-sm-4">
                  <div className="card">
                  <img class="card-img-top" src={src2} alt="Card image cap"/>
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
    </div>:<h1 class="h2Video text-muted m-5 p-5 opacity-50">No match to display </h1>}
    <div>

    </div>


    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Top Score</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <TopScore></TopScore>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
  )
}
