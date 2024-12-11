import "../STYLES/sermonHero.css"

import sermonImage from "../../IMAGES/sermonImage.jpg"

const SermonHero = () => {
  return (
    <section id="sermonHero">
        <div className="sermonHeroImage">
            <img src={sermonImage} alt="" className="sermonImage" loading="lazy"/>
        </div>
        <div className="sermonHeroHead">
            <h1 className="sermonHeroHeadText H1">LATEST SERMONS</h1>
        </div>

    </section>
  )
}

export default SermonHero