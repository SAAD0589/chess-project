import React   from "react";
import { useSelector } from "react-redux";
import '../../css/Joueurs.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import TopScore from "../TopScore/TopScore";
export default function AfficherPlR(){
    const Items=useSelector(data=>data.Joueur)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
      <div class="bodyJr">
        
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
        
        <div className="container">
        <h1 class="h2Video p-5">player list  </h1>
        <div className=" main ">
          {Items.map((a)=>{
            return(
              <div className="m-auto">
                <div className="card-jr bg-dark     ">
                {a.id<=4?<div className="St1">
                <img src={`pictures/${a.image}`} alt='a' className="card-img-jr img-fluid"/></div>:
                <div className="St2">
                <img src={`pictures/${a.image}`} alt='a' className="card-img-jr img-fluid"/></div>}
                <div className="card-body-jr">
                <h3 className="card-title-jr">{a.FullName}</h3>
                <h4 className="card-info-jr">age : {a.age}</h4>
                <h4 className="card-info-jr">sexe : {a.sexe}</h4>
                <h4 className="card-score-jr">score : {a.score}</h4>
                </div>
              </div>
              </div>
              
            )
          })}


      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Top Score</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <TopScore></TopScore>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
      </div>
      </div>
      

        
    )
}