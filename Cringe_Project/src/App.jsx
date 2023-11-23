import "./App.css";
import { useState} from 'react';
import { Link } from "react-router-dom";
import Api from './Api';


function App() {
  
  const [joke , setJoke] = useState([])
  const [test, setTest] = useState(true)
  const [categories1, setCategories1] = useState("")
  const [categories2, setCategories2] = useState("")
  const [categories3, setCategories3] = useState("")

  function entreAmis(){
    setCategories1("dev")
    setCategories2("LIMIT")
    setCategories3("BLONDES")
  }
  console.log(test)

  return (
    <>
  <Api joke={joke} setJoke={setJoke} test={test} categories1={categories1} categories2={categories2} categories3={categories3} />
    <div className='presentation'>
      <h1>Cringe Me</h1>
      <p>Comment être malaisant dans toutes les situations</p>
    </div>
<div className='contenu'>
    <Link to ="display" ><button className="enFamille" > EN FAMILLE</button></Link>
   <Link   to ="display" ><button className="entreAmis" onClick={()=> entreAmis()} >ENTRE AMIS </button></Link>
   <Link   to ="display" ><button className="enAmoureux">EN AMOUREUX </button></Link>
   <Link   to ="display" ><button className="entreCollegues">ENTRE COLLEGUES</button></Link>
   <Link  to ="display" ><button className="enPublic">EN PUBLIC</button></Link>
   <Link  to ="display" ><button className="enPrive" >EN PRIVEE</button></Link>
   </div>

    </>
  );
}

export default App;
