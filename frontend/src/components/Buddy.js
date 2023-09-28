import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Buddy = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:4000/api/workouts/chat", { prompt }).then((res) => {
            setResponse(res.data);
        }).catch((err) => {
            console.error(err);
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Hey I am your workout Buddy ask me anything!</label>
                <input type='text' value={prompt} onChange={(e) => setPrompt(e.target.value)}></input>
                <button type='submit'>Submit</button>
                <p>{response}</p>
            </form>
        </div>
    )
}

export default Buddy