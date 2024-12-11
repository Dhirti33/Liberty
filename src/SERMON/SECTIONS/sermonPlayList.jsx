import { useState } from "react";
import "../STYLES/sermonPlayList.css";

import sermon1 from "../../IMAGES/sermon1.jpg"
import sermon2 from "../../IMAGES/sermon2.jpg"
import sermon3 from "../../IMAGES/sermon3.jpg"
import sermon4 from "../../IMAGES/sermon4.jpg"
import sermon5 from "../../IMAGES/sermon5.jpg"
import sermon6 from "../../IMAGES/sermon6.jpg"


 const list = [
  {
    image: sermon1,
    date: "November 24, 2024",
    title: "Jesus come to bring joy",
    author: "John Doe",
  },
  {
    image: sermon2,
    date: "November 17, 2024",
    title: "The power of God",
    author: "Ester Smith",
  },
  {
    image: sermon3,
    date: "November 10, 2024",
    title: "The power of God",
    author: "Jane Smith",
  },
  {
    image: sermon4,
    date: "November 3, 2024",
    title: "The power of God",
    author: "Mathew Kan",
  },
  {
    image: sermon5,
    date: "October 27, 2024",
    title: "The power of God",
    author: "John Doe",
  },
  {
    image: sermon6,
    date: "October 20, 2024",
    title: "The power of God",
    author: "Des Mond",
  },
];

const SermonPlayList = () => {
  const [sermons, setSermons] = useState(list);
  return (
    <section id="SermonPlayList">
      <div className="sermonContainer">
        {sermons.map((sermon, index) => (
          <div className="sermonCard" key={index}>
            <div className="sermonImage">
                <img src={sermon.image} alt="" loading="lazy"/>
            </div>
            <div className="sermonDate">{ sermon.date}</div>
            <div className="sermonTitle H2">{ sermon.title}</div>
            <div className="sermonAuthor">By: {sermon.author}</div>
            <div className="sermonPlay">
              <button className="Audio"><i className="audio bi-music-note"></i></button>
              <button className="Video"><i className="video bi-camera-video-fill"></i></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SermonPlayList;
