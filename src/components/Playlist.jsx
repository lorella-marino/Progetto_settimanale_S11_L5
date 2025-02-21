import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setFavorite } from "../redux/actions";

const Playlist = ({ music }) => {
  const dispatch = useDispatch();
  const favoriteSongs = useSelector((state) => state.music.favorites);
  const artists = Object.keys(music.playlists);

  return (
    <Container className="my-5 pb-5">
      <Row>
        <Col xs={10}>
          {artists.map((artist) => (
            <div key={artist} className="text-white">
              <h2>{artist.toUpperCase()}</h2>
              <Row xs={1} sm={2} lg={3} xl={4}>
                {music.playlists[artist].map((song) => (
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
                      style={{
                        color: favoriteSongs.includes(song.id) ? "rgb(60, 211, 60)" : "rgb(60, 211, 60)",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(setFavorite(song.id));
                      }}
                    ></i>
                    <p>Track: {song.title}</p>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Playlist;
