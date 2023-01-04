import React from 'react';
import './StarRating.css';
import { useEffect, useState } from 'react';

const Star = ({ Id, rating, onMouseEnter, onMouseLeave,onClick }) => {
    let styleClass = undefined;
    if(rating >= Id)
    styleClass = 'active';
    return (
    <span onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick} className={styleClass}>*</span>
    );
};

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverState, setHoverState] = useState(0);
  const arr = [1, 2, 3, 4, 5];

  return (
      <div className='StarRating'>
        {arr.map((star, i) => (
          <Star key={i}
          Id={i}
          rating={hoverState || rating}
          onMouseEnter={() => setHoverState(i)}
          onMouseLeave={() => setHoverState(0)}
          onClick={() => setRating(i)}></Star>
        ))}
      </div>
  );
};

export default StarRating;