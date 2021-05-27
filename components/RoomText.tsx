import styles from "../styles/Main.module.scss";

interface RoomProps {
  name?: string;
  desc?: string;
}

function RoomText(props: RoomProps) {
  return (
    <div className={styles.roomText}>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
    </div>
  );
}

export default RoomText;
