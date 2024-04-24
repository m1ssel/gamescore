import React from 'react';

import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="side-border">
      <div className="sidebar">
        <div className="recent">Recently added:</div>
        <div className="recent-list">
          <span>1. FirstGame</span>
          <span>2. SecondGame</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
