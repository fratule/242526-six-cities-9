import { RATING_MULTIPLIER } from '../const/const';

export const getPlaceRatingPercent = (ratingValue: number) =>
  `${Math.round(ratingValue) * RATING_MULTIPLIER}%`;
