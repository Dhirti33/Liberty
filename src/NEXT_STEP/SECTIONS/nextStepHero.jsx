import "../STYLES/nextStepHero.css"

import nextStep from "../../IMAGES/nextStepHero.jpg"

const NextStepHero = () => {
  return (
    <section id="NextStepHero">
        <div className="NextStepHeroImage">
            <img src={nextStep} alt="" className="NextStepImage" loading="lazy" />
        </div>
        <div className="NextStepHeroHead">
            <h1 className="NextStepHeroHeadText H1">NEXT STEPS</h1>
        </div>

    </section>
  )
}

export default NextStepHero