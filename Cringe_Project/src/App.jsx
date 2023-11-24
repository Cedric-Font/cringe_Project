import { useState, useEffect } from "react";

import Display from "./display";
import Home from "./Home";

function App() {
  const [on, setOn] = useState(false);
  const [noel, setNoel] = useState("normal");
  const [gingerbread, setGingerbread] = useState(false);

  function beNoelOrNot() {
    if (on === false) {
      setNoel("normal");
      setGingerbread(false);
    } else {
      setNoel("noel");
      setGingerbread(true);
    }
  }

  useEffect(() => {
    beNoelOrNot();

    console.log(noel);
  }, [on]);

  const [test, setTest] = useState(true);
  const [categories, setCategories] = useState("Home");
  const [nextJoke, setNextJoke] = useState(false);

  console.log(categories);

  return (
    <>
      {categories === "Home" ? (
        <Home
          on={on}
          setOn={setOn}
          noel={noel}
          gingerbread={gingerbread}
          setCategories={setCategories}
        />
      ) : null}
      {categories === "ENTRE AMIS" ? (
        <Display
          noel={noel}
          gingerbread={gingerbread}
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "ENTRE COLLEGUES" ? (
        <Display
          noel={noel}
          gingerbread={gingerbread}
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN PUBLIC" ? (
        <Display
          noel={noel}
          gingerbread={gingerbread}
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN PRIVEE" ? (
        <Display
          noel={noel}
          gingerbread={gingerbread}
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN FAMILLE" ? (
        <Display
          noel={noel}
          gingerbread={gingerbread}
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN AMOUREUX" ? (
        <Display
          noel={noel}
          gingerbread={gingerbread}
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
