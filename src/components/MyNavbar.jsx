import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import '../css/MyNavbar.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQueryAction, getSongAction } from '../redux/actions'; 

const MyNavbar = () => {


  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.songs.query);

  const handleSearchChange = (event) => {
    dispatch(setSearchQueryAction(event.target.value)); 
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(getSongAction(searchQuery));
  };

  return (
    <Navbar collapseOnSelect expand="md" bg="black" variant="dark" fixed="start" className="flex-column sidebar">
    <Container className="d-flex flex-column h-100 p-3">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <img src={logo} alt="spotify logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-1 d-flex flex-column">
        <Nav className="flex-column mb-3">
          <Nav.Link className='mb-3 ' as={Link} to="/" >
            <i className="bi bi-house-door-fill icon me-2"></i>
            Home
          </Nav.Link>
          <Nav.Link className='mb-3' as={Link} to="/your-library" >
            <i className="bi bi-book-fill icon me-2"></i>
            Your Library
          </Nav.Link>
          <Form className="d-flex mb-3" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange} 
            />
            <Button variant="outline-light" type="submit">Go</Button>
          </Form>
        </Nav>

        <div className="mt-auto">
          <Nav className="flex-column mb-3">
            <Button variant="outline-light" className="mb-2">Sign Up</Button>
            <Button variant="outline-light">Login</Button>
          </Nav>

          <div className="navbar-footer text-white-50 text-center">
            <p>Cookie Policy | Privacy</p>
          </div>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
};

export default MyNavbar;
