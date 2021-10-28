import {React,useState} from 'react'

import player1 from '../assets/Avatar.jpg'
import player2 from '../assets/Boy.jpg'
import player3 from '../assets/Girl-1.png'
import player4 from '../assets/Girl-2.jpg'
import player5 from '../assets/eyemaster.png'
import Card from '../UI/Card'
import './EventPage.css'
function EventPage() {
    // const [AvaData, setAvaData] = useState('')
    const [Name, setName] = useState('')
    const [Desc, setDesc] = useState('')
    const play1=<img src={player1}/> 
    const play2=<img src={player2}/> 
    const play3=<img src={player3}/> 
    const play4=<img src={player4}/> 
    const play5=<img src={player5}/> 
    const Users=[
        {
            id: "player1",
            name: "san",
            desc: " i am a react dev",
            Avatar: play1
        },
        {
            id: "player2",
            name: "Ket",
            desc: " Full Stack Developer",
            Avatar: play2
        },
        {
            id: "player3",
            name: "Bhat",
            desc: " Backend Developer",
            Avatar: play3
        },
        {
            id: "player4",
            name: "Saad",
            desc: " Artist , Youtuber, Video Editer",
            Avatar: play4
        },
        {
            id: "player5",
            name: "Rev",
            desc: "  Developer for fun",
            Avatar: play5
        },
        {
            id: "player6",
            name: "Rev",
            desc: "  Developer for fun",
            Avatar: play5
        },
        {
            id: "player7",
            name: "Rev",
            desc: "  Developer for fun",
            Avatar: play5
        },
        {
            id: "player8",
            name: "Rev",
            desc: "  Developer for fun",
            Avatar: play5
        },
        {
            id: "player9",
            name: "Rev",
            desc: "  Developer for fun",
            Avatar: play5
        },
        {
            id: "player10",
            name: "Rev",
            desc: "  Developer for fun",
            Avatar: play5
        },
        {
            id: "player11",
            name: "Rev",
            desc: "  Developer for fun",
            Avatar: play5
        },
        {
            id: "player12",
            name: "Rev",
            desc: "  Developer for fun",
            Avatar: play5
        },
        {
            id: "player13",
            name: "Rev",
            desc: "  Developer for fun",
            Avatar: play5
        }

    ]
    const dataHandler=()=>{
       
        // to show data when hovered
    }

    const user= Users.map((ava)=> <div onMouseEnter={dataHandler} className='Avatar' > {(ava).Avatar}</div>)
    return (
        <div className="EventPage">
            <div className="Header">
                <a>Scheduled</a>
            </div>
            <div className='EventArea'>
                {user}
            </div>
        </div>
    )
}

export default EventPage
