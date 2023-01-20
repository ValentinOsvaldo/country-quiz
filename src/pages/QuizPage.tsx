import { useContext } from 'react';
import { QuizContext } from '../context';
import { FinishGame, QuizGame } from '../components';

export const QuizPage = () => {
  const { isFinishGame } = useContext(QuizContext);

  return !isFinishGame ? <QuizGame /> : <FinishGame />;
};
