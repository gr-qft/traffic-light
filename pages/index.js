import styles from "../styles/Home.module.css";
import TrafficLight from "../components/TrafficLight";

export default function Home() {
  return (
    <div className={styles.container}>
      <TrafficLight />
    </div>
  );
}
