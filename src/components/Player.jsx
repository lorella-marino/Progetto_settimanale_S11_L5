import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const Player = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="player-controls">
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
