import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styles from "../styles/Navbar.module.scss";

function navbar() {
  return (
    <div className={styles.navbar}>
      <ButtonGroup
        color="primary"
        variant="text"
        aria-label="outlined secondary button group"
        className={styles.navgroup}
      >
        <Button>Test1</Button>
        <Button>Test2</Button>
        <Button>Test3</Button>
        <Button>Test4</Button>
        <Button>Test5</Button>
        <Button>Test6</Button>
        <Button>Test7</Button>
      </ButtonGroup>
    </div>
  );
}

export default navbar;
