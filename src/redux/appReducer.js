import { loadPersonalDataTC } from "./authReducer";

const INITIALIZE_LOADING = "INITIALIZE_LOADING";

const initialState = {
  isInitialized: false,
};

const appReducer = (state = initialState, action) => {
  if (action.type === INITIALIZE_LOADING) {
    return {
      ...state,
      isInitialized: true,
    };
  }

  return state;
};

export const initializePage = () => {
  return { type: INITIALIZE_LOADING };
};

export const initializePageTC = () => {
  return (dispatch) => {
    const promise = dispatch(loadPersonalDataTC());

    Promise.all([promise]).then(() => {
      dispatch(initializePage());
    });
  };
};

export default appReducer;
