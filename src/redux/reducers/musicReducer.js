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
    case SET_FAVORITE: {
      const currentFavorites = Array.isArray(state.favorites) ? state.favorites : [];
      const updatedFavorites = currentFavorites.includes(action.payload)
        ? currentFavorites.filter((id) => id !== action.payload)
        : [...currentFavorites, action.payload];

      try {
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      } catch (error) {
        console.error("Errore nel salvataggio dei preferiti:", error);
      }

      return {
        ...state,
        favorites: updatedFavorites,
      };
    }

    default:
      return state;
  }
};

export default musicReducer;
