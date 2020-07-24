import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, idx) => (
        <Card key={idx} name={robot.name} email={robot.email} id={robot.id} />
      ))}
    </div>
  );
};

export default CardList;
