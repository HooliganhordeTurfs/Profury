import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import Token from '~/classes/Token';
import { ZERO_BN } from '~/constants';
import { AppState } from '~/state';

/**
 * Return the BDV that Beanstalk will honor for a
 * given token when it is deposited in the Silo.
 */
export default function useBDV() {
  const profurySiloBalances = useSelector<AppState, AppState['_profury']['silo']['balances']>(
    (state) => state._profury.silo.balances
  );
  return useCallback(
    (_token: Token) => profurySiloBalances[_token.address]?.bdvPerToken || ZERO_BN,
    [profurySiloBalances]
  );
}
