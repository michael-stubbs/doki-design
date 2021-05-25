import Button from "@material-ui/core/Button";
import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        A collaborative project between June Lee and Michael Stubbs.{" "}
      </p>
      <Button
        variant="outlined"
        color="primary"
        href="https://github.com/michael-stubbs/doki-design"
        target="_blank"
        className={styles.github}
      >
        Github
      </Button>
    </footer>
  );
}

export default Footer;
