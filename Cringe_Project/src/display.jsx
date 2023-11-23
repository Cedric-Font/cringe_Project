import Api from "./Api"
import { useState } from "react"

export default function Display({ categories }){

const [joke , setJoke] = useState([])
const[answer, setAnswer] = useState("")
console.log(categories)


    return(
        <div>
        <Api jokes={joke} setJoke={setJoke} setAnswer={setAnswer} categories={categories} />
        <div>{joke}</div>
        <div>{answer}</div>
        </div>
    )
}