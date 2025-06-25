//This component handles the main comment box where users can add new comments.
import React, { useState } from 'react';
import Comment from './Comment';

const CommentBox = () => {
  const [comments, setComments] = useState([]);  //comments holds the array of all comments, and setComments updates this list.
  const [newComment, setNewComment] = useState('');  //newComment manages the text input for new comments, and setNewComment updates this input value.

  const handlePostComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, text: newComment, replies: [] }]); //the spread operator is used to create a new array that includes all the existing comments along with a new comment.
      setNewComment('');
    }
  };

  const handleReply = (commentId, replyText) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, { id: comment.replies.length + 1, text: replyText }]
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div>
      <div>
        <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={handlePostComment}>Post Comment</button>
      </div>
      <div>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} onReply={handleReply} />
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
