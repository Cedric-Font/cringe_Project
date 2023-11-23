import Api from "./Api";
import { useState } from "react";
import "./Display.css";

export default function Display({ categories, noel }) {
  const [joke, setJoke] = useState([]);
  const [answer, setAnswer] = useState("");
  console.log(categories);

  return (
    <div className="mainBackground">
      <div className={`headerBackground ${noel}`}>
        <Api
          jokes={joke}
          setJoke={setJoke}
          setAnswer={setAnswer}
          categories={categories}
        />
        <div className="jokeBackground">
          <div className="joke" >{joke}</div>
          <div>{answer}</div>
        </div>
      </div>

      <section className="buttonContainer">
        <button>Retour</button>
        <button>Suivant</button>
      </section>
    </div>
  );
}
