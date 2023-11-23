import "./App.css";
import { useState} from 'react';
import Display from "./display";
import Home from "./Home";



function App() {
  
  const [categories, setCategories] = useState("Home")
 

  
 console.log(categories)
  return (
    <>
    <div className="wrapper">
    {categories === "Home" ? <Home setCategories={setCategories} />:null}
   {categories === "ENTRE AMIS" ? <Display categories={categories} />: null}
   {categories === "ENTRE COLLEGUES" ? <Display categories={categories} />: null}
   {categories === "EN PUBLIC" ? <Display categories={categories} />: null}
   {categories === "EN PRIVEE" ? <Display categories={categories} />: null}
   {categories === "EN FAMILLE" ? <Display categories={categories} />: null}
   {categories === "EN AMOUREUX" ? <Display categories={categories} />: null}
    
     <div className="snow layer1 a"></div>
     <div className="snow layer1"></div> 
     <div className="snow layer2 a"></div>
     <div className="snow layer2"></div>
     <div className="snow layer3 a"></div>
     <div className="snow layer3"></div>
</div>
</>

  );
}

export default App;
