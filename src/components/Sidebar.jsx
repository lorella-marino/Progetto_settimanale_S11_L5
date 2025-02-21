import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMusic } from "../redux/actions";
import { Navbar, Nav, Button, Form, FormControl, Container } from "react-bootstrap";

const Sidebar = ({ setShowLibrary }) => {
  // <-- Passa la funzione dal padre
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      dispatch(fetchMusic(search));
      setSearch("");
    }
  };

  return (
    <Navbar expand="md" className="align-items-start" id="sidebar">
      <Container className="d-flex flex-column align-items-start p-3">
        <Navbar.Brand href="index.html">
          <img src="../src/assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column">
            <div className="mt-4 mb-1">
              <Nav.Link href="#" onClick={() => setShowLibrary(false)}>
                <i className="bi bi-house-door-fill"></i>&nbsp; Home
              </Nav.Link>
              <Nav.Link href="#" onClick={() => setShowLibrary(true)}>
                <i className="bi bi-book-fill"></i>&nbsp; Your Library
              </Nav.Link>
            </div>
            <Form className="mt-3 d-flex" onSubmit={handleSearch}>
              <FormControl
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-secondary" size="sm" type="submit">
                GO
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container className=" p-4 nav-btn d-flex flex-column">
        <Button variant="secondary" className="signup-btn">
          Sign Up
        </Button>
        <Button variant="secondary" className="login-btn">
          Login
        </Button>
        <div>
          <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
        </div>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
