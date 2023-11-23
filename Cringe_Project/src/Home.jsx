export default function Home({ setCategories }){



    return(
        <div>
        <div className='presentation'>
        <h1>Cringe Me</h1>
        <p>Comment être malaisant dans toutes les situations</p>
      </div>
  <div className='contenu'>
     <button onClick={()=> setCategories("ENTRE AMIS")} >ENTRE AMIS </button>
     <button onClick={()=> setCategories("EN AMOUREUX")}>EN AMOUREUX </button>
     <button onClick={()=> setCategories("ENTRE COLLEGUES")}>ENTRE COLLEGUES</button>
     <button onClick={()=> setCategories("EN PUBLIC")}>EN PUBLIC</button>
     <button onClick={()=> setCategories("EN PRIVEE")}>EN PRIVEE</button>
     </div>
     </div>
    )
}