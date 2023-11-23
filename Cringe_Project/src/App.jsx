import './App.css'

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
  <button>EN FAMILLE</button>
   <Link to ="display" ><button>ENTRE AMIS </button></Link>
   
   <button onClick={()=> setTest(!joke)} >EN AMOUREUX</button>
   <button>ENTRE COLLEGUES </button>
   <button>EN PUBLIC</button>
   <button>EN PRIVEE</button>
   </div>



    </>
  )
}

export default App


