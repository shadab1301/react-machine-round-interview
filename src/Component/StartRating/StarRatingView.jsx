import React, { useState } from 'react'
import { Icon } from "@iconify/react";
const StarRatingView = () => {
  const [rating,setRating]=useState(0)
  const limit=5;



  const handleOnclick=(value)=>{
   setRating(value+1);
  }
  return (
    <>
      <div className="conatiner">
        <h1 className="heading">Star rating {rating}</h1>

        <div
          className="startRating-content"
          style={{ display: "flex", gap: 10 }}
        >
          {[...Array(limit)].map((val, i) => (
            <>
              {i < rating ? (
                <Icon
                  icon="bi:star-fill"
                  onClick={() => handleOnclick(i)}
                  style={{ cursor: "pointer" }}
                  key={i}
                />
              ) : (
                <>
                  <Icon
                    icon="bi:star"
                    onClick={() => handleOnclick(i)}
                    style={{ cursor: "pointer" }}
                    key={i}
                  />
                </>
              )}
            </>
          ))}
        </div>
        <h6>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleOnclick(-1);
            }}
          >
            Reset
          </button>
        </h6>
      </div>
    </>
  );
};

export default StarRatingView;