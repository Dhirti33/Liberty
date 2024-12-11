import "../STYLES/eventPageHero.css"

import event from "../../IMAGES/event.jpg"

const EventPageHero = () => {
  return (
    <section id="eventPageHero">
        <div className="eventPageHeroImage">
            <img src={event} alt="" className="eventPageImage" loading='lazy' />
        </div>
        <div className="eventPageHeroHead">
            <h1 className="eventPageHeroHeadText H1">Events</h1>
        </div>

    </section>
  )
}

export default EventPageHero