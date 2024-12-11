import "../STYLES/contactFooter.css"

import ag from "../../IMAGES/AG.png"


const ContactFooter = () => {
  return (
    <footer id="contactFooter">
        <div className="contactFooterContainer">
            <div className="liveStream">
              <p className="streamText">Catch us live</p>
              <button className="streamBTN">LIVE STREAM</button>
            </div>
            <div className="footerLogoImg">
              <img src={ag} alt="" />
            </div>
            <div className="footerLocation">
              <p className="text">Join us Sunday at 8:30am</p>
              <p className="location">Accra, Ghana</p>
            </div>
        </div>
        <div className="footerBottom">@COPYRIGHT 2023 | ALL RIGHT RESERVED | SITE DESIGN BY LOMOKO DESMOND</div>
    </footer>
  )
}

export default ContactFooter