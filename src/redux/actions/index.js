export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const SET_MUSIC = "SET_MUSIC";
export const SET_FAVORITE = "SET_FAVORITE";

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});

export const setMusic = (artist, songs) => ({
  type: SET_MUSIC,
  payload: { artist, songs },
});

export const setFavorite = (songId) => ({
  type: SET_FAVORITE,
  payload: songId,
});

export const fetchMusic = (artist) => async (dispatch) => {
  try {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`);
    if (response.ok) {
      let { data } = await response.json();
      dispatch(setMusic(artist, data.slice(0, 4)));
    } else {
      throw new Error("Error in fetching songs");
    }
  } catch (err) {
    console.error("Error fetching music:", err);
  }
};
