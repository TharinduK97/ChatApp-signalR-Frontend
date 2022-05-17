import React, { useContext } from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { UserContext } from '../App';

const Lobby = ({ joinRoom }) => {
    const { loggeduser, setloggeduser,roomName, setRoomName } = useContext(UserContext)
    
    const [user, setUser] = useState();
    const [room, setRoom] = useState();

    return (
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    
                </div>
                <div class="col-sm border border-primary bgcol">
                    <h2>MyChat</h2>
                    <hr className='line' />
                    < Form className="lobby "
                        onSubmit={e => {
                            e.preventDefault();
                            setloggeduser(user);
                            setRoomName(room);
                            joinRoom(user, room);
                        }} >
                        <div class="form-group">

                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" onChange={e => setUser(e.target.value)} />

                        </div>
                        <div class="form-group">

                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Room" onChange={e => setRoom(e.target.value)} />

                        </div>

                        <Button variant="success" type="submit" disabled={!user || !room}>Join</Button>
                    </Form >

                </div>
                <div class="col-sm">
                    
                </div>
            </div>
        </div>

    )
}

export default Lobby;