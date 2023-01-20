import { useContext } from 'react';
import { QuizContext } from '../../context';
import { Layout } from '../../layouts';
import Winner from '../../assets/undraw_winners_ao2o 2.svg';
import styles from './FinishGame.module.css';

export const FinishGame = () => {
  const { score, newGame } = useContext(QuizContext);

  return (
    <Layout>
      <article className={styles['flex-center']}>
        <img src={Winner} alt="winner" className={styles.winner} />
        <h2 className={styles.title}>Results</h2>
        <p className={styles['correct-answer']}>
          You got
          <span className={styles.score}> {score} </span>
          correct answers
        </p>
        <button onClick={newGame} className={styles.button}>Try again</button>
      </article>
    </Layout>
  );
};
