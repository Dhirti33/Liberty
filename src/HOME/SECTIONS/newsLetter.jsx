import "../STYLES/newsLetter.css"

import newsLetterOne from "../../IMAGES/newsLetterOne.jpg"
import newsLetterTwo from "../../IMAGES/newsLetterTwo.jpg"
import newsLetterThree from "../../IMAGES/newsLetterThree.jpg"



const NewsLetter = () => {
  return (
    <section id="newsLetter">
        <div className="newsLetterContainer">
            <div className="newsLetterLeft">
                <h1 className="newLetterHeaderText">Sign up for our weekly newsletter <span>The Good Stuff</span>.</h1>
                <p className="newsLetterSubText">We have an amazing church, and every week we send you stories that highlight the hearts of our members living out God&apos;s plan to share his love with people around us</p>
                <form action="" className="newsletterForm">
                    <input type="email" name="" id="" className="fromEmail" placeholder="Enter email address"/>
                    <button type="submit" className="formSend">Sign me up</button>
                </form>
            </div>
            <div className="newsLetterRight">
                <div className="letterImageContainer">
                    <img src={newsLetterOne} alt="" className="imageOne" loading="lazy"/>
                </div>
                <div className="letterImageContainer">
                    <img src={newsLetterTwo} alt="" className="imageTwo" loading="lazy"/>
                </div>
                <div className="letterImageContainer">
                    <img src={newsLetterThree} alt="" className="imageThree" loading="lazy"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter