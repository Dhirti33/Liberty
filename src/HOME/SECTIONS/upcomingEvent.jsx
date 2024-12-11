import "../STYLES/upcomingEvent.css"

import heroEvent from "../../IMAGES/heroEvent.jpg"

const UpcomingEvent = () => {
  return (
    <section id="UPCOMING-EVENT">
        <div className="eventHeaderText H2">UPCOMING EVENT</div>
        <div className="eventContainer">
            <div className="eventLeft">
                <img src={heroEvent} alt="" loading="lazy" />
            </div>
            <div className="eventRight">
                <div className="eventRightInfo">
                    <div className="infoDate">
                        <p className="date">OCT 22, 2024</p>
                        <p className="time">9:00pm</p>
                    </div>
                    <div className="eventInfoName H2">Outburst: 2024</div>
                    <div className="eventInfoBio">A LIVE WORSHIP EXPERIENCE</div>
                    <button className="registerEvent">REGISTER TO EVENT</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default UpcomingEvent