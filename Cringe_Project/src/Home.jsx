import "./Home.css"

export default function Home({ setCategories }){



    return(
        <>
        <div className='presentation'>
        <h1>Cringe Me</h1>
        <p>Comment être malaisant dans toutes les situations</p>
      </div>
  <div className='contenu'>
    <button className="enFamille" onClick={()=> setCategories("EN FAMILLE")} >EN FAMILLE</button>
     <button className="entreAmis" onClick={()=> setCategories("ENTRE AMIS")} >ENTRE AMIS </button>
     <button className="enAmoureux" onClick={()=> setCategories("EN AMOUREUX")}>EN AMOUREUX </button>
     <button className="entreCollegues" onClick={()=> setCategories("ENTRE COLLEGUES")}>ENTRE COLLEGUES</button>
     <button className="enPublic" onClick={()=> setCategories("EN PUBLIC")}>EN PUBLIC</button>
     <button className="enPrive" onClick={()=> setCategories("EN PRIVEE")}>EN PRIVEE</button>
     </div>
     </>
    )
}