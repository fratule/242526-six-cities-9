import LocationTabs from '../../components/location-tabs/location-tabs';
import SortForm from '../../components/sort-form/sort-form';
import PlaceCards from '../../components/places-cards/place-cards';

type MainProps = {
  placesCount: number
}

function Main({ placesCount }: MainProps) {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <LocationTabs />

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesCount} places to stay in Paris</b>

            <SortForm />

            <PlaceCards />
          </section>

          <div className="cities__right-section">
            <section className="cities__map map" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
