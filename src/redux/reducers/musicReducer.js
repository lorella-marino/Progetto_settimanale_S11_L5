import { SET_CURRENT_SONG, SET_MUSIC, SET_FAVORITE } from "../actions";

const initialState = {
  playlists: {},
  currentSong: null,
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC:
      return {
        ...state,
        playlists: {
          [action.payload.artist]: action.payload.songs,
          ...state.playlists,
        },
      };
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    case SET_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? state.favorites.filter((id) => id !== action.payload)
          : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default musicReducer;
