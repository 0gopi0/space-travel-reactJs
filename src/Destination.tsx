import NavBar from "./NavBar";
import getData from "./data";
import styles from "./Destination.module.css";
import { useState } from "react";
import moon from "../src/assets/destination/image-moon.png";
import mars from "../src/assets/destination/image-mars.png";
import europa from "../src/assets/destination/image-europa.png";
import titan from "../src/assets/destination/image-titan.png";
const Destination = () => {
  const Styles = getData(2);
  const [selection, setSelection] = useState(0);

  const images = [moon, mars, europa, titan];
  const h1Tags = ["Moon", "Mars", "Europa", "Titan"];
  const pTags = [
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  ];
  const distance = ["384,400 km", "225 MIL. KM", "628 MIL. KM", "1.6 BIL. KM"];
  const time = ["3 Days", "9 Months", "3 YEARS", "7 YEARS"];
  return (
    <body style={Styles}>
      <header>
        <NavBar number={1} />
      </header>
      <main className={styles.bodyContainer}>
        <section role="image_section" className={styles.bodyImageContainer}>
          <h2 className="text-3xl	mb-20 mt-20">
            <span className={`opacity-70	mr-4 font-semibold ${styles.h2Tag}`}>
              01
            </span>{" "}
            Pick your destination
          </h2>
          <section role="image" className={styles.bodyImage}>
            <img className={styles.image} src={images[selection]} />
          </section>
        </section>
        <section role="links" className={styles.bodyText}>
          <ul
            className={`flex gap-9	text-base	font-normal ${styles.ulConatiner}`}
          >
            <li
              key="moon"
              onClick={() => setSelection(0)}
              className="relative cursor-pointer"
            >
              <span
                className={
                  selection === 0 ? styles.selected : styles.hoverAnimation
                }
              >
                Moon
              </span>
            </li>
            <li
              key="mars"
              onClick={() => setSelection(1)}
              className="relative cursor-pointer"
            >
              <span
                className={
                  selection === 1 ? styles.selected : styles.hoverAnimation
                }
              >
                Mars
              </span>
            </li>
            <li
              key="europa"
              onClick={() => setSelection(2)}
              className="relative cursor-pointer"
            >
              <span
                className={
                  selection === 2 ? styles.selected : styles.hoverAnimation
                }
              >
                Europa
              </span>
            </li>
            <li
              key="titan"
              onClick={() => setSelection(3)}
              className="relative cursor-pointer"
            >
              <span
                className={
                  selection === 3 ? styles.selected : styles.hoverAnimation
                }
              >
                Titan{" "}
              </span>
            </li>
          </ul>
          <h1 className={`text-9xl	mt-9 ${styles.h1Tag}`}>
            {h1Tags[selection]}
          </h1>
          <p className={`text-base	leading-8 ${styles.pTag}`}>
            {pTags[selection]}
          </p>
          <span className={styles.spanLine}></span>
          <div className="flex gap-20">
            <div>
              <h3 className={`text-sm	font-mediu ${styles.h3Tag}`}>
                AVG. DISTANCE
              </h3>
              <p className={`text-2xl ${styles.h3Child}`}>
                {distance[selection]}
              </p>
            </div>
            <div>
              <h3 className={`text-sm	font-mediu ${styles.h3Tag}`}>
                EST. TRAVEL TIME
              </h3>
              <p className={`text-2xl ${styles.h3Child}`}>{time[selection]}</p>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default Destination;
