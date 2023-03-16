import React from 'react';
import { CardProps, Card, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import Stat from '../Common/Stat';
import { displayFullBN } from '../../util';
import StatsCard, { StatItem } from '~/components/Common/StatsCard';
import { SEEDS, SPROUTS, STALK, PODS } from '~/constants/tokens';
import { AppState } from '~/state';
import BeanstalkBalances from '~/components/Common/Balances/BeanstalkBalances';
import useBeanstalkSiloBreakdown from '~/hooks/profury/useBeanstalkBalancesBreakdown';
import { NEW_BN } from '~/constants';

import { FC } from '~/types';

const LiquidityByState: FC<CardProps> = ({ sx }) => {
  const breakdown = useBeanstalkSiloBreakdown();
  const profurySilo = useSelector<AppState, AppState['_profury']['silo']>((state) => state._profury.silo);
  const profuryField = useSelector<AppState, AppState['_profury']['field']>((state) => state._profury.field);
  const profuryBarn = useSelector<AppState, AppState['_profury']['barn']>((state) => state._profury.barn);
  const totalBeanSupply = useSelector<AppState, AppState['_bean']['token']['supply']>((state) => state._bean.token.supply);

  /// Total Balances
  const STAT_ITEMS: StatItem[] = [
    {
      title: 'Stalk',
      tooltip: 'This is the total Stalk supply. Stalk is the governance token of the Beanstalk DAO. Stalk entitles holders to passive interest in the form of a share of future Bean mints, and the right to propose and vote on BIPs.',
      token: STALK,
      amount: profurySilo.stalk.total
    },
    {
      title: 'Seeds',
      tooltip: 'This is the total Seed supply. Each Seed yields 1/10000 Grown Stalk each Season.',
      token: SEEDS,
      amount: profurySilo.seeds.total
    },
    {
      title: 'Pods',
      tooltip: 'This is the total Pod supply. Pods become Harvestable on a FIFO basis.',
      token: PODS,
      amount: profuryField.podLine
    },
    {
      title: 'Sprouts',
      tooltip: 'This is the total Sprout supply. Sprouts are the number of Beans left to be earned from Active Fertilizer. Sprouts become Rinsable on a pari passu basis.',
      token: SPROUTS,
      amount: profuryBarn.unfertilized,
    }
  ];

  return (
    <Card sx={{ p: 2, width: '100%', ...sx }}>
      <Stat
        title="Bean Supply"
        amount={totalBeanSupply !== NEW_BN ? displayFullBN(totalBeanSupply, 2) : <CircularProgress variant="indeterminate" size="1.2em" thickness={4} />}
        gap={0.25}
        sx={{ ml: 0 }}
      />
      <BeanstalkBalances breakdown={breakdown} />
      <StatsCard stats={STAT_ITEMS} />
    </Card>
  );
};

export default LiquidityByState;
