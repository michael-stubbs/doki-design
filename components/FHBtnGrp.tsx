import { useState, useEffect } from "react";
import Sofa from "./FHBtns/Sofa";
import Art from "./FHBtns/Art";
import Ottoman from "./FHBtns/Ottoman";
import Paint from "./FHBtns/Paint";
import Chair from "./FHBtns/Chair";

import styles from "../styles/Main.module.scss";

interface PopProps {
  slide: number;
  items: any;
}

function FHBtnGrp(props: PopProps) {
  const [style, setStyle] = useState({ visibility: "collapse" });

  //   Effect only updates when Slide# updates
  // Only shows item links on appropriate slide
  useEffect(() => {
    if (props.slide === 1) {
      setStyle({ visibility: "visible" });
    } else {
      setStyle({ visibility: "collapse" });
    }
  }, [props.slide]);

  return (
    <div className={styles.testGroup0} style={style}>
      <Sofa slide={props.slide} items={props.items} />
      <Art slide={props.slide} items={props.items} />
      <Ottoman slide={props.slide} items={props.items} />
      <Paint slide={props.slide} items={props.items} />
      <Chair slide={props.slide} items={props.items} />
    </div>
  );
}

export default FHBtnGrp;
