import { createAction } from '@reduxjs/toolkit';
import BigNumber from 'bignumber.js';
import { Sun } from '.';

export const updateSeason = createAction<BigNumber>(
  'profury/sun/updateSeason'
);

export const updateSeasonTime = createAction<BigNumber>(
  'profury/sun/updateSeasonTime'
);

export const setNextSunrise = createAction<Sun['sunrise']['next']>(
  'profury/sun/setNextSunrise'
);

export const setAwaitingSunrise = createAction<Sun['sunrise']['awaiting']>(
  'profury/sun/setAwaitingSunrise'
);

export const setRemainingUntilSunrise = createAction<Sun['sunrise']['remaining']>(
  'profury/sun/setRemainingUntilSunrise'
);

export const resetSun = createAction(
  'profury/sun/reset'
);
