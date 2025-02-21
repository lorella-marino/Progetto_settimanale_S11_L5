import { Row, Col, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../redux/actions";

const Playlist = ({ music }) => {
  const dispatch = useDispatch();
  const artists = Object.keys(music.playlists).slice(0, 3);

  return (
    <Container>
      <Row>
        <Col xs={10}>
          {artists.map((artist) => (
            <div key={artist} className="text-white">
              <h2>{artist.toUpperCase()}</h2>
              <Row xs={1} sm={2} lg={3} xl={4}>
                {music.playlists[artist].map((song) => (
                  <Col key={song.id} className="text-center" onClick={() => dispatch(setCurrentSong(song))}>
                    <img className="img-fluid" src={song.album.cover_medium} alt="track" />
                    <p>
                      Track: {song.title}
                      <br />
                      Album: {song.album.title}
                    </p>
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
