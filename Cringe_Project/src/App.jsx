import { useState, useEffect } from 'react';
import "./App.css"
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
  const [layer, setLayer] = useState("layerr")

 
 console.log(categories)

  return (
    <>
     <div className="wrapper">
      {categories === "Home" ? <Home on={on} setOn={setOn} noel={noel} setCategories={setCategories} layer={layer} setLayer={setLayer} /> : null}
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


     <div className={`snow ${layer}1 a`}></div>
     <div className={`snow ${layer}1`}></div> 
     <div className={`snow ${layer}2 a`}></div>
     <div className={`snow ${layer}2`}></div>
     <div className={`snow ${layer}3 a`}></div>
     <div className={`snow ${layer}3`}></div>
</div>

    </>
  );
}

export default App;
