import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Movie from './Movie';


function MovieList (props) {
    return(
        <>{
       props.item.map(element=>{
        return (<Movie item = {element}/>)
       }) 
    }
        </>
    )
}
export default MovieList;