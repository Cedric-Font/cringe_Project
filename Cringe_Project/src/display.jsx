import Api from "./Api";
import { useState } from "react";
import "./Display.css";
import painDepice from "./assets/bonhomme-en-pain-depice.png";
import bouleNeige from "./assets/boule-de-neige.png";
import tasNeige from "./assets/tas-de-neige.png";

export default function Display({
  categories,
  setCategories,
  nextJoke,
  setNextJoke,
  noel,
  gingerbread,
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
          <div className="joke">{joke}</div>
          <div>{answer}</div>
        </div>
      </div>

      <section className="buttonContainer">
        <button onClick={() => setCategories("Home")}>Retour</button>
        <button onClick={() => setNextJoke(!nextJoke)}>Suivant</button>
      </section>
      {gingerbread === true && (
        <div className="bread_container">
          <img className="snowBowl" src={bouleNeige} alt="boule de neige"></img>
          <img className="bread" src={painDepice} alt="pain d'epice"></img>
          <img className="tasDeNeige" src={tasNeige} alt="tas de neige" />
        </div>
      )}
    </div>
  );
}
