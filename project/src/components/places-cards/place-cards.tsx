import { Place } from '../../types/place';
import PlaceCard from '../place-card/place-card';

// Temp data
const initialFirstCards: Place[] = [
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/2.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/17.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
    ],
    'title': 'Amazing and Extremely Central Flat',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3,
    'type': 'hotel',
    'bedrooms': 2,
    'maxAdults': 7,
    'price': 194,
    'goods': [
      'Breakfast',
      'Washer',
      'Air conditioning',
      'Baby seat',
      'Laptop friendly workspace',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.3454990000000002,
      'zoom': 16,
    },
    'id': 7,
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/7.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/17.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
    ],
    'title': 'The Pondhouse - A Magical Place',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.1,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 253,
    'goods': [
      'Laptop friendly workspace',
      'Coffee machine',
      'Washer',
      'Washing machine',
      'Baby seat',
      'Dishwasher',
      'Breakfast',
      'Air conditioning',
      'Fridge',
      'Towels',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.364499,
      'zoom': 16,
    },
    'id': 9,
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/5.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/19.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
    ],
    'title': 'Wood and stone place',
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9,
    'type': 'house',
    'bedrooms': 2,
    'maxAdults': 7,
    'price': 518,
    'goods': [
      'Laptop friendly workspace',
      'Breakfast',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 48.862610000000004,
      'longitude': 2.369499,
      'zoom': 16,
    },
    'id': 13,
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/14.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/17.jpg',
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
    ],
    'title': 'Amazing and Extremely Central Flat',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.9,
    'type': 'hotel',
    'bedrooms': 2,
    'maxAdults': 5,
    'price': 123,
    'goods': [
      'Breakfast',
      'Air conditioning',
      'Fridge',
      'Washer',
      'Baby seat',
      'Laptop friendly workspace',
      'Towels',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'location': {
      'latitude': 48.83961,
      'longitude': 2.342499,
      'zoom': 16,
    },
    'id': 25,
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13,
      },
    },
    'previewImage': 'https://9.react.pages.academy/static/hotel/3.jpg',
    'images': [
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/17.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
    ],
    'title': 'Canal View Prinsengracht',
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.9,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 300,
    'goods': [
      'Washer',
      'Breakfast',
      'Air conditioning',
      'Laptop friendly workspace',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16,
    },
    'id': 33,
  },
];

function PlaceCards() {
  return (
    <div className="cities__places-list places__list tabs__content">
      {initialFirstCards.map((placeData: Place) => <PlaceCard {...placeData} key={placeData.id} />)}
    </div>
  );
}

export default PlaceCards;