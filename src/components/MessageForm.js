import React from 'react';
import { SubmitButton } from './SubmitButton';
import { Counter } from './Counter';

const MessageForm = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (
    <form className="messageForm" onSubmit={onFormSubmit}>
      <h3>What is making you happy right now?</h3>
      <textarea className="textArea" value={newMessage} placeholder="Type a minimum of 5 characters." maxLength="140" onChange={onNewMessageChange} />
      <div className="buttonAndCounter">
        <SubmitButton newMessage={newMessage} />
        <Counter newMessage={newMessage} />
      </div>
    </form>
  )
}

export default MessageForm;