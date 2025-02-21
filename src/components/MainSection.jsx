import { useSelector } from "react-redux";
import Playlist from "./Playlist";
import { Col, Container, Row } from "react-bootstrap";

const MainSection = () => {
  const music = useSelector((state) => state.music);

  return (
    <div className="offset-md-1 p-3">
      <Container>
        <Row>
          <Col xs={9} lg={11} className="main-links d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        <Playlist music={music} />
      </Container>
    </div>
  );
};
export default MainSection;
