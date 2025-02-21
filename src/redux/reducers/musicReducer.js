export const SET_MUSIC = "SET_MUSIC";

const initialState = {
  rock: [],
  pop: [],
  hiphop: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC:
      return {
        ...state,
        [action.payload.section]: action.payload.songs,
      };
    default:
      return state;
  }
};

export default musicReducer;
