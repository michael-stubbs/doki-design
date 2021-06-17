import { useState, useEffect } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ButtonBase from "@material-ui/core/ButtonBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import styles from "../../styles/FHGrp.module.scss";

interface PopProps {
  slide: number;
  items: any;
}

function Ottoman(props: PopProps) {
  const [style, setStyle] = useState({ visibility: "collapse" });

  // Popover content from Bootstrap
  const popover = (
    <Popover id="FHOttoman">
      <Popover.Title as="h3">{props.items.link4[1]}</Popover.Title>
      <Popover.Content>
        <a href={props.items.link4[0]}>{props.items.link4[0]}</a>
      </Popover.Content>
    </Popover>
  );

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
    <div className={styles.ottoman} style={style}>
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="right"
        overlay={popover}
      >
        <ButtonBase>
          <FontAwesomeIcon
            icon={faPlusCircle}
            className={styles.itemBtn}
            size="lg"
          />
        </ButtonBase>
      </OverlayTrigger>
    </div>
  );
}

export default Ottoman;
