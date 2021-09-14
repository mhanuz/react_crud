import React from 'react';
import { UserContext } from '../UserContext/UserContext';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Edit.css'
const Edit = () => {
    const [user,setUser] = useContext(UserContext)
    const {id} =useParams();

    const users =user.filter((data)=> data.id==id )
    console.log(users[0])
    const [name, setName] = useState(users[0].name)
    const [position, setPosition] = useState(users[0].position)
    const [salary, setSalary] = useState(users[0].salary)

    const updateName=(event)=>{
        setName(event.target.value)
        const edited_name=name;
        users[0].name=edited_name
    }

    const updatePosition=(event)=>{
      setPosition(event.target.value)
      const edited_position=position;
        users[0].position=edited_position
  }

  const updateSalary=(event)=>{
    setSalary(event.target.value)
    const edited_salary=salary
    users[0].salary=edited_salary
}
  const addUser=(event)=>{
    event.preventDefault();
    setUser([...user])
  }



    return (
        <div className="edit">
            <Form>
        <Form.Group>
          <Form.Label><h1>ID No: {users[0].id}</h1> </Form.Label>
          
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            placeholder={users[0].name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={position}
            onChange={updatePosition}
            placeholder={users[0].position}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            value={salary}
            onChange={updateSalary}
            placeholder={users[0].salary}
          />
        </Form.Group>
        
        <Link to="/">
        <Button onSubmit={()=>addUser} className="action_btn" variant="primary" type="submit">
          Edit
        </Button>
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
        </div>
    );
};

export default Edit;