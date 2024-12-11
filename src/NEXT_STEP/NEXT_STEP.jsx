import "./NEXT_STEP.css"
import NextStepFooter from "./SECTIONS/nextStepFooter"
import NextStepHero from "./SECTIONS/nextStepHero"
import NextStepList from "./SECTIONS/nextStepList"


const NextStep = () => {
  return (
    <main id="NextStep">
        <NextStepHero/>
        <NextStepList/>
        <NextStepFooter/>
    </main>
  )
}

export default NextStep