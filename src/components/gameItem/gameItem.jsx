import React from 'react';
import './gameItem.scss';

const GameItem = ({ game, key }) => {
  return (
    <div className="card" key={key}>
      <img src={game} alt={game.JSON()} />
      Card 1
    </div>
  );
};

export default GameItem;
