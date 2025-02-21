import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import { fetchMusic } from "./redux/actions";
import MainSection from "./components/MainSection";

function App() {
  const dispatch = useDispatch();
  const [showLibrary, setShowLibrary] = useState(false); // <-- Stato per controllare la vista

  useEffect(() => {
    dispatch(fetchMusic("Queen"));
    dispatch(fetchMusic("Bruno Mars"));
    dispatch(fetchMusic("Jovanotti"));
  }, [dispatch]);

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="p-0">
          <Sidebar setShowLibrary={setShowLibrary} /> {/* <-- Passa la funzione */}
        </Col>
        <Col md={10} className="p-0">
          <MainSection showLibrary={showLibrary} /> {/* <-- Passa lo stato */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
