import "../STYLES/contactHero.css"

import contact from "../../IMAGES/contact.jpg"

const ContactHero = () => {
  return (
    <section id="contactHero">
        <div className="contactHeroImage">
            <img src={contact} alt="" className="contactImage" loading="lazy" />
        </div>
        <div className="contactHeroHead">
            <h1 className="contactHeroHeadText H1">Contact Us</h1>
        </div>

    </section>
  )
}

export default ContactHero