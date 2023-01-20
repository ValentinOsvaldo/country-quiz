import { useContext } from 'react';
import { QuizContext } from '../../context';
import { Layout } from '../../layouts';
import { Buttons, Question, Options } from '../';

export const QuizGame = () => {
  const { userAnswer, options } = useContext(QuizContext);

  return (
    <Layout>
      <Question />
      <Options options={options} />
      {!!userAnswer && <Buttons />}
    </Layout>
  );
};
