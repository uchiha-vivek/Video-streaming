import React from 'react'
import './index.css'
import {useNavigate} from 'react-router-dom'
import { useState} from 'react' 


const Home = () => {
    const [roomCode, setRoomCode] = useState('')
    const navigate= useNavigate()

    const handleForm = (ev) =>{
        ev.preventDefault()
        navigate(`/room/${roomCode}`)
    }

    return (
        <div className='home-page'>
             <form onSubmit={handleForm} className='form '>
                <div>
                    <label><h1>Private Room</h1> </label>
                    <input className='inp' value={roomCode} type ='text ' onChange={(e) => setRoomCode(e.target.value )} required placeholder='home'/>

                </div>
                <button type='submit' className='btn'>Enter your space</button>
             </form>
        </div>
    )
}

export default Home
