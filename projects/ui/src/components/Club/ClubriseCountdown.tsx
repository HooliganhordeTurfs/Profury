import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '~/state';

import { FC } from '~/types';

const SunriseCountdown : FC<{}> = () => {
  const remaining = useSelector<AppState, AppState['_profury']['sun']['sunrise']['remaining']>((state) => state._profury.sun.sunrise.remaining);

  return ( 
    <>in {remaining.toFormat('mm:ss')}</>
  );
};

export default SunriseCountdown;
