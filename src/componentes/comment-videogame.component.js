import React, { useState } from 'react';
import Comment from './Comment';

function CommentBox() {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { author, text };
    setComments([...comments, newComment]);
    setAuthor('');
    setText('');
  };

  return (
    <div>
      <h2>Comentarios</h2>
      {comments.map((comment, index) => (
        <Comment key={index} author={comment.author} text={comment.text} />
      ))}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author-input">Nombre:</label>
          <input id="author-input" type="text" value={author} onChange={handleAuthorChange} />
        </div>
        <div>
          <label htmlFor="text-input">Comentario:</label>
          <textarea id="text-input" value={text} onChange={handleTextChange} />
        </div>
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
}
