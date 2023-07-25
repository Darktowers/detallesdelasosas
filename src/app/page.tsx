import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.landscape}>
        <div className={styles.landscape__cover} />
        <Image
          className={styles.logo}
          src="/landscape.png"
          alt="landscape"
          priority
          fill
        />
      </div>
      <div className={styles.center}>
        <div className={styles.logo__wrapper}>
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="detalles de las osas logo"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>

      <div className={styles.text}>
        <p>Encuentra una amplia variedad de artesanias exclusivas hechas a mano.</p>
      </div>

      <div className={styles.grid}>
        <a
          href="https://wa.me/+573196675739"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contactanos <span>-&gt;</span>
          </h2>
        </a>
      </div>
    </main>
  );
}
