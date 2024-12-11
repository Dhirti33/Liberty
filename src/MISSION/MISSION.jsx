import "./MISSION.css"
import MissionAbout from "./SECTIONS/missionAbout"
import MissionFooter from "./SECTIONS/missionFooter"
import MissionHero from "./SECTIONS/missionHero"
import MissionLeadership from "./SECTIONS/missionLeadership"

const Mission = () => {
  return (
    <main id="MISSION">
        <MissionHero/>
        <MissionAbout/>
        <MissionLeadership/>
        <MissionFooter/>
    </main>
  )
}

export default Mission