export interface Answer {
  name: string;
  capital: string;
  flag: string;
}

export interface QuizState {
  options: string[];
  answer?: Answer;
  userAnswer?: string;
  showAnswer: boolean;
  score: number;
  isFinishGame: boolean;
  isLoading: boolean;
}

type QuizActions =
  | { type: '[quiz] - set countries'; payload: string[] }
  | { type: '[quiz] - set user answer'; payload: string }
  | { type: '[quiz] - set show answer'; payload: boolean }
  | { type: '[quiz] - increase score'; payload: number }
  | { type: '[quiz] - new game' }
  | { type: '[quiz] - change loading state', payload: boolean }
  | { type: '[quiz] - finish game' }
  | { type: '[quiz] - set correct answer'; payload: Answer };

export const quizReducer = (
  state: QuizState,
  action: QuizActions
): QuizState => {
  switch (action.type) {
    case '[quiz] - set countries':
      return {
        ...state,
        options: action.payload,
        showAnswer: false,
        answer: undefined,
        userAnswer: undefined,
      };
    case '[quiz] - set correct answer':
      return {
        ...state,
        answer: action.payload,
      };
    case '[quiz] - set user answer':
      return {
        ...state,
        userAnswer: action.payload,
        showAnswer: true,
      };
    case '[quiz] - increase score':
      return {
        ...state,
        score: action.payload,
      };
    case '[quiz] - new game':
      return {
        ...state,
        isFinishGame: false,
        score: 0
      };
    case '[quiz] - finish game':
      return {
        ...state,
        isFinishGame: true,
        options: [],
        showAnswer: false,
        answer: undefined,
        userAnswer: undefined,
      };
    case '[quiz] - change loading state':
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
};
