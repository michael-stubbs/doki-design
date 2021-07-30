import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ButtonBase from "@material-ui/core/ButtonBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import styles from "../../styles/BtnGroups/BohGrp.module.scss";

interface PopProps {
  slide: number;
  items: any;
}

function Art(props: PopProps) {
  // Popover content from Bootstrap
  const popover = (
    <Popover id="BohArt">
      <Popover.Title as="h3">{props.items.link4[1]}</Popover.Title>
      <Popover.Content>
        <a href={props.items.link4[0]}>Purchase (Burke)</a>
      </Popover.Content>
    </Popover>
  );

  return (
    <div className={styles.art}>
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="top"
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

export default Art;
