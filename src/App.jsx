import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

import Contact from "./CONTACT/CONTACT"
import EventPage from "./EVENTS_PAGE/EVENT_PAGE"
import Header from "./HEADER/header"
import Ministries from "./MINISTRIES/MINISTRIES"
import NextStep from "./NEXT_STEP/NEXT_STEP"
import Home from "./HOME/HOME"
import Mission from "./MISSION/MISSION"
import Sermon from "./SERMON/SERMON"

const App = () => {
  return (
    <Router>
        <Header/>
      <main id="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission/>} />
          <Route path="/sermon" element={<Sermon/>} />
          <Route path="/next_step" element={<NextStep/>} />
          <Route path="/event" element={<EventPage/>} />
          <Route path="/ministries" element={<Ministries/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        
      </main>
    </Router>
    
  )
}

export default App