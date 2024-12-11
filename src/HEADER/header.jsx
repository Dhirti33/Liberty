import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./header.css"

import AG from "../IMAGES/AG.png"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <nav id="navBar" className={ scrolled ? "scrolled" : ""} >
        <div className="leftNav">
            <Link to="/" className="LogoContainer">
              <img src={AG} alt="" />
            </Link>
        </div>
        <div className="rightNav">
            <Link to='/mission' className={`missionTab tab ${ scrolled ? "scrolled" : ""}`}>MISSION</Link>
            <Link to='/sermon' className={`missionTab tab ${ scrolled ? "scrolled" : ""}`}>SERMON</Link>
            <Link to='/next_step' className={`missionTab tab ${ scrolled ? "scrolled" : ""}`}>NEXT STEP</Link>
            <Link to='/event' className={`missionTab tab ${ scrolled ? "scrolled" : ""}`}>EVENTS</Link>
            <Link to='/ministries' className={`missionTab tab ${ scrolled ? "scrolled" : ""}`}>MINISTRIES</Link>
            <Link to='/contact' className={`missionTab tab ${ scrolled ? "scrolled" : ""}`}>CONTACT</Link>
        </div>
    </nav>
  )
}

export default Header