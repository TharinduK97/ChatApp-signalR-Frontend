import { useEffect, useRef } from 'react';
import { UserContext } from '../App';
import React, { useContext } from 'react';

const MessageContainer = ({ messages }) => {
    const messageRef = useRef();
    const {loggeduser,setloggeduser} = useContext(UserContext);

    useEffect(() => {
        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight } = messageRef.current;
            messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: 'smooth' });
        }
    }, [messages]);

    return <div ref={messageRef} className='message-container' >
        
        {messages.map((m, index) =>
        m.user==loggeduser?
            <div key={index} className='user-message'>
              <div className='message bg-success'>{m.message}
            
            </div>
            <p><small><span class="badge badge-info">{m.user}</span></small></p>
               
            </div>:
            <div key={index} className='other-message'>
            <div className='message bg-primary'>{m.message}
            
            </div>
            <p><small><span class="badge badge-warning">{m.user}</span></small></p>
        </div>
        )}
    </div>
}

export default MessageContainer;