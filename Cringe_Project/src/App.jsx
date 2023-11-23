import "./App.css";
import { useState} from 'react';
import Display from "./display";
import Home from "./Home";


function App() {
  
  const [test, setTest] = useState(true)
  const [categories, setCategories] = useState("Home")

  
 console.log(categories)
  return (
    <>
   {categories === "Home" ? <Home setCategories={setCategories} />:null}
   {categories === "ENTRE AMIS" ? <Display categories={categories} />: null}
   {categories === "ENTRE COLLEGUES" ? <Display categories={categories} />: null}
   {categories === "EN PUBLIC" ? <Display categories={categories} />: null}
   {categories === "EN PRIVEE" ? <Display categories={categories} />: null}
   

    </>
  );
}

export default App;
