import { Col, ListGroup, Row, Container } from "react-bootstrap";
import '../css/AppMain.css';
const HeaderMain = () => {
  return (
    <Container className="mt-2 w-75" >
      <Row className="w-100 ">
        <Col sm={12}>
        <ListGroup horizontal className="my-2">
            <ListGroup.Item className="list-item">
              TRENDING
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              PODCAST
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              MOODS AND GENRES
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              NEW RELEASES
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              DISCOVER
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderMain;
