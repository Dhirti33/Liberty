import { useState } from "react";
import "../STYLES/ministriesList.css";

import Kids from "../../IMAGES/KIDS.jpg";
import Youth from "../../IMAGES/youth.jpg";
import outreach from "../../IMAGES/outreach.jpg";
import worship from "../../IMAGES/newsLetterThree.jpg";
import leadership from "../../IMAGES/leadership.jpg";
import men from "../../IMAGES/men.jpg";

const Ministries = [
  {
    name: "Worship",
    image: worship,
  },
  {
    name: "Outreach",
    image: outreach,
  },
  {
    name: "Leadership",
    image: leadership,
  },
  {
    name: "Youths",
    image: Youth,
  },
  {
    name: "Kids",
    image: Kids,
  },
  {
    name: "Men",
    image: men,
  },
];

const MinistriesList = () => {
  const [ministries, setMinistries] = useState(Ministries);

  return (
    <section id="MinistriesList">
      <div className={"ministriesListContainer"}>
        {ministries.map((ministry, index) => (
          <div className="ministriesListCard" key={index}>
            <div className="ministriesCardImage">
              <img
                src={ministry.image}
                alt=""
                className="ministriesCardImg"
                loading="lazy"
              />
            </div>
            <div className="ministriesCardInfo">
              <div className="ministriesCardLeft">
                <h2 className="ministriesTag H2">{ministry.name}</h2>
                <button className="more">Learn more</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinistriesList;
