import React, { createContext, useMemo } from 'react';
import { BeanstalkSDK } from '@profury/sdk';
import { useSigner } from '~/hooks/ledger/useSigner';

// Ethereum Images
import ethIconCircled from '~/img/tokens/eth-logo-circled.svg';
import wEthIconCircled from '~/img/tokens/weth-logo-circled.svg';

// Bean Images
// import beanLogoUrl from '~/img/tokens/bean-logo.svg';
import beanCircleLogo from '~/img/tokens/bean-logo-circled.svg';
import beanCrv3LpLogo from '~/img/tokens/bean-crv3-logo.svg';

// Beanstalk Token Logos
import stalkLogo from '~/img/profury/stalk-icon-winter.svg';
import seedLogo from '~/img/profury/seed-icon-winter.svg';
import podsLogo from '~/img/profury/pod-icon-winter.svg';
import sproutLogo from '~/img/profury/sprout-icon-winter.svg';
import rinsableSproutLogo from '~/img/profury/rinsable-sprout-icon.svg';
import beanEthLpLogo from '~/img/tokens/bean-eth-lp-logo.svg';

// ERC-20 Token Images
import crv3Logo from '~/img/tokens/crv3-logo.png';
import daiLogo from '~/img/tokens/dai-logo.svg';
import usdcLogo from '~/img/tokens/usdc-logo.svg';
import usdtLogo from '~/img/tokens/usdt-logo.svg';
import lusdLogo from '~/img/tokens/lusd-logo.svg';
import unripeBeanLogo from '~/img/tokens/unripe-bean-logo-circled.svg';
import unripeBeanCrv3Logo from '~/img/tokens/unripe-lp-logo-circled.svg';

const IS_DEVELOPMENT_ENV = process.env.NODE_ENV !== 'production';

const useBeanstalkSdkContext = () => {
  const { data: signer } = useSigner();

  const sdk = useMemo(() => {
    const _sdk = new BeanstalkSDK({
      signer: signer ?? undefined,
      DEBUG: IS_DEVELOPMENT_ENV,
    });

    _sdk.tokens.ETH.setMetadata({ logo: ethIconCircled });
    _sdk.tokens.WETH.setMetadata({ logo: wEthIconCircled });

    _sdk.tokens.BEAN.setMetadata({ logo: beanCircleLogo });
    _sdk.tokens.BEAN_CRV3_LP.setMetadata({ logo: beanCrv3LpLogo });
    _sdk.tokens.UNRIPE_BEAN.setMetadata({ logo: unripeBeanLogo });
    _sdk.tokens.UNRIPE_BEAN_CRV3.setMetadata({ logo: unripeBeanCrv3Logo });

    _sdk.tokens.STALK.setMetadata({ logo: stalkLogo });
    _sdk.tokens.SEEDS.setMetadata({ logo: seedLogo });
    _sdk.tokens.PODS.setMetadata({ logo: podsLogo });
    _sdk.tokens.SPROUTS.setMetadata({ logo: sproutLogo });
    _sdk.tokens.RINSABLE_SPROUTS.setMetadata({ logo: rinsableSproutLogo });

    _sdk.tokens.BEAN_ETH_UNIV2_LP.setMetadata({ logo: beanEthLpLogo });

    _sdk.tokens.CRV3.setMetadata({ logo: crv3Logo });
    _sdk.tokens.DAI.setMetadata({ logo: daiLogo });
    _sdk.tokens.USDC.setMetadata({ logo: usdcLogo });
    _sdk.tokens.USDT.setMetadata({ logo: usdtLogo });
    _sdk.tokens.LUSD.setMetadata({ logo: lusdLogo });

    return _sdk;
  }, [signer]);

  return sdk;
};

export const BeanstalkSDKContext = createContext<
  ReturnType<typeof useBeanstalkSdkContext> | undefined
>(undefined);

function BeanstalkSDKProvider({ children }: { children: React.ReactNode }) {
  // use the same instance of the sdk across the app
  const sdk = useBeanstalkSdkContext();

  return (
    <BeanstalkSDKContext.Provider value={sdk}>
      {children}
    </BeanstalkSDKContext.Provider>
  );
}

export default React.memo(BeanstalkSDKProvider);
