import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/enums';
import { RoutePropsWithChildren } from '../../types/props';

function PrivateRoute(props: RoutePropsWithChildren) {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.SignIn} />;
}

export default PrivateRoute;
