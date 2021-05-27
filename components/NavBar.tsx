import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styles from "../styles/Navbar.module.scss";

interface NavP {
  items: Array<Object>;
  slideSetter?: any;
}

interface Items {
  i?: Object;
  name?: string;
  count?: number;
}

function navbar(props: NavP) {
  return (
    <div className={styles.navbar}>
      <ButtonGroup
        color="primary"
        variant="text"
        aria-label="outlined secondary button group"
        className={styles.navgroup}
      >
        {/* Map over entires to create navbar titles */}
        {props.items.map((i: Items) => {
          return <Button onClick={props.slideSetter(i.count)}>{i.name}</Button>;
        })}
      </ButtonGroup>
    </div>
  );
}

export default navbar;
