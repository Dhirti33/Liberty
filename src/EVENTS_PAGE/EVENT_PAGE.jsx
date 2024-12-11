import "./EVENT_PAGE.css"
import EventPageFooter from "./SECTIONS/eventPageFooter"
import EventPageHero from "./SECTIONS/eventPageHero"
import EventPageList from "./SECTIONS/eventPageList"


const EventPage = () => {
  return (
    <main id="EventPage">
        <EventPageHero/>
        <EventPageList/>
        <EventPageFooter/>
    </main>
  )
}

export default EventPage