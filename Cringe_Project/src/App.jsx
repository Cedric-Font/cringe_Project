import { useState, useEffect } from 'react';
import "./App.css"
import Display from "./display";
import Home from "./Home";

function App() {

  

  const [on, setOn] = useState(false);
  const [noel, setNoel] = useState("normal");

  const [cadeau, setCadeau] = useState("normal2");
  const [nouvelAn, setNouvelAn] = useState("normal3");

  const [color, setColor] = useState("normal4"); 

  
  function beNoelOrNot() {
    if (on === false){
      setNoel("normal")

      setCadeau("normal2")
      setNouvelAn("normal3")
            setColor("normal4")
    } else {
      setNoel("noel")
      setCadeau("noel2")
      setNouvelAn("noel3")
            setColor("noel4")

    }
  }
  
   useEffect(() => {
  beNoelOrNot()
console.log(cadeau)
  console.log(noel)
  
   }, [on])  
  
  

  const [test, setTest] = useState(true);
  const [categories, setCategories] = useState("Home");
  const [nextJoke, setNextJoke] = useState(false);
  const [layer, setLayer] = useState("layerr")

 
 console.log(categories)

  return (
    <>
     <div className={`wrapper ${color}`}>
      {categories === "Home" ? <Home on={on} setOn={setOn} noel={noel} setCategories={setCategories} layer={layer} setLayer={setLayer} /> : null}
      {categories === "ENTRE AMIS" ? (
        <Display
        nouvelAn={nouvelAn}
        cadeau={cadeau}
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "ENTRE COLLEGUES" ? (
        <Display
        nouvelAn={nouvelAn}
        cadeau={cadeau}
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN PUBLIC" ? (
        <Display
        nouvelAn={nouvelAn}
        cadeau={cadeau}
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN PRIVEE" ? (
        <Display
        nouvelAn={nouvelAn}
        cadeau={cadeau}
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN FAMILLE" ? (
        <Display
        nouvelAn={nouvelAn}
        cadeau={cadeau}
          categories={categories}
          setCategories={setCategories}
          nextJoke={nextJoke}
          setNextJoke={setNextJoke}
        />
      ) : null}
      {categories === "EN AMOUREUX" ? (
        <Display 
        nouvelAn={nouvelAn}
        cadeau={cadeau}
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
