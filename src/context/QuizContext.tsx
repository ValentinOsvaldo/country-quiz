import { createContext } from 'react';
import { Answer } from './quizReducer';

interface QuizContext {
  options: string[];
  answer?: Answer;
  userAnswer?: string;
  showAnswer: boolean;
  isFinishGame: boolean;
  score: number;
  isLoading: boolean;
  setUserAnswer: (userAnswer: string) => void;
  setOptions: () => Promise<void>;
  finishGame: () => void;
  newGame: () => void;
}

export const QuizContext = createContext({} as QuizContext);
