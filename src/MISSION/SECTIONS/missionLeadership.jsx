import { useState } from "react"
import "../STYLES/missionLeadership.css"

import leader from "../../IMAGES/hero.jpg"


const MissionLeadership = () => {
    const [cards, setCards] = useState([1,2,3,4,5,6,7])
  return (
    <section id="missionLeadership">
        <h1 className="leadershipHeaderText H2">OUR LEADERSHIP TEAM</h1>
        <div className="leadershipContainer">
            {cards.map((card,index)=>(
                <div className="leadershipCard" key={index}>
                    <img src={leader} alt="" className="leadershipImage" loading="lazy" />
                    <div className="leadershipName">Name here</div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default MissionLeadership