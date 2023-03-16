import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import throttle from 'lodash/throttle';
import { saveState } from '~/util';

import app from './app/reducer';
import _bean from './bean/reducer';
import _profury from './profury/reducer';
import _farmer from './farmer/reducer';

const store = configureStore({
  reducer: {
    app,
    _bean,
    _profury,
    _farmer,
  },
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }),
  ],
  preloadedState: undefined
});

export const save = () => saveState(store.getState());

store.subscribe(throttle(() => {
  save();
}, 1000));

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
