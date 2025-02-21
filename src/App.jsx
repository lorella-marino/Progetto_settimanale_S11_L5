import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import { fetchMusic } from "./redux/actions";
import MainSection from "./components/MainSection";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMusic("Queen"));
    dispatch(fetchMusic("Beatles"));
    dispatch(fetchMusic("Led Zeppelin"));
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
    </Container>
  );
}

export default App;
