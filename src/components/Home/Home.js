import React from 'react';
import { Button,Table } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from './../UserContext/UserContext';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    const [user,setUser] = useContext(UserContext)
    return (
        <div>
            <Link to="/create">
                <Button className="create_btn" variant="primary">Create User</Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((data)=> 
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.position}</td>
                            <td>{data.salary}</td>
                            <td>
                            <Link to={"/read/"+data.id}>
                                <Button className="action_btn" variant="success">Read</Button>
                            </Link>
                            <Link to={"/edit/"+data.id}>
                                <Button className="action_btn" variant="info">Edit</Button>
                            </Link>
                            
                            <Link to={"/delete/"+data.id}>
                                <Button className="action_btn" variant="danger">Delete</Button>
                            </Link>
                            
                            </td>
                        </tr>
                        )
                    }
                    
                </tbody>
            </Table>
  
        </div>
    );
};

export default Home;