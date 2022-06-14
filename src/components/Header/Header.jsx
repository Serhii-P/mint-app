import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/"><strong>MintApp</strong></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">На главную</Nav.Link>
            <Nav.Link as={Link} to="/news">Новости</Nav.Link>
            <Nav.Link as={Link} to="/mint">Минт</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};