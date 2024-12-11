import "../STYLES/ministriesHero.css"

import ministryImage from "../../IMAGES/ministryImage.jpg"


const MinistriesHero = () => {
  return (
    <section id="MinistriesHero">
        <div className="MinistriesHeroImage">
            <img src={ministryImage} alt="" className="MinistriesImage" loading="lazy"/>
        </div>
        <div className="MinistriesHeroHead">
            <h1 className="MinistriesHeroHeadText H1">MINISTRIES</h1>
        </div>
    </section>
  )
}

export default MinistriesHero