import '../../css/RechercheJ.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
export default function RechercheJ(){
    const Items=useSelector(data=>data.Joueur);
    // const [V,setV]=useState();
    // const [Ca,setCa]=useState();
    const [Aff,setAff]=useState([]);
    const Rech=(value)=>{
        value==="All"?setAff(Items):
        setAff(Items.filter((a)=>a.sexe===value || a.FullName===value ||a.nationality===value||a.name===value))
    }
     return (
<div class="container pt-5">
    <br/>
	<div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8">
                            <form class="card card-sm">
                                <div class="card-body row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <i class="fas fa-search h4 text-body"></i>
                                    </div>
                                    <div class="col">
                                        <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Recherche avec nom,nationalité,sexe" onChange={(e)=>Rech(e.target.value)}/>
                                        {/* <select onChange={(e)=>setCa(e.target.value)}>
                                           <option value="">Categorue</option>
                                            <option value="Sexe">Sexe</option>
                                            <option value="FullN">Full Name</option>
                                            <option value="Natio">nationality</option>
                                        </select> */}
                                    </div>
                                    <div class="col-auto">
                                        {/* <button class="btn btn-lg btn-dark" onClick={()=>Rech(V,Ca)}>Search</button> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="container">
        <h1 class="p-2 m-auto">Resultat :   </h1>
        <div className=" main container    ">{Aff.length>0?Aff.map((a)=>{return(
                                                            <div className="m-auto">
                                                            <div className="card-jr bg-dark ">
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
                                )}):<h2 class="m-auto mt-5 text-muted">Aucun Resultat....</h2>}</div></div>
                    </div>
</div>
  )
}