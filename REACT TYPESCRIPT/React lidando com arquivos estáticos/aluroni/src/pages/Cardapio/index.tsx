import styles from "./Cardapio.module.scss";

import { ReactComponent as Logo } from "assets/logo.svg";

const Cardapio = () => {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A cada do código e da massa</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio}>Cardápio</h3>
      </section>
    </main>
  );
};

export default Cardapio;
