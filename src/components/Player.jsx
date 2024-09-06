import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ProgressBar, Row, Col } from "react-bootstrap";
import {
  addToFavoritesAction,
  removeFromFavoritesAction,
} from "../redux/actions";
import "../css/Player.css";
import shuffleIcon from "../assets/playerbuttons/shuffle.png";
import prevIcon from "../assets/playerbuttons/prev.png";
import playIcon from "../assets/playerbuttons/play.png";
import nextIcon from "../assets/playerbuttons/next.png";
import repeatIcon from "../assets/playerbuttons/repeat.png";

const Player = () => {
  const dispatch = useDispatch();
  const { search: songs, query } = useSelector((state) => state.songs);
  const { content: favorites } = useSelector((state) => state.favorites);

  const currentSong = songs && songs[0] ? songs[0] : null;
  const handleFavorite = (song) => {
    if (favorites.some((fav) => fav.id === song.id)) {
      dispatch(removeFromFavoritesAction(song.id));
    } else {
      dispatch(addToFavoritesAction(song));
    }
  };

  return (
    <div className="container-fluid fixed-bottom bg-dark text-white pt-2">
      <Row className="w-100 justify-content-center">
        <Col
          xs={12}
          md={10}
          lg={8}
          className="d-flex flex-column align-items-center flex-grow-1"
        >
          {currentSong ? (
            <div className="d-flex flex-column align-items-center w-100 mb-3">
              <img
                src={currentSong.album?.cover_small}
                alt={currentSong.album?.title}
                className="album-cover"
              />
              <h5 className="song-title">{currentSong.title_short}</h5>
              <p className="artist-name">{currentSong.artist?.name}</p>
              <Button
                variant="link"
                className="text-white"
                onClick={() => handleFavorite(currentSong)}
              >
                {favorites.some((fav) => fav.id === currentSong.id) ? (
                  <span className="bi bi-heart-fill icon-heart"></span>
                ) : (
                  <span className="bi bi-heart icon-heart"></span>
                )}
              </Button>
            </div>
          ) : (
            <p>Nessuna canzone selezionata</p>
          )}

          <div className="d-flex justify-content-center w-100 mb-2">
            <Button variant="link" className="text-white">
              <img src={shuffleIcon} alt="shuffle" className="icon" />
            </Button>
            <Button variant="link" className="text-white">
              <img src={prevIcon} alt="prev" className="icon" />
            </Button>
            <Button variant="link" className="text-white">
              <img src={playIcon} alt="play" className="icon" />
            </Button>
            <Button variant="link" className="text-white">
              <img src={nextIcon} alt="next" className="icon" />
            </Button>
            <Button variant="link" className="text-white">
              <img src={repeatIcon} alt="repeat" className="icon" />
            </Button>
          </div>

          <ProgressBar now={60} className="w-50 mb-3 " />
        </Col>
      </Row>
    </div>
  );
};

export default Player;
