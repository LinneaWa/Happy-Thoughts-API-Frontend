import React from 'react';

export const SubmitButton = ({ newMessage }) => {
  return newMessage.length < 5 || newMessage.length > 140 ? (
    <button className="formBtnDisabled" type="submit" disabled>💌 Send Happy Thought! 💌</button>
  ) : (
    <button className="formBtn" type="submit">💌 Send Happy Thought! 💌</button>
  );
};
