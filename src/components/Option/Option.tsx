import { useContext } from 'react';
import { MdOutlineCancel, MdCheckCircleOutline } from 'react-icons/md';
import { QuizContext } from '../../context';
import styles from './Option.module.css';

interface Props {
  option: string;
  index: number;
}

export const Option: React.FC<Props> = ({ option, index }) => {
  const { answer, userAnswer, showAnswer, setUserAnswer } =
    useContext(QuizContext);

  return (
    <button
      onClick={() => setUserAnswer(option)}
      disabled={!!userAnswer}
      className={`${styles.option} ${
        showAnswer && option === answer?.name && styles.correct
      }
      ${
        option === userAnswer && userAnswer !== answer?.name && styles.incorrect
      }
      `}
    >
      <span className={styles['option-index']}>
        {(index + 10).toString(34)}
      </span>
      <div className={styles['option-content']}>
        <span>{option}</span>
        {showAnswer && option === answer?.name && <MdCheckCircleOutline size={24} />}
        {option === userAnswer && userAnswer !== answer?.name && <MdOutlineCancel size={24} />}
      </div>
    </button>
  );
};
