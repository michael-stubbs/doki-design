import { useState, useEffect } from "react";
import Art from "./BohBtns/Art";
import Chair from "./BohBtns/Chair";
import Lamp from "./BohBtns/Lamp";
import Pillow from "./BohBtns/Pillow";
import Sofa from "./BohBtns/Sofa";

import styles from "../styles/BtnGroups/BohGrp.module.scss";

interface PopProps {
  slide: number;
  items: any;
}

function BohBtnGrp(props: PopProps) {
  const [style, setStyle] = useState({
    visibility: "collapse",
    opacity: 0,
    transition: "visibility 0s 0.7s, opacity 0.7s linear",
  });
  //   Effect only updates when Slide# updates
  // Only shows item links on appropriate slide
  useEffect(() => {
    if (props.slide === 3) {
      setStyle({
        visibility: "visible",
        opacity: 1,
        transition: "opacity 0.7s linear",
      });
    } else {
      setStyle({
        visibility: "collapse",
        opacity: 0,
        transition: "visibility 0s 0.2s, opacity 0.2s linear",
      });
    }
  }, [props.slide]);

  return (
    <div className={styles.testGroup0} style={style}>
      <Sofa slide={props.slide} items={props.items} />
      <Art slide={props.slide} items={props.items} />
      <Chair slide={props.slide} items={props.items} />
      <Lamp slide={props.slide} items={props.items} />
      <Pillow slide={props.slide} items={props.items} />
    </div>
  );
}

export default BohBtnGrp;
