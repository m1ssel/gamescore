import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar';
import Main from '../../components/main/main';

import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Main />
      <Outlet />
    </div>
  );
};
export default Home;
