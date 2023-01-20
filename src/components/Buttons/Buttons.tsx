import { useContext } from 'react';
import { QuizContext } from '../../context';
import styles from './Buttons.module.css'

export const Buttons = () => {
  const { answer, userAnswer, setOptions, finishGame } =
    useContext(QuizContext);

  return (
    <div className={styles['flex-right']}>
      {userAnswer === answer?.name ? (
        <button onClick={() => setOptions()} className={styles.button}>next</button>
      ) : (
        <button onClick={() => finishGame()} className={styles.button}>finish</button>
      )}
    </div>
  );
};
