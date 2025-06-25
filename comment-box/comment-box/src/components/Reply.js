//This component displays individual replies.
import React from 'react';

const Reply = ({ reply }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <p>{reply.text}</p>
    </div>
  );
};

export default Reply;
