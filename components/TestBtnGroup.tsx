import { useState, useEffect } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ButtonBase from "@material-ui/core/ButtonBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import styles from "../styles/Main.module.scss";
import { propTypes } from "react-bootstrap/esm/Image";

interface PopProps {
  slide: number;
}

function TestBtnGroup(props: PopProps) {
  const [style, setStyle] = useState({ visibility: "collapse" });

  // Popover content from Bootstrap
  const popover = (
    <Popover id="test-pop">
      <Popover.Title as="h3">Test Pop</Popover.Title>
      <Popover.Content>This is a test popover</Popover.Content>
    </Popover>
  );

  //   Effect only updates when Slide# updates
  // Only shows item links on appropriate slide
  useEffect(() => {
    if (props.slide === 0) {
      setStyle({ visibility: "visible" });
    } else {
      setStyle({ visibility: "collapse" });
    }
  }, [props.slide]);

  return (
    <div className={styles.testGroup0} style={style}>
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

export default TestBtnGroup;
