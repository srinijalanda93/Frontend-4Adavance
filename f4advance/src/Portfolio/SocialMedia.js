import './styling/media.css'
import React from 'react';
//media -->it is an array wrapper with {}
export const SocialMedia = ({ media }) => {
  return (
    <>
    <div className='media'>
      {media.map((item, index) => (
        <span key={index} className="material-icons" onClick={() => window.open(item.link, "_blank")}>
          {item.iconName}
        </span>
      ))}
      </div>
    </>
  );
};

