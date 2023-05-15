import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Movie (props) {
 const path ="https://image.tmdb.org/t/p/w500";
    return (<>

        <Card style={{ width: '18rem' }} key={props.item.id}>
        <Card.Img variant="top" src={path+props.item.poster_path} />
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>
            {props.item.overview}
          </Card.Text>
          <Button variant="primary" onClick={()=>{}} >Add to Favortie</Button>
        </Card.Body>
      </Card>
    </>)
}
export default Movie;