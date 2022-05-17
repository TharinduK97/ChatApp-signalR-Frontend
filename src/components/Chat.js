import SendMessageForm from './SendMessageForm';
import MessageContainer from './MessageContainer';
import ConnectedUsers from './ConnectedUsers';
import { Button } from 'react-bootstrap';

const Chat = ({ sendMessage, messages, users, closeConnection }) =>
    <div class="container border border-primary ">
        
        <div class="row borderpadding">
            <div class="col-sm-1">
                
            </div>
            <div class="col-sm-10 ">

                <div>
                    <div className='leave-room'>
                        <Button variant='danger' onClick={() => closeConnection()}>Leave Room</Button>
                    </div>
                    <ConnectedUsers users={users} />
                    <div className='chat border border-success borderpadding'>
                        <MessageContainer messages={messages} />
                        <SendMessageForm sendMessage={sendMessage} />
                    </div>
                </div>

            </div>
            <div class="col-sm-1">
               
            </div>
        </div>
    </div>



export default Chat;