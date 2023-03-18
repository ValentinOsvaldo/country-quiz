import { useContext } from 'react';
import { QuizContext } from '../../context';
import { Layout } from '../../layouts';
import { Buttons, Question, Options, Loader } from '../';

export const QuizGame = () => {
  const { userAnswer, options, isLoading } = useContext(QuizContext);

  return (
    <Layout>
      {isLoading ? (
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      ) : (
        <>
          <Question />
          <Options options={options} />
          {!!userAnswer && <Buttons />}
        </>
      )}
    </Layout>
  );
};
