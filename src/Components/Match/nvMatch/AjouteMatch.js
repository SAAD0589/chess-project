import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Add_Match } from '../../redux/Action';
import imges from './img/saad2.jpg'
import { useDispatch } from 'react-redux';
import '../../css/Match.css';
export default function AjouteMatch() {
   const Items=useSelector(data=>data.Joueur);
   const Match=useSelector(data=>data.Match);
    const dispatch=useDispatch()
    const [id,setId]=useState(Match.length+1);
    const [date,setDate]=useState('');
    const [idJoueur1,setIdJoueur1]=useState('');
    const [idJoueur2,setIdJoueur2]=useState('');
    const [score,setScore]=useState('');
    const [id_gagnant,setid_gagnant]=useState(0);
    const [id_joueur1,setjoueur1]=useState('');
    const [id_joueur2,setjoueur2]=useState(''); 
  
    function Ajoute(){
        //find Array and add in id_Joueur1, id_Joueur2 and dispatch value and setjoueur1,setjoueur2
        const id_joueur1=Items.find(joueur=>parseInt(joueur.id)===parseInt(idJoueur1));
        const id_joueur2=Items.find(joueur=>parseInt(joueur.id)===parseInt(idJoueur2));
        dispatch(Add_Match(id,date,id_joueur1,id_joueur2,score,id_gagnant))

        setjoueur1(id_joueur1)
        setjoueur2(id_joueur2)

         //Vide les Variable Id ,Date,IdJoueur1,IdJoueur1,Score
        setId("")
        setDate("")
        setIdJoueur1("")
        setIdJoueur2("")
        setScore("")
        //Vide les Variable Id ,Date,IdJoueur1,IdJoueur1,Score
    }
  return (
    <div className='body'>
         <div className='containe' style={{ backgroundImage:`url(${imges})`,backgroundRepeat:"no-repeat center"  }}>
            <div className='content-box'>
                  <div className='left' style={{ backgroundImage:`url(${imges})`,backgroundRepeat:"no-repeat center"  }}></div>
    
                     <div className='right'>

                        <h1 className='text-white'>Ajoute Match</h1>
                        <input  
                           placeholder='Date'
                           className='filed'
                           type="date"
                           value={date}
                           onChange={event=>setDate(event.target.value)}
                        />

                        <input  
                              placeholder='Joueur 1'
                              className='filed'
                              type="number"
                              value={idJoueur1}
                              onChange={event=>setIdJoueur1(event.target.value)}
                        />

                        <input 
                              placeholder='Joueur 2'
                              className='filed'
                              type="number"
                              value={idJoueur2}
                              onChange={event=>setIdJoueur2(event.target.value)}
                        />

                        <input 
                              placeholder='Score'
                              className='filed'
                              type="number"
                              value={score}
                              onChange={event=>setScore(event.target.value)}
                        />
                     
                     <button 
                           className='btn-match'
                           onClick={()=>Ajoute()}
                                 >Ajoute Match</button>
                  </div>
            </div>
         </div>
    </div>
  )
}
