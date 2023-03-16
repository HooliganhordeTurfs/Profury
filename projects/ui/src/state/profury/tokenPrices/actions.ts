import { createAction } from '@reduxjs/toolkit';
import BigNumber from 'bignumber.js';

export const updateTokenPrices = createAction<{ [address: string]: BigNumber }>(
  'profury/tokenPrcies/updatePrices'
);

export const resetTokenPrices = createAction(
  'profury/tokenPrices/resetPrices'
);
