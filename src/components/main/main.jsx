import { ReactComponent as SteamLogo } from '../../assets/steamLogo.svg';

import './main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="main-input">
        <div className="platform">
          <SteamLogo className="steamLogo" />
        </div>
        <div className="game-search">
          <input type="text" className="input-game" />
        </div>
      </div>
      <div className="recommend-container">
        <h2>Recommended games:</h2>
        <div className="card-container">
          <div className="card">Card 1</div>
          <div className="card">Card 1</div>
          <div className="card">Card 1</div>
          <div className="card">Card 1</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
