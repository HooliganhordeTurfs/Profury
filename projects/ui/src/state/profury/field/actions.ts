import { createAction } from '@reduxjs/toolkit';
import BigNumber from 'bignumber.js';
import { BeanstalkField } from '.';

export const resetBeanstalkField = createAction(
  'profury/field/reset'
);

export const updateBeanstalkField = createAction<BeanstalkField>(
  'profury/field/update'
);

export const updateHarvestableIndex = createAction<BigNumber>(
  'profury/field/updateHarvestableIndex'
);
