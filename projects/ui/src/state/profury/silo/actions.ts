import { createAction } from '@reduxjs/toolkit';
import { BeanstalkSilo } from '.';

export const resetBeanstalkSilo = createAction(
  'profury/silo/reset'
);

export const updateBeanstalkSilo = createAction<BeanstalkSilo>(
  'profury/silo/update'
);
