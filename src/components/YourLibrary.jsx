import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { setCurrentSong, setFavorite } from "../redux/actions";

const YourLibrary = () => {
  const dispatch = useDispatch();
  const favoriteSongs = useSelector((state) => state.music.favorites);
  const playlists = useSelector((state) => state.music.playlists);

  const likedSongs = [];
  Object.values(playlists).forEach((songs) => {
    likedSongs.push(...songs.filter((song) => favoriteSongs.includes(song.id)));
  });

  return (
    <Container className="my-5 pb-5">
      <Row>
        <Col xs={10} className="text-white">
          <h2>Your Library</h2>
          <Row xs={1} sm={2} lg={3} xl={4}>
            {likedSongs.length > 0 ? (
              likedSongs.map((song) => (
                <Col
                  key={song.id}
                  className="text-center position-relative"
                  onClick={() => dispatch(setCurrentSong(song))}
                >
                  <img className="img-fluid" src={song.album.cover_medium} alt="track" />
                  <i
                    className={`position-absolute top-0 end-0 mx-3 ${
                      favoriteSongs.includes(song.id) ? "bi-heart-fill text-success" : "bi-heart"
                    }`}
                    style={{ fontSize: "1.5rem" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(setFavorite(song.id));
                    }}
                  ></i>
                  <p>Track: {song.title}</p>
                </Col>
              ))
            ) : (
              <p>No favorite songs yet.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default YourLibrary;
