import "../STYLES/missionAbout.css"

import newsLetterOne from "../../IMAGES/newsLetterOne.jpg"

const MissionAbout = () => {
  return (
    <section id="MissionAbout">
        <div className="missionAboutContainer">
            <div className="missionAboutLeft">
                <h1 className="missionAboutHeaderText H2">WHAT WE BELIEVE</h1>
                <div className="missionAboutListOrder">
                        <h3 className="listOrderHeadText">1. LOREM IPSUM DOLOR SIT</h3>
                        <p className="listOrderSubText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur amet, expedita porro sint blanditiis consequuntur, dignissimos impedit voluptate quod animi doloribus vero quibusdam ducimus! Veniam eius officia earum quaerat modi.</p>
                </div>
                <div className="missionAboutListOrder">
                        <h3 className="listOrderHeadText">2. LOREM IPSUM DOLOR SIT</h3>
                        <p className="listOrderSubText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur amet, expedita porro sint blanditiis consequuntur, dignissimos impedit voluptate quod animi doloribus vero quibusdam ducimus! Veniam eius officia earum quaerat modi.</p>
                </div>
                <div className="missionAboutListOrder">
                        <h3 className="listOrderHeadText">3. LOREM IPSUM DOLOR SIT</h3>
                        <p className="listOrderSubText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur amet, expedita porro sint blanditiis consequuntur, dignissimos impedit voluptate quod animi doloribus vero quibusdam ducimus! Veniam eius officia earum quaerat modi.</p>
                </div>
            </div>
            <div className="missionAboutRight">
              <img src={newsLetterOne} alt="" loading="lazy"/>
            </div>
        </div>
    </section>
  )
}

export default MissionAbout