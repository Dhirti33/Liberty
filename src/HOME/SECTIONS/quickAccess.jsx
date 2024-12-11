import "../STYLES/quickAccess.css"

import sundayService from "../../IMAGES/sundayService.jpg"
import smallGroups from "../../IMAGES/smallGroups.jpg"
import communityImpact from "../../IMAGES/communityImpact.jpg"
import bibleStudies from "../../IMAGES/bibleStudies.jpg"



const QuickAccess = () => {
  return (
    <section id="QuickAccess">
        <div className="quickAccessContainer">
            <div className="accessContainer">
                <img src={sundayService} alt="" className="accessImage" loading="lazy" />
                <div className="accessInfoContainer">
                    <h2 className="accessInfoHeadText H2">Sunday service</h2>
                    <p className="accessInfoSubText">Join us at any of our sunday service for engaging and faith-building message from the bible, along with singing,fellowship, and classes for kids.</p>
                    <button className="accessInfoBTN">VIEW LOCATION</button>
                </div>
            </div>
            <div className="accessContainer">
                <img src={smallGroups} alt="" className="accessImage" loading="lazy" />
                <div className="accessInfoContainer">
                    <h2 className="accessInfoHeadText H2">Small groups</h2>
                    <p className="accessInfoSubText">Connect with friends at a similar life point in your neighborhood. Get to know each other on a deeper level through discussions about God and life.</p>
                    <button className="accessInfoBTN">Get connected</button>
                </div>
            </div>
            <div className="accessContainer">
                <img src={communityImpact} alt="" className="accessImage" loading="lazy" />
                <div className="accessInfoContainer">
                    <h2 className="accessInfoHeadText H2">Community impact</h2>
                    <p className="accessInfoSubText">We are striving to make a difference in the lives of all residents, regardless of religious affiliation. Learn how you can get involved</p>
                    <button className="accessInfoBTN">Get involved</button>
                </div>
            </div>
            <div className="accessContainer">
                <img src={bibleStudies} alt="" className="accessImage" loading="lazy" />
                <div className="accessInfoContainer">
                    <h2 className="accessInfoHeadText H2">Personal Bible studies</h2>
                    <p className="accessInfoSubText">Studying the bible for ourselves helps us learn  about  a God who loves us, cares for us, and has a plan for our lives. Get connected  with  friends from your neighborhood.</p>
                    <button className="accessInfoBTN">Get connected</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default QuickAccess