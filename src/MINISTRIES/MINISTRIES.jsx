import "./MINISTRIES.css"
import MinistriesFooter from "./SECTIONS/ministriesFooter"
import MinistriesHero from "./SECTIONS/ministriesHero"
import MinistriesList from "./SECTIONS/ministriesList"


const Ministries = () => {
  return (
    <main id="Ministries">
        <MinistriesHero/>
        <MinistriesList/>
        <MinistriesFooter/>
    </main>
  )
}

export default Ministries