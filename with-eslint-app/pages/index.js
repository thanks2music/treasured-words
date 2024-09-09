import styles from "../home.module.sass";

const Home = () => (
  <>
    <div className={styles.stage}>
      <div className={styles.wrapper}>
        <div className={styles.slash}></div>
        <div className={styles.sides}>
          <div className={styles.side}></div>
          <div className={styles.side}></div>
          <div className={styles.side}></div>
          <div className={styles.side}></div>
        </div>
        <div className={styles.text}>
          <div className={styles.textBacking}>WE ARE ALL ONE</div>
          <div className={styles.textLeft}>
            <div className={styles.inner}>WE ARE ALL ONE</div>
          </div>
          <div className={styles.textRight}>
            <div className={styles.inner}>WE ARE ALL ONE</div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Home;
