import React from "react";
import ShowGuess from "../ShowGuess/ShowGuess";

export default function GuessInput() {
    const [input, setInput] = React.useState('')
    const [items, setItems] = React.useState([])
    const handleSubmit = (event) => {
            event.preventDefault()
            const nextGuess = [...items, input]
            setItems(nextGuess)
            setInput('')
    }
    React.useEffect(() => {
        items.map(x=>ShowGuess(x))
    },[items])
    return ( 
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text" required value={input} minLength={5} maxLength={5} onChange={e => {
                console.log(e.target.value)
                setInput(e.target.value.toUpperCase())
            }} />

        </form>
        
    )
    
}