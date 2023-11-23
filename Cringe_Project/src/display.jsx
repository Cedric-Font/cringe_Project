import Api from "./Api";
import { useState } from "react";
import "./Display.css";

export default function Display() {
  const [joke, setJoke] = useState([]);
  const [answer, setAnswer] = useState("");
  console.log(joke);

  return (
    <div className="mainBackground">
      <section className="headerBackground">
        <Api joke={joke} setJoke={setJoke} setAnswer={setAnswer} />
        <div className="jokeBackground">
          <div className="joke">{joke}</div>
          <div className="answer">{answer}</div>
        </div>
      </section>
      <section className="buttonContainer">
        <button>Retour</button>
        <button>Suivant</button>
      </section>
    </div>
  );
}
