import "./App.css";
import { useState } from "react";
import Display from "./display";
import Home from "./Home";

function App() {
  const [test, setTest] = useState(true);
  const [categories, setCategories] = useState("Home");
  const [nextJoke, setNextJoke] = useState(false);
 console.log(categories)

  return (
    <>
      {categories === "Home" ? <Home setCategories={setCategories} /> : null}
      {categories === "ENTRE AMIS" ? (
        <Display
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "ENTRE COLLEGUES" ? (
        <Display
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN PUBLIC" ? (
        <Display
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN PRIVEE" ? (
        <Display
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN FAMILLE" ? (
        <Display
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN AMOUREUX" ? (
        <Display
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
    </>
  );
}

export default App;
