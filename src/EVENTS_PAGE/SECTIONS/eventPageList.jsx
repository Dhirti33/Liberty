import { useState } from "react"
import "../STYLES/eventPageList.css"

import eventList from "../../IMAGES/eventList.jpg"

const event = [
    {
        title: "Outburst 2024",
        date: "October 22, 2024",
        time: "9:00pm",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum earum quo nesciunt accusantium!"
    },
    {
        title: "New Year's Eve",
        date: "December 31, 2024",
        time: "8:00pm",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum earum quo nesciunt accusantium!"
    },
    {
        title: "Christmas",
        date: "December 25, 2024",
        time: "10:00pm",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum earum quo nesciunt accusantium!"
    },
    {
        title: "Halloween",
        date: "October 31, 2024",
        time: "11:00pm",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum earum quo nesciunt accusantium!"
    }
    
]


const EventPageList = () => {
    const [events, setEvents] = useState(event)

  return (
    <section id="EventPageList">
        <div className="eventPageContainer">
            { events.map((event,index) => (
                <div className="eventPageCard" key={index}>
                    <div className="eventPageLeft">
                        <img src={eventList} alt="" className="eventPageImage" loading="lazy" />
                    </div>
                    <div className="eventPageRight">
                        <div className="eventPageRightInfo">
                            <div className="eventInfoDate">
                                <p className="date">{event.date}</p>
                                <p className="time">{event.time}</p>
                            </div>
                            <div className="eventPageInfoName H2">{event.title}</div>
                            <div className="eventPageInfoBio">{event.bio}</div>
                            <button className="registerEventPage">REGISTER TO EVENT</button>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    </section>
  )
}

export default EventPageList