//This component handles individual comments and their replies.
import React, { useState } from 'react';
import Reply from './Reply';

const Comment = ({ comment, onReply }) => {
  const [replyText, setReplyText] = useState('');
  const [showReplyBox, setShowReplyBox] = useState(false);

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      onReply(comment.id, replyText);
      setReplyText('');
      setShowReplyBox(false);
    }
  };

  return (
    <div>
      <div>
        <p>{comment.text}</p>
        <button onClick={() => setShowReplyBox(!showReplyBox)}>Reply</button>
      </div>
      {showReplyBox && (
        <div>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
          />
          <button onClick={handleReplySubmit}>Post Reply</button>
        </div>
      )}
      <div>
        {comment.replies.map(reply => (
          <Reply key={reply.id} reply={reply} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
