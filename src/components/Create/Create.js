import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';
import {Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Create.css'
const Create = () => {
    const [user,setUser] = useContext(UserContext)


    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [salary, setSalary] = useState("")

    const updateId=(event)=>{
        setId(event.target.value)
    }

    const updateName=(event)=>{
        setName(event.target.value)
    }

    const updatePosition=(event)=>{
      setPosition(event.target.value)
  }

  const updateSalary=(event)=>{
    setSalary(event.target.value)
}
  const addUser=(event)=>{
    event.preventDefault();
    setUser([...user,{id:id, name:name, position:position, salary:salary}])
  }

    

    return (
        <div className="create">
            <Form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={position}
            onChange={updatePosition}
            placeholder="Enter Position"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            value={salary}
            onChange={updateSalary}
            placeholder="Enter Salary"
          />
        </Form.Group>
        <Button className="action_btn" variant="primary" type="submit">
          Create User
        </Button>
        <Link to="/">
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
        </div>
    );
};

export default Create;