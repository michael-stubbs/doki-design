import SocialGroup from "./Socials";
import styles from "../styles/Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Doki Design</h1>
      <img
        src="/circle-cropped.png"
        alt=""
        width="100px"
        height="100px"
        className={styles.logo}
      />
      <SocialGroup />
    </header>
  );
}

export default Header;
