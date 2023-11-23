import "./App.css";
import { useState, useEffect } from 'react';
import Display from "./display";
import Home from "./Home";


function App() {
  
  const [categories, setCategories] = useState("Home")

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
  
  
 console.log(categories)
  return (
    <>
   {categories === "Home" ? <Home on={on} setOn={setOn} noel={noel} setCategories={setCategories} />:null}
   {categories === "ENTRE AMIS" ? <Display categories={categories} noel={noel} />: null}
   {categories === "ENTRE COLLEGUES" ? <Display categories={categories} noel={noel} />: null}
   {categories === "EN PUBLIC" ? <Display categories={categories} noel={noel}/>: null}
   {categories === "EN PRIVEE" ? <Display categories={categories} noel={noel}/>: null}
   {categories === "EN FAMILLE" ? <Display categories={categories} noel={noel}/>: null}
   {categories === "EN AMOUREUX" ? <Display categories={categories} noel={noel}/>: null}
    </>
  );
}

export default App;
