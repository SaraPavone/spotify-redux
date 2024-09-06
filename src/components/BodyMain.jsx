import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { addToFavoritesAction, removeFromFavoritesAction } from '../redux/actions'; 
import '../css/AppMain.css'; 

const BodyMain = () => {
  const dispatch = useDispatch();
  const { search: songs } = useSelector((state) => state.songs); 
  const { content: favorites } = useSelector((state) => state.favorites); 

  
  const handleFavorite = (song) => {
    if (favorites.some((fav) => fav.id === song.id)) {
      dispatch(removeFromFavoritesAction(song.id));
    } else {
      dispatch(addToFavoritesAction(song));
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        {songs.map((song) => (
          <Col md={4} lg={3} sm={6} xs={12} key={song.id} className="mb-4">
            <Card className="h-100 song-card">
              <Card.Img variant="top" src={song.album.cover_medium} alt={song.title} className="card-img-top" />
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{song.artist.name}</Card.Subtitle>
                <Card.Text>{song.album.title}</Card.Text>
                <Button
                  variant="link"
                  className="text-dark"
                  onClick={() => handleFavorite(song)}
                >
                  {favorites.some((fav) => fav.id === song.id) ? (
                    <i className="bi bi-heart-fill text-danger"></i> 
                  ) : (
                    <i className="bi bi-heart text-dark"></i> 
                  )}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BodyMain;