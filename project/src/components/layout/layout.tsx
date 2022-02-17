import { Outlet, useMatch } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/enums';
import Header from '../header/header';

type LayoutProps = {
  authorizationStatus: AuthorizationStatus
}

function Layout({ authorizationStatus }: LayoutProps) {
  const isRootPage = useMatch(AppRoute.Root);
  const isLoginPage = useMatch(AppRoute.SignIn);

  const getPageClass = (): string => {
    const additionalClass = (isRootPage && '--main') || (isLoginPage && '--login');

    return additionalClass
      ? `page page--gray page${additionalClass}`
      : 'page';
  };

  return (
    <div className={getPageClass()}>
      <Header authorizationStatus={authorizationStatus} />

      <Outlet />
    </div>
  );
}

export default Layout;
