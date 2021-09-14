import './Delete.css'
import React,{ useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './../UserContext/UserContext';
import { Modal,Button } from 'react-bootstrap';

const Delete = () => {
    const [user,setUser] = useContext(UserContext)
    const {id} =useParams();

    const deletUser=(id)=>{
        const users = user.filter((user)=> user.id != id);
        setUser(users)
    }
    

    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Are you Sure?</Modal.Title>
                </Modal.Header>


                <Modal.Footer>
                    <Link to="/">
                        <Button className="delete_btn" variant="info">
                            Cancel
                        </Button>

                        <Button onClick={()=> deletUser(id)} variant="danger">
                            Delete
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default Delete;