import Api from "./Api"
import { useState } from "react"

export default function Display(){

const [joke , setJoke] = useState([])
const[answer, setAnswer] = useState("")
console.log(joke)

    return(
        <div>
        <Api joke={joke} setJoke={setJoke} setAnswer={setAnswer}/>
        <div>{joke}</div>
        <div>{answer}cc</div>
        </div>
    )
}