import React from 'react';
import SortButtons from '../../components/buttons/button';

import './profile.scss';

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <div className="games-container">
          <div className="sort-container">
            <span className="sort">Sort by:</span>
            <SortButtons />
          </div>
          <h1 className="games-head">Your games: </h1>
          <div className="games-list">
            <span>Game 1</span>
            <span>Game 2</span>
            <span>Game 3</span>
            <span>Game 4</span>
          </div>
        </div>
        <div className="folders-container">
          <div className="sort-container">
            <span className="sort">Sort by:</span>
            <SortButtons />
          </div>
          <h1 className="folders-head">Folders: </h1>
          <div className="folders-list">
            <span>Folder 1</span>
            <span>Folder 2</span>
            <span>Folder 3</span>
            <span>Folder 4</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
