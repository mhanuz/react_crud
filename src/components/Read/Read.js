import React from 'react';
import './Read.css';
import { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { Link, useParams } from 'react-router-dom';
import { Button} from 'react-bootstrap';
const Read = () => {
    const [read,setRead] = useContext(UserContext)
    const {rid}=useParams();
    const udata=read.filter((data)=> data.id == rid)

    return ( 
        <div className="read">
            <h1>ID:{udata[0].id}</h1>
            <h1>Name:{udata[0].name}</h1>
            <h1>Salary:{udata[0].salary}</h1>
            <h1>Position:{udata[0].position}</h1>
            <Link to="/">
                <Button variant="info">Back to home</Button>
            </Link>
        </div>
    );
};

export default Read;