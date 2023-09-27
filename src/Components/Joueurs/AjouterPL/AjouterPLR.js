import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Add_Joueur } from '../../redux/Action';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../css/AjouterJ.css'
function AjouterPLR() {
  const Items=useSelector(data=>data.Joueur)
    const dispatch=useDispatch();
    const [id,setid]=useState(Items.length+1);
    const [Age,setAge]=useState();
    const [name,setname]=useState();
    const [pre,setpre]=useState();
    const [Natio,setNatio]=useState();
    const [Sexe,setSexe]=useState();
    const [image,setimage]=useState();
    function Affichage(p){
        p.preventDefault();
        dispatch(Add_Joueur(id,pre+" "+name,pre,Age,Sexe,Natio,0,image))
        setAge("")
        setNatio("")
        setSexe("")
        setname("")
        setpre("")
        setimage("")
      }
  return (
    <div className="ABC ">
      <div class='Marg'>
    <form className='w-50 m-auto' onSubmit={(p)=>Affichage(p)} id="CAB">
      <legend class="text-center ">Ajouter un Joueur  </legend>
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example1" class="form-control" value={pre}
                onChange={e=>setpre(e.target.value)} required/>
        <label class="form-label" for="form3Example1">First name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example2" class="form-control" value={name}
                onChange={e=>setname(e.target.value)} required/>
        <label class="form-label" for="form3Example2">Last name</label>
      </div>
    </div>
  </div>
  <div class="form-outline mb-4">
    <input type="text" id="form3Example3" class="form-control" value={Natio}
              onChange={e=>setNatio(e.target.value)} required/>
    <label class="form-label" for="form3Example3">Nationality</label>
  </div>
  <div class="form-outline mb-4">
    <input type="number" id="form3Example4" class="form-control" value={Age}
              onChange={e=>setAge(e.target.value)} required/>
    <label class="form-label" for="form3Example4">Age</label>
  </div>
  <div class="form-outline mb-4">
  <input type="file"
       className='filed' name="img"
       accept="image/png, image/jpeg" id="form3Example4" class="form-control" onChange={e=>setimage(e.target.value.slice(11))}/>
    <label class="form-label" for="form3Example4">Image</label>
  </div>
  <div class="form-outline mb-4">
    <select onClick={e=>e.target.value!==""?setSexe(e.target.value):""} class="form-control" required>
    <option value="">Sexe</option>
      <option value="male">male</option>
      <option value="Female">Female</option>
    </select>
  </div>
  <button type="submit" class="btn bg-dark btn-block mb-4 text-white">Send</button>
</form>
    </div>
    </div>
  )
}
export default AjouterPLR;