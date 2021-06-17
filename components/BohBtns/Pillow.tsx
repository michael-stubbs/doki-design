import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ButtonBase from "@material-ui/core/ButtonBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import styles from "../../styles/BohGrp.module.scss";

interface PopProps {
  slide: number;
  items: any;
}

function Pillow(props: PopProps) {
  // Popover content from Bootstrap
  const popover = (
    <Popover id="BohPillow">
      <Popover.Title as="h3">{props.items.link3[1]}</Popover.Title>
      <Popover.Content>
        <a href={props.items.link3[0]}>{props.items.link3[0]}</a>
      </Popover.Content>
    </Popover>
  );

  return (
    <div className={styles.pillow}>
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

export default Pillow;
