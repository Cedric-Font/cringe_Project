import Api from "./Api";
import { useState } from "react";
import "./Display.css";

export default function Display({
  categories,
  setCategories,
  nextJoke,
  setNextJoke, cadeau, nouvelAn, colorButt
}) {

  const [joke, setJoke] = useState([]);
  const [answer, setAnswer] = useState("");
  console.log(categories);

  console.log(cadeau)

  return (
    <div className="mainBackground">
      <div className={`headerBackground ${cadeau}`}>
        <Api
          jokes={joke}
          setJoke={setJoke}
          setAnswer={setAnswer}
          categories={categories}
          nextJoke={nextJoke}
        />
        <div className={`jokeBackground ${nouvelAn}`}>
          <div className="joke" >{joke}</div>
          <div>{answer}</div>
        </div>
      </div>

      <section className="buttonContainer">
        <button className={colorButt} onClick={() => setCategories("Home")}>Retour</button>
        <button className={colorButt} onClick={() => setNextJoke(!nextJoke)}>Suivant</button>
      </section>
    </div>
  );
}
