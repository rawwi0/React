import RBNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import PrimaryButton from "../PrimaryButton";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <RBNavbar
      bg="dark"
      variant="dark"
      expand="md"          
      className="mb-3"
    >
      <Container fluid>
        {/* BRAND */}
        <RBNavbar.Brand href="#" className="fw-bold fs-3">
          MyBlog
        </RBNavbar.Brand>

        {/* TOGGLE (visible only < md) */}
        <RBNavbar.Toggle aria-controls="offcanvasNavbar-md" />

        {/* OFFCANVAS (RIGHT SIDE) */}
        <RBNavbar.Offcanvas
          id="offcanvasNavbar-md"
          placement="end"    // RIGHT side
          aria-labelledby="offcanvasNavbarLabel-md"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-md">
              MyBlog
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            {/* NAV LINKS */}
            <Nav className="ms-auto align-items-md-center gap-md-3">
                   <Nav.Link as={Link} to="/">Home</Nav.Link>
                   <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                   <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                   <Nav.Link as={Link} to="/about">About</Nav.Link>
                   <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>


            {/* LOGIN BUTTON */}
            <PrimaryButton className="fw-bold ms-md-3 mt-3 mt-md-0">
              Login
            </PrimaryButton>
          </Offcanvas.Body>
        </RBNavbar.Offcanvas>
      </Container>
    </RBNavbar>
  );
}

export default Navbar;
