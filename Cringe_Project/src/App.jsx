import "./App.css";
import { useState} from 'react';
import { Link } from "react-router-dom";
import Api from './Api';


function App() {
  
  const [joke , setJoke] = useState([])
  const [test, setTest] = useState(true)
  console.log(test)

  return (
    <>
  <Api joke={joke} setJoke={setJoke} test={test} />
    <div className='presentation'>
      <h1>Cringe Me</h1>
      <p>Comment être malaisant dans toutes les situations</p>
    </div>
<div className='contenu'>
  <button className="enFamille">EN FAMILLE </button>
   <Link to ="display" ><button className="entreAmis">ENTRE AMIS </button></Link>
   <button className="enAmoureux" onClick={()=> setTest(!joke)} >EN AMOUREUX</button>
        <button className="entreCollegues">ENTRE COLLEGUES </button>
        <button className="enPublic">EN PUBLIC</button>
        <button className="enPrive">EN PRIVE</button>
   </div>
   <div>{joke}</div>
    </>
  );
}

export default App;
