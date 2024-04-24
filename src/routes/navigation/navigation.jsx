import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import CartIcon from '../../components/cart-icon/cart-icon.component';

// import { selectCurrentUser } from '../../store/user/user.selector';

import { ReactComponent as GameLogo } from '../../assets/profile.svg';
// import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.scss';

const Navigation = () => {
  // const currentUser = useSelector(selectCurrentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-home" to="/">
          HOME
        </Link>
        <Link className="nav-name">GAMESCORE</Link>
        <Link className="nav-profile" to="/profile">
          <GameLogo className="logo" />
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
