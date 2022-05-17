import React, { useContext } from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { UserContext } from '../App';

const Lobby = ({ joinRoom }) => {
    const {loggeduser,setloggeduser} = useContext(UserContext)
    const [user, setUser] = useState();
    const [room, setRoom] = useState();

    return <Form className='lobby'
        onSubmit={e => {
            e.preventDefault();
            setloggeduser(user);
            joinRoom(user, room);
        }} >
        <Form.Group>
            <Form.Control placeholder="name" onChange={e => setUser(e.target.value)} />
            <Form.Control placeholder="room" onChange={e => setRoom(e.target.value)} />
        </Form.Group>
        <Button variant="success" type="submit" disabled={!user || !room}>Join</Button>
    </Form>
}

export default Lobby;