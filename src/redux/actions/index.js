import { SET_MUSIC } from "../reducers/musicReducer";

export const fetchMusic = (query, section) => async (dispatch) => {
  try {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
    if (response.ok) {
      let { data } = await response.json();
      dispatch({ type: SET_MUSIC, payload: { section, songs: data.slice(0, 4) } });
    } else {
      throw new Error("Error in fetching songs");
    }
  } catch (err) {
    console.error("Error fetching music:", err);
  }
};
