import { QuizProvider } from './context';
import { QuizPage } from './pages';

export const CountryQuizApp = () => {
  return (
    <QuizProvider>
      <QuizPage />
    </QuizProvider>
  );
};
