import { useReducer, useEffect } from 'react';
import { QuizContext, QuizState, quizReducer } from './';
import { getOptions } from '../helpers';
import { countriesApi } from '../api/countriesApi';
import { Country } from '../interfaces';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialState: QuizState = {
  options: [],
  userAnswer: undefined,
  showAnswer: false,
  score: 0,
  isFinishGame: false,
  isLoading: false,
};

export const QuizProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    setOptions();
  }, []);

  useEffect(() => {
    state.options.length > 0 && setAnswer();
  }, [state.options]);

  const setOptions = async () => {
    const options = await getOptions();
    
    dispatch({
      type: '[quiz] - set countries',
      payload: options,
    });
  };

  const setUserAnswer = (userAnswer: string) => {
    if (userAnswer === state.answer?.name) {
      dispatch({
        type: '[quiz] - increase score',
        payload: (state.score += 1),
      });
    }

    dispatch({
      type: '[quiz] - set user answer',
      payload: userAnswer,
    });
  };

  const setAnswer = async () => {
    const country = state.options[Math.floor(Math.random() * 4)];
    const { data } = await countriesApi.get<Country[]>(
      `/name/${country}?fullText=true`
    );

    dispatch({
      type: '[quiz] - set correct answer',
      payload: {
        capital: data[0].capital[0],
        flag: data[0].flags.svg,
        name: data[0].name.common,
      },
    });
  };

  const finishGame = () => {
    dispatch({
      type: '[quiz] - finish game',
    });
  };

  const newGame = () => {
    dispatch({
      type: '[quiz] - new game',
    });

    setOptions();
  };

  return (
    <QuizContext.Provider
      value={{
        ...state,
        setUserAnswer,
        setOptions,
        finishGame,
        newGame,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
