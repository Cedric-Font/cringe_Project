import Api from "./Api";
import { useState } from "react";
import "./Display.css";

export default function Display({
  categories,
  setCategories,
  nextJoke,
  setNextJoke, , noel 
}) {

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
          nextJoke={nextJoke}
        />
        <div className="jokeBackground">
          <div className="joke" >{joke}</div>
          <div>{answer}</div>
        </div>
      </div>

      <section className="buttonContainer">
        <button onClick={() => setCategories("Home")}>Retour</button>
        <button onClick={() => setNextJoke(!nextJoke)}>Suivant</button>
      </section>
    </div>
  );
}
