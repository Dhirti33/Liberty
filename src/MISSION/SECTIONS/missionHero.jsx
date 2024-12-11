import "../STYLES/missionHero.css"

import nissionHero from "../../IMAGES/missionHero.jpg"

const MissionHero = () => {
  return (
    <section id='MissionHero'>
        <img src={nissionHero} alt="" className="missionHeroImage" loading="lazy" />
        <div className="missionHeroInfo">
            <div className="missionHeroContainer">
                <h1 className="missionHeroHeaderText H1">OUR MISSION</h1>
            </div>
        </div>
    </section>
  )
}

export default MissionHero