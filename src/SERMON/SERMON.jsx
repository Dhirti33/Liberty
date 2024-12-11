import SermonFooter from "./SECTIONS/sermonFooter"
import SermonHero from "./SECTIONS/sermonHero"
import SermonPlayList from "./SECTIONS/sermonPlayList"
import "./SERMON.css"

const Sermon = () => {
  return (
    <main id="SERMON">
        <SermonHero/>
        <SermonPlayList/>
        <SermonFooter/>
    </main>
  )
}

export default Sermon