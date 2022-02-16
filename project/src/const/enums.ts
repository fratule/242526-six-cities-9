export enum AppRoute {
  Root = '/',
  Offer = '/offer/:id',
  SignIn = '/login',
  Favorites = 'favorites',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
