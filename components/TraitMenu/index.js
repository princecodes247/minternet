import Head from "next/head";
import Image from "next/image";
import styles from "./TraitMenu.module.css";

let TraitCard = () => {
  return (
    <li className={styles.traitCard}>
      <div className={styles.traitImg}></div>
      <div className={styles.traitDetails}>
        <p className={styles.traitName}>Background</p>
        <p className={styles.traitInfo}>23 variants</p>
      </div>
    </li>
  );
};

export default function TraitMenu() {
  return (
    <div className={styles.container}>
      <ul className={styles.traitList}>
        <TraitCard />

        <li className={styles.traitCard}>
          <div>+</div>
        </li>
      </ul>
    </div>
  );
}
