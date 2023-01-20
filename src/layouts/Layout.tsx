import styles from './Layout.module.css';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <header className={styles.header}>
          <h1>Country Quiz</h1>
        </header>
        <section className={styles.wrapper}>{children}</section>
      </section>
      <footer className={styles.footer}>
        <p>
          Created by{' '}
          <a
            href="https://github.com/ValentinOsvaldo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Osvaldo Valentin{' '}
          </a>
          -
          <a
            href="https://devchallenges.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}devChallenges.io
          </a>
        </p>
      </footer>
    </main>
  );
};
