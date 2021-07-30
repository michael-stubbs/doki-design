import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styles from "../styles/Header.module.scss";

function SocialGroup() {
  return (
    <div className={styles.socialGroup}>
      <ButtonGroup
        size="large"
        color="primary"
        variant="text"
        aria-label="outlined secondary button group"
      >
        <Button
          href="https://www.instagram.com/juneleeid/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designer
        </Button>
        <Button
          href="https://github.com/michael-stubbs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developer
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default SocialGroup;
