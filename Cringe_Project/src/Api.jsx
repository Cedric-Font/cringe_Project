import { useEffect } from "react";
import BlaguesAPI from 'blagues-api';

export default function Api({ joke, setJoke, setAnswer }){
   
  
    useEffect(()=>{
      async function funcBlague(){
        const blagues = new BlaguesAPI('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzQzMTA2NTg0MjE1NDIwOTI4IiwibGltaXQiOjEwMCwia2V5IjoiYTU1U2NIYUNjMXBRUzZvRnJGT0pNSHhzSmVSbjJWWDczdG82MTNVcEZIRkU4V1htMzciLCJjcmVhdGVkX2F0IjoiMjAyMy0xMS0yM1QxMDoyNzo1NSswMDowMCIsImlhdCI6MTcwMDczNTI3NX0.E3o0oZialuzdEhuLpEfQPEqv1sA9Z82b8Je3C9-ugJo');
        const blague = await blagues.randomCategorized(
          blagues.categories.DARK
        );
        setJoke(blague.joke)
        setAnswer(blague.answer)
        console.log(blague.answer)
      }
      funcBlague()
    },[])
    
    return 
}