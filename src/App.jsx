import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import { fetchMusic } from "./redux/actions";
import MainSection from "./components/MainSection";
import Player from "./components/Player";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMusic("queen", "rock"));
    dispatch(fetchMusic("katyperry", "pop"));
    dispatch(fetchMusic("eminem", "hiphop"));
  }, [dispatch]);

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="p-0">
          <Sidebar />
        </Col>
        <Col md={10} className="p-0">
          <MainSection />
        </Col>
      </Row>
      <Player />
    </Container>
  );
}

export default App;
