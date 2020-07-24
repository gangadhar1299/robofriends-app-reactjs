import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="tc grow bg-washed-red br3 pa3 ma2 dib bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
