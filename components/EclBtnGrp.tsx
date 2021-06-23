import { useState, useEffect } from "react";
import Bookcase from "./EclBtns/Bookcase";
import Paint from "./EclBtns/Paint";
import Rug from "./EclBtns/Rug";
import Sofa from "./EclBtns/Sofa";
import Table from "./EclBtns/Table";

import styles from "../styles/BtnGroups/EclGrp.module.scss";

interface PopProps {
  slide: number;
  items: any;
}

function EclBtnGrp(props: PopProps) {
  const [style, setStyle] = useState({
    visibility: "collapse",
    opacity: 0,
    transition: "visibility 0s 0.2s, opacity 0.2s linear",
  });
  //   Effect only updates when Slide# updates
  // Only shows item links on appropriate slide
  useEffect(() => {
    if (props.slide === 4) {
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
      <Bookcase slide={props.slide} items={props.items} />
      <Paint slide={props.slide} items={props.items} />
      <Rug slide={props.slide} items={props.items} />
      <Table slide={props.slide} items={props.items} />
    </div>
  );
}

export default EclBtnGrp;
