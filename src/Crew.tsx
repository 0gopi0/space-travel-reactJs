import getData from "./data";
import NavBar from "./NavBar";
import styles from "./Crew.module.css";
import { useState } from "react";
import i1 from "../src/assets/crew/image-douglas-hurley.png";
import i2 from "../src/assets/crew/image-mark-shuttleworth.png";
import i3 from "../src/assets/crew/image-victor-glover.png";
import i4 from "../src/assets/crew/image-anousheh-ansari.png";
const Crew = () => {
  const Styles = getData(3);
  const [selected, setSelected] = useState(0);
  const images = [i1, i2, i3, i4];
  const position = [
    "COMMANDER",
    "MISSION SPECIALIST",
    "PILOT",
    "FLIGHT ENGINEER",
  ];
  const names = [
    "DOUGLAS HURLEY",
    "MARK SHUTTLEWORTH",
    "VICTOR GLOVER",
    "ANOUSHEH ANSARI",
  ];
  const description = [
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  ];
  return (
    <body style={Styles} className={styles.homePage}>
      <header>
        <NavBar number={2} />
      </header>
      <main className={styles.bodyContainer}>
        <section role="banner" className={styles.bodyText}>
          <h3 className={styles.h3Tag}>
            <span className={styles.h3Span}>02</span> Meet your crew
          </h3>
          <h2 className={styles.h2Tag}>{position[selected]}</h2>
          <h1 className={styles.h1Tag}>{names[selected]}</h1>
          <p className={styles.pTag}>{description[selected]}</p>
          <ul role="navigation" className="flex gap-4 mt-12">
            <button
              className={`h-5	w-5 rounded-full hover:bg-zinc-400 ${
                selected === 0 ? " bg-white" : "bg-zinc-600	"
              }`}
              onClick={() => setSelected(0)}
            ></button>
            <button
              className={`h-5	w-5 rounded-full hover:bg-zinc-400 ${
                selected === 1 ? " bg-white" : "bg-zinc-600	"
              }`}
              onClick={() => setSelected(1)}
            ></button>
            <button
              className={`h-5	w-5 rounded-full hover:bg-zinc-400 ${
                selected === 2 ? " bg-white" : "bg-zinc-600	"
              }`}
              onClick={() => setSelected(2)}
            ></button>
            <button
              className={`h-5	w-5 rounded-full hover:bg-zinc-400 ${
                selected === 3 ? " bg-white" : "bg-zinc-500	"
              }`}
              onClick={() => setSelected(3)}
            ></button>
          </ul>
        </section>
        <section role="img" className={styles.bodyImage}>
          <img className={`${styles.image} `} src={images[selected]} />
        </section>
      </main>
    </body>
  );
};

export default Crew;
