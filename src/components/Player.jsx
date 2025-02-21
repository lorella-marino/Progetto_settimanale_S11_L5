import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const currentSong = useSelector((state) => state.music.currentSong);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row xs={2} className="h-100  justify-content-center align-items-center">
            {currentSong && (
              <Col xs={6} md={4} className="d-flex justify-content-center">
                <img src={currentSong.album.cover_medium} alt="track" width="50" height="50" />
                <p className="ms-2 text-white">
                  {currentSong.title} <br /> {currentSong.artist.name.toUpperCase()}
                </p>
              </Col>
            )}
            <Col xs={6} md={4} className="player-controls justify-content-center">
              <div className="d-flex">
                <a href="#">
                  <img src="./src/assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="./src/assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="./src/assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="./src/assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="./src/assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <ProgressBar now={0} id="progressbar" className="mt-3" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
