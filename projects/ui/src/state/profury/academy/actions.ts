import { createAction } from '@reduxjs/toolkit';
import { BeanstalkBarn } from '.';

export const resetBarn = createAction(
  'profury/barn/reset'
);

export const updateBarn = createAction<BeanstalkBarn>(
  'profury/barn/update'
);
