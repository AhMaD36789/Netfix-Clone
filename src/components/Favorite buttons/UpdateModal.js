import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function UpdateModal (props){
    const updateMovie = async(e) =>{
        e.preventDefault();
        const obj={
         title : e.target.title.value,
         release_date : e.target.release_date.value,
         poster_path : e.target.poster_path.value,
         overview : e.target.overview.value,
         comments : e.target.comments.value,
    }
    const serverURL = `http://localhost:3001/Update/${props.clickedMovie.id}`
    const result =await axios.put(serverURL,obj)
    props.closeUpdateModal();
    props.takeNewDataFromUpdatedModal(result.data);
}
    return(
        <>
        <Modal show={props.updateFlag} onHide={props.closeUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Make your changes here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateMovie}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>title</Form.Label>
              <Form.Control
                 name='title' 
                type="title"
                placeholder="Movie Title"
                autoFocus
                defaultValue={props.clickedMovie.title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>release date</Form.Label>
              <Form.Control  name='release_date' type="text" as="input" rows={1} defaultValue={props.clickedMovie.release_date}/>

            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>poster path</Form.Label>
              <Form.Control  name='poster_path' type="text" as="input" rows={1} defaultValue={props.clickedMovie.poster_path}/>

            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>overview</Form.Label>
              <Form.Control as="textarea" name='overview'  rows={3} defaultValue={props.clickedMovie.overview}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>comments</Form.Label>
              <Form.Control as="textarea" name='comments'  rows={3} defaultValue={props.clickedMovie.comments}/>
            </Form.Group>
            <Button type='submit' >Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeUpdateModal}>
            Close
          </Button>
          <Button variant="primary" onClick={props.closeUpdateModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )

}
export default UpdateModal;