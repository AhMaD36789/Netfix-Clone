import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateModal from "./Favorite buttons/UpdateModal";
import moment from "moment";
import axios from "axios";

function Favorite(props) {
  const [clickedMovie, setClickedMovie] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const [newArr,setNewArr] = useState([]);
  const path = `https://image.tmdb.org/t/p/w500`;

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

const deleteModal = (item)=>{
  const serverURL=`${process.env.REACT_APP_serverURL}/Delete/${item.id}`
  axios.delete(serverURL)
  .then(data=>{
    takeNewDataFromUpdatedModal(data.data)
  })
  .catch(err=>{
    console.log(err)
    })
}

useEffect(()=>{
  setNewArr(props.favARR)
  
  
},[props.favARR])
  return (<>{
    newArr.map(item => {
      const releaseDate = moment(item.release_date).utc().format('YYYY-MM-DD');
      return (
        <Card style={{ width: '18rem' }} key={item.id}>
          <Card.Img variant="top" src={path + item.poster_path} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{releaseDate}</Card.Text>
            <Card.Text>{item.overview}</Card.Text>
            <Button variant="success" onClick={() => { showUpdateModal(item) }}>Update</Button>
            <Button variant="danger" onClick={()=>{ deleteModal(item)}}>Delete</Button>
          </Card.Body>
        </Card>
      )
    })
  }
    <UpdateModal 
    updateFlag={updateFlag} 
    clickedMovie={clickedMovie} 
    closeUpdateModal={closeUpdateModal} 
    takeNewDataFromUpdatedModal={takeNewDataFromUpdatedModal}/>
  </>
  )

}
export default Favorite;

