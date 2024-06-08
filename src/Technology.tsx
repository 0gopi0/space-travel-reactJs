import getData from "./data";
import NavBar from "./NavBar";
import styles from "./Technology.module.css";
import p1 from "../src/assets/technology/image-launch-vehicle-portrait.jpg";
import p2 from "../src/assets/technology/image-spaceport-portrait.jpg";
import p3 from "../src/assets/technology/image-space-capsule-portrait.jpg";
import { useState } from "react";
const Technology = () => {
  const Styles = getData(4);
  const h1Tags = ["LAUNCH VEHICLE", "SPACEPORT", "SPACE CAPSULE"];
  const pTags = [
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  ];
  const images = [p1, p2, p3];
  const [selection, setSelection] = useState(0);
  return (
    <div style={Styles} className="	min-h-screen	">
      <div>
        <NavBar number={3} />
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.bodyText}>
          <h2 className={styles.h2Tag}>
            <span className={styles.bold}>03</span> Space launch 101
          </h2>
          <div className="flex mt-28">
            <span className={styles.buttonsContainer}>
              <button
                className={
                  selection === 0 ? styles.buttonSelected : styles.button
                }
                onClick={() => setSelection(0)}
              >
                1
              </button>
              <button
                className={
                  selection === 1 ? styles.buttonSelected : styles.button
                }
                onClick={() => setSelection(1)}
              >
                2
              </button>
              <button
                className={
                  selection === 2 ? styles.buttonSelected : styles.button
                }
                onClick={() => setSelection(2)}
              >
                3
              </button>
            </span>
            <div>
              <h3 className={`text-base${styles.h3Tag}`}>THE TERMINOLOGY...</h3>
              <h1 className={`text-6xl	mt-2.5 ${styles.h1Tag}`}>
                {h1Tags[selection]}
              </h1>
              <p className={styles.pTag}> {pTags[selection]}</p>
            </div>
          </div>
        </div>
        <div className={styles.bodyImage}>
          <img className={styles.image} src={images[selection]} />
        </div>
      </div>
    </div>
  );
};

export default Technology;
