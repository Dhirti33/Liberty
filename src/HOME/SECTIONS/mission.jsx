import "../STYLES/mission.css"

import mission from '../../IMAGES/mission.jpg'
import missionInfo from "../../IMAGES/missionInfo.jpg"

const Mission = () => {
  return (
    <section id="Mission">
      <div className="imageContainer">
        <img src={mission} alt="" loading="lazy"/>
        <div className='imageHover'></div>
      </div>
      <div className="missionContainer">
        <h3 className="missionHeadText H2">WHAT WE BELIEVE</h3>
        <h1 className="missionHeadSubText">Our Mission is to Help People</h1>
        <div className="missionInfo">
          <div className="missionInfoLeft">
            <h2 className="infoLeftHead">We Exist to Connect People to Jesus and Each Other</h2>
            <p className="infoLeftSubText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit facilis dolore delectus voluptatibus animi sunt eos molestias nisi rem minus maxime, assumenda obcaecati cupiditate necessitatibus beatae, dicta distinctio. Porro?</p>
            <p className="infoLeftSubText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit facilis dolore delectus voluptatibus animi sunt eos molestias nisi rem minus maxime, assumenda obcaecati cupiditate necessitatibus beatae, dicta distinctio. Porro?</p>
            <button className="readMore">READ MORE</button>
          </div>
          <div className="missionInfoRight">
            <img src={missionInfo} alt="" className="missionInfoImage" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission