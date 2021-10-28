// import{ React,useState} from 'react'
import "./Events.css";
import Card from "../UI/Card.js"
import EventViewer from './EventViewer';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
function Events() {
    // const [LiveEvent, setLiveEvent] = useState(initialState)
    const events=[
        {
            id: 'e1',
            date: new Date(2020, 7, 14),
            eventName: "eve1",
            eventDesc: "event is for....",
        },
        {
            id: 'e2',
            date: new Date(2020, 7, 14),
            eventName: "eve2",
            eventDesc: "event is for....",
        },
        {
            id: 'e3',
            date: new Date(2020, 7, 14),
            eventName: "eve3",
            eventDesc: "event is for....",
        },
        {
            id: 'e4',
            date: new Date(2020, 7, 14),
            eventName: "eve4",
            eventDesc: "event is for....",
        },
        {
            id: 'e5',
            date: new Date(2020, 7, 14),
            eventName: "eve5",
            eventDesc: "event is for....",
        },
    ]
    // setLiveEvent()={
          
    // }
    const event = events.map(data=><EventViewer date={data.date} name={data.eventName} desc={data.eventDesc}/> )
    return (
        <div className="EventsPage">
            <Router>
            <div className="EventHeader">
                
                <div className="OpenEvents">
                    <Link to='/Events/OpenEvents'>Open Events</Link>
                    
                </div>
                <div className="MyEvents">
                    <Link to='/Events/MyEvents'>MY Events</Link>
                </div>
            </div>
            
                <Route path='/Events/OpenEvents'>
                <div className="EventsList">
                        <Card>
                            {event}
                        </Card>
                </div>
                </Route>
                <Route path='/Events/MyEvents'>
                <div className="EventsList">
                        <Card>
                            {event}
                        </Card>
               </div>
                </Route>
            
            </Router>
        </div>
    )
}

export default Events
