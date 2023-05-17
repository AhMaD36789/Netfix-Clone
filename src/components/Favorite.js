import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateModal from "./Favorite buttons/UpdateModal";

function Favorite() {
  const [movieData, setMovieData] = useState([]);
  const [clickedMovie, setClickedMovie] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const [newArr,setNewArr] = useState([])
  const path = `https://image.tmdb.org/t/p/w500`;
  const getAllMovies = () => {
    const serverURL = "http://localhost:3001/getmovies";

    fetch(serverURL)
      .then(response => {
        response.json().then(data => {
          console.log(data)
          setMovieData(data)

        })
      })
  }
  useEffect(() => {
    getAllMovies()
  }, [])

  const showUpdateModal = (item) => {
    setUpdateFlag(true);
    setClickedMovie(item);
  }

  const closeUpdateModal = () => {
    setUpdateFlag(false)
}

const takeNewDataFromUpdatedModal = (arr)=>{
  setNewArr(arr)
}
useEffect(()=>{
  setNewArr(movieData)
  
},[movieData])
  return (<>{
    movieData.map(element => {
      return (
        <Card style={{ width: '18rem' }} key={element.id}>
          <Card.Img variant="top" src={path + element.poster_path} />
          <Card.Body>
            <Card.Title>{element.title}</Card.Title>
            <Card.Text>{element.release_date}</Card.Text>
            <Card.Text>{element.overview}</Card.Text>
            <Button variant="success" onClick={() => { showUpdateModal(element) }}>Update</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      )
    })
  }
    <UpdateModal 
    updateFlag={updateFlag} 
    closeUpdateModal={closeUpdateModal} 
    clickedMovie={clickedMovie} 
    takeNewDataFromUpdatedModal={takeNewDataFromUpdatedModal}/>
  </>
  )

}
export default Favorite;

