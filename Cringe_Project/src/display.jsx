import Api from "./Api";
import { useState } from "react";
import "./Display.css";

export default function Display({ categories }){

const [joke , setJoke] = useState([])
const[answer, setAnswer] = useState("")
console.log(categories)


    return(
        <div>
        <Api jokes={joke} setJoke={setJoke} setAnswer={setAnswer} categories={categories} />
        <div>{joke}</div>
        <div>{answer}</div>
        </div>
      </section>
      <section className="buttonContainer">
        <button>Retour</button>
        <button>Suivant</button>
      </section>
    </div>
  );
}
