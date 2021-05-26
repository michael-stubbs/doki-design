import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styles from "../styles/Navbar.module.scss";

interface NavP {
  items: Array<Object>;
}

interface Items {
  i?: Object;
  name?: string;
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
        {props.items.map((i: Items) => {
          return <Button>{i.name}</Button>;
        })}
      </ButtonGroup>
    </div>
  );
}

export default navbar;
