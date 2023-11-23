import { useState, useEffect } from 'react';

import Display from "./display";
import Home from "./Home";

function App() {

  

  const [on, setOn] = useState(false);
  const [noel, setNoel] = useState("normal");
  
  function beNoelOrNot() {
    if (on === false){
      setNoel("normal")
    } else {
      setNoel("noel")
    }
  }
  
   useEffect(() => {
  beNoelOrNot()

  console.log(noel)
  
   }, [on])  
  
  

  const [test, setTest] = useState(true);
  const [categories, setCategories] = useState("Home");
  const [nextJoke, setNextJoke] = useState(false);

 console.log(categories)

  return (
    <>

      {categories === "Home" ? <Home on={on} setOn={setOn} noel={noel} setCategories={setCategories} /> : null}
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
        noel={noel}
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN PUBLIC" ? (
        <Display
        noel={noel}
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN PRIVEE" ? (
        <Display
        noel={noel}
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN FAMILLE" ? (
        <Display
        noel={noel}
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN AMOUREUX" ? (
        <Display noel={noel}
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
