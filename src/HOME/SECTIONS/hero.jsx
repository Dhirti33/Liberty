import "../STYLES/hero.css"

import hero from '../../IMAGES/hero.jpg'

const Hero = () => {
  return (
    <section id="hero">
        <div className="heroLeft">
            <h1 className="headerText">Experience</h1>
            <h1 className="subHeaderText">REAL LOVE REAL PEOPLE REAL CHANGE</h1>
            <p className="subText">Join us in-person or online every sunday at 8:30 AM</p>
            <div className="heroLink">
                <div className="heroLinkLine"></div>
                <div className="heroLinkButton">
                    <button className="linkButton"><i className="play bi-play-fill"></i></button>
                </div>
                <div className="heroLinkText">Join service online</div>
            </div>
        </div>
        <div className="heroRight">
            <img src={hero} alt="" loading='lazy' />
        </div>
    </section>
  )
}

export default Hero