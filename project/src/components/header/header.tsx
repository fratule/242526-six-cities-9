import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/enums';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus
}

function Header({ authorizationStatus }: HeaderProps) {
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const userEmail = 'Oliver.conner@gmail.com';

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link"
              to={AppRoute.Root}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={AppRoute.Favorites}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper" />

                  {isUserAuthorized
                    ? <span className="header__user-name user__name">{userEmail}</span>
                    : <span className="header__login">Sign in</span>}
                </Link>
              </li>

              {isUserAuthorized &&
                <li className="header__nav-item">
                  <a
                    className="header__nav-link"
                    href="#sign-out"
                  >
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
