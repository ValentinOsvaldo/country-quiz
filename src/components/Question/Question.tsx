import { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../../context';
import people from '../../assets/undraw_adventure_4hum 1.svg'
import styles from './Question.module.css'

export const Question = () => {
  const { answer } = useContext(QuizContext);
  const [flagOrCapital, setFlagOrCapital] = useState<number>(
    Math.round(Math.random())
  );

  useEffect(() => {
    setFlagOrCapital(Math.round(Math.random()));
  }, [answer]);

  return (
    <header>
      <div>
        <img src={people} alt="World" className={styles.world} />
      </div>
      {flagOrCapital === 1 && !!answer ? (
        <div className={styles.question}>
          <img src={answer.flag} alt="flag" className={styles.flag} />
          <h2>Which country does this flag belong to?</h2>
        </div>
      ) : (
        <div className={styles.question}>
          <h2>{answer?.capital} is the capital of...</h2>
        </div>
      )}
    </header>
  );
};
