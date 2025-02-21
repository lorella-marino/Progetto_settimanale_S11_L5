import { Row, Col, Container } from "react-bootstrap";

const Playlist = ({ music }) => {
  return (
    <Container>
      <Row>
        <Col xs={10}>
          {Object.entries(music).map(([artist, songs]) =>
            songs.length > 0 ? (
              <div key={artist} className="text-white">
                <h2>{songs[0].artist.name}</h2>
                <Row xs={1} sm={2} lg={3} xl={4}>
                  {songs.map((song) => (
                    <Col key={song.id} className="text-center">
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
            ) : null
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Playlist;
