import "./HOME.css"
import DayVerse from "./SECTIONS/dayVerse"
import HeroFooter from "./SECTIONS/footer"
import Hero from "./SECTIONS/hero"
import Mission from "./SECTIONS/mission"
import NewsLetter from "./SECTIONS/newsLetter"
import QuickAccess from "./SECTIONS/quickAccess"
import UpcomingEvent from "./SECTIONS/upcomingEvent"

const Home = () => {
  return (
    <main id="HOME">
        <Hero/>
        <Mission/>
        <UpcomingEvent/>
        <DayVerse/>
        <QuickAccess/>
        <NewsLetter/>
        <HeroFooter/>
    </main>
  )
}

export default Home