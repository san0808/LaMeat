import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../UI/Card'
import './EventViewer.css'
function EventViewer(props) {
    const Month = props.date.toLocaleString('en-US',{month: 'long'});
    const day = props.date.toLocaleString('en-US',{day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <Card >
            <div className="Task">
            <div className="Date">
            <div className='Month'>{Month}</div>
                <div className="Year">{year}</div>
                <div className="Day">{day}</div>
                
            </div>
            <div className="mid">
                <div className="name">
                    {props.name}
                </div>
                <div className="desc">
                    {props.desc}
                </div>
            </div >
            {/* Button to join */}
            
                <wrap className="button"><Link to='/EventPage'>JOIN</Link></wrap>
            

                
            </div>
        </Card>
    )
}

export default EventViewer
