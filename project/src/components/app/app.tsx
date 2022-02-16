import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/enums';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import SignIn from '../../pages/sign-in/sign-in';
import Layout from '../layout/layout';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import SignInRoute from '../sign-in-route/sign-in-route';

type AppProps = {
  placesCount: number
}

function App({ placesCount }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout authorizationStatus={AuthorizationStatus.NoAuth} />}
        >
          <Route
            index
            element={<Main placesCount={placesCount} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer />}
          />
          <Route
            path={AppRoute.SignIn}
            element={
              <SignInRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <SignIn />
              </SignInRoute>
            }
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
