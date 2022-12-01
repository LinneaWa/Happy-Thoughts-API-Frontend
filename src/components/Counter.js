import React from 'react';

export const Counter = ({ newMessage }) => {
  return <p className="counter"> {140 - newMessage.length}/140 </p>
};
