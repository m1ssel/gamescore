import { ReactComponent as SteamLogo } from '../../assets/steamLogo.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GameItem from '../gameItem/gameItem';
import '../../cors';

import './main.scss';

const Main = () => {
  const [games, setGames] = useState([]);
  const getGames = () => {
    axios.get('http://localhost:3000/steam-api').then((response) => {
      setGames(response.data);
    });
  };
  useEffect(() => {
    getGames();
  }, []);
  const [value, setValue] = useState('');

  const filteredGames = games.filter((game) => {
    return game.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="main">
      <div className="main-input">
        <div className="platform">
          <SteamLogo className="steamLogo" />
        </div>
        <div className="game-search">
          <input
            type="text"
            className="input-game"
            placeholder="Search for games"
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
      </div>
      <div className="recommend-container">
        <h2>Recommended games:</h2>
        <div className="card-container">
          {filteredGames.map((game, index) => {
            return <GameItem game={game} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
