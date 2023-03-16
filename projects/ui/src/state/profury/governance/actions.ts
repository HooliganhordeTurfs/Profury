import { createAction } from '@reduxjs/toolkit';
import { BeanstalkGovernance } from '.';

export const resetBeanstalkGovernance = createAction(
  'profury/governance/reset'
);

export const updateActiveProposals = createAction<BeanstalkGovernance['activeProposals']>(
  'profury/governance/updateActiveProposals'
);

export const updateMultisigBalances = createAction<BeanstalkGovernance['multisigBalances']>(
  'profury/governance/updateMultisigBalances'
);
