import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ButtonBase from "@material-ui/core/ButtonBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import styles from "../styles/Main.module.scss";

function TestBtnGroup() {
  const popover = (
    <Popover id="test-pop">
      <Popover.Title as="h3">Test Pop</Popover.Title>
      <Popover.Content>This is a test popover</Popover.Content>
    </Popover>
  );

  return (
    <div className={styles.testGroup}>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
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
