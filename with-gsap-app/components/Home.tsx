import Words from "./Words";
import styles from "../components/Home.module.sass";

export default function Home() {
  return (
    <>
      <h1 className={styles.words}>
        <Words />
      </h1>
    </>
  );
}
