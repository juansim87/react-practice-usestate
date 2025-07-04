import { useState } from 'react';
import "./LikeButton.css";

export const LikeButton = () => {

const [ likeCount, setLikeCount] = useState(0);

const handleLike = () => {
    setLikeCount(likeCount + 1)
};


  return (
    <div>
    <h2>Botón de Like Dinámico</h2>
    <button onClick={handleLike}>Likes: {likeCount}</button>
      
    </div>
  )
}
