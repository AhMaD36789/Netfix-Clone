import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from './ModalMovie'
import axios from 'axios';
import { useState } from 'react';

function Movie(props) {
  const path = `https://image.tmdb.org/t/p/w500`;

  const [showFlag, setShowFlag] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});

  const [cmt, setCmts] = useState('');

  const handleShow = (item) => {
    setShowFlag(true);
    setClickedMovie(item);
  };

  const handleClose = () => {
    setShowFlag(false);
  };

  const addToFav = () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/addmovie`;
    const movieData = {
      ...props.item,
      comments: cmt
    };

    axios.post(serverURL, movieData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      setShowFlag(false);
  };

  return (
    <>
      <Card style={{ width: '18rem' }} key={props.item.id}>
        <Card.Img variant="top" src={path + props.item.poster_path} />
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>{props.item.release_date}</Card.Text>
          <Card.Text>{props.item.overview}</Card.Text>
          <Card.Text><Button variant="primary" onClick={() => handleShow(props.item)}>
            Add to Favorite
          </Button></Card.Text>
        </Card.Body>
      </Card>
      <ModalMovie
        showFlag={showFlag}
        handleClose={handleClose}
        setClickedMovie={clickedMovie}
        addtoFavorite={addToFav}
        setcmt={setCmts}
        cmt={cmt}
      />
    </>
  );
}
export default Movie;