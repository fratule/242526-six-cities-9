import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/enums';
import { RoutePropsWithChildren } from '../../types/props';

function SignInRoute(props: RoutePropsWithChildren) {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth
    ? <Navigate to={AppRoute.Root} />
    : children;
}

export default SignInRoute;
