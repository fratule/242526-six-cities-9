import { RouteProps } from 'react-router-dom';
import { AuthorizationStatus } from '../const/enums';

export type RoutePropsWithChildren = RouteProps & {
  authorizationStatus: AuthorizationStatus
  children: JSX.Element
}
