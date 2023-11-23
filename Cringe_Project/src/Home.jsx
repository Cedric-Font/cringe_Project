import "./Home.css";
import {useEffect, useState} from 'react'
import pereNoel from "./assets/pere-noel.png"

export default function Home({ setCategories }){


//const [on, setOn] = useState(false);
//const [noel, setNoel] = useState("")

/*  useEffect(() => {
console.log('coucou')
 }, [on])

if (on === false) {
  setNoel("")
} else {
  setNoel("noel")
} */

    return(
        <>
        <div className={`presentation`} >
        <div className="contenerButt">
        <button className="noelModeButton" /* onClick={() => setOn(!on)} */><img src={pereNoel} ></img></button>
        </div>
        <h1>Cringe Me</h1>
        <p>Comment être malaisant dans toutes les situations</p>

      </div>
  <div className='contenu'>
    <button className="enFamille jokeButt" onClick={()=> setCategories("EN FAMILLE")} >EN FAMILLE</button>
     <button className="entreAmis jokeButt" onClick={()=> setCategories("ENTRE AMIS")} >ENTRE AMIS </button>
     <button className="enAmoureux jokeButt" onClick={()=> setCategories("EN AMOUREUX")}>EN AMOUREUX </button>
     <button className="entreCollegues jokeButt" onClick={()=> setCategories("ENTRE COLLEGUES")}>ENTRE COLLEGUES</button>
     <button className="enPublic jokeButt" onClick={()=> setCategories("EN PUBLIC")}>EN PUBLIC</button>
     <button className="enPrive jokeButt" onClick={()=> setCategories("EN PRIVEE")}>EN PRIVEE</button>
     </div>
     </>
    )
}