import { SET_CURRENT_SONG, SET_MUSIC } from "../actions";

const initialState = {
  playlists: {},
  currentSong: null,
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC:
      return {
        ...state,
        playlists: {
          ...state.playlists,
          [action.payload.artist]: action.payload.songs,
        },
      };
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default musicReducer;
