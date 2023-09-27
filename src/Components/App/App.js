import { Link } from "react-router-dom";
import 'bootstrap/js/dist/collapse.js'
import NavDropdown from 'react-bootstrap/NavDropdown';
function App() {
  return (
   <nav className="navbar navbar-expand-lg text-black bg-white    ">
    <div className="container">
      <a href="#" className="navbar-brand">Chess Site</a>
      <button  
      className="navbar-toggler " 
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbar"
      >
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="navbar-item">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            <NavDropdown title="Joueur" id="collasible-nav-dropdown " >
                <NavDropdown.Item   href="#action/3.1" >
                  <Link className=" text-black nav-link" to="/AffiherJoueur">Afficher Joueur</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link className="text-black nav-link" to="/AjouterJoueur">Ajouter Joueur</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link className="text-black nav-link" to="/RechercherJ">RechercherJR</Link>
                </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Match" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
                  <Link className="text-black nav-link" to="/AffiherMatch">Afficher Match</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link className="text-black nav-link" to="/AjouterMatch">Ajouter Match</Link>
                </NavDropdown.Item>
                
            </NavDropdown>
            
          </ul>
      </div>
    </div>
      
   </nav>
  );
}

export default App;
