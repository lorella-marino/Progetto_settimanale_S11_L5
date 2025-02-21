import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMusic } from "../redux/actions";
import { Navbar, Nav, Button, Form, FormControl, Container } from "react-bootstrap";

const Sidebar = () => {
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
    <Navbar expand="md" className="fixed-left fixed-bottom flex-column align-items-start" id="sidebar">
      <Container className="d-flex flex-column align-items-start">
        <Navbar.Brand href="index.html">
          <img src="../src/assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column">
            <Nav.Link href="#" className="d-flex align-items-center">
              <i className="bi bi-house-door-fill"></i>&nbsp; Home
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center">
              <i className="bi bi-book-fill"></i>&nbsp; Your Library
            </Nav.Link>
            <Form className="mt-3 d-flex" onSubmit={handleSearch}>
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
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
        <Button variant="primary" className="signup-btn">
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
