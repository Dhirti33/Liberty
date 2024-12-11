import { useState } from "react"
import "../STYLES/nextStepList.css"

import nextOne from "../../IMAGES/nextOne.jpg"
import nextTwo from "../../IMAGES/nextTwo.jpg"
import nextThree from "../../IMAGES/nextThree.jpg"



const nextList = [
    {
        title: "NEXT STEP",
        image: nextOne
    },
    {
        title: "DISCOVER CHAPEL",
        image: nextTwo
    },
    {
        title: "NEW BELIEVERS",
        image: nextThree
    }
]

const NextStepList = () => {
    const [steps, setSteps] = useState(nextList)

  return (
    <section id="NextStepList">
        <div className="nextStepContainer">
            { steps.map((step, index) => (
                <div className="nextStepCard" key={index}>
                    <div className="nextStepCardLeft">
                        <img src={step.image} alt="" className="cardLeftImage" loading="lazy" />
                    </div>
                    <div className="nextStepCardRight">
                        <h1 className="cardRightHeaderText H2">{step.title}</h1>
                        <p className="cardRightSubHeaderText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque nihil atque exercitationem cupiditate sequi itaque sapiente recusandae. Eius voluptas perferendis quibusdam voluptatum ducimus delectus fugit veniam officia aliquid atque.</p>
                        <p className="cardRightSubHeaderText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque nihil atque exercitationem cupiditate sequi itaque sapiente recusandae. Eius voluptas perferendis quibusdam voluptatum ducimus delectus fugit veniam officia aliquid atque.</p>
                    </div>
                </div>
            ))}
            
        </div>
    </section>
  )
}

export default NextStepList