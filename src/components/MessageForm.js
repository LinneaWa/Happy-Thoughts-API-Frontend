import React from 'react';
import { SubmitButton } from './SubmitButton';

const MessageForm = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (
    <form className="messageForm" onSubmit={onFormSubmit}>
      <h3>What is making you happy right now?</h3>
      <textarea className="textArea" value={newMessage} placeholder="Type a minimum of 5 characters." maxLength="140" onChange={onNewMessageChange} />
      <p className="counter"> {140 - newMessage.length}/140 </p>
      <SubmitButton newMessage={newMessage} />
    </form>
  )
}

export default MessageForm;