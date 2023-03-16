import { useSelector } from 'react-redux';
import { AppState } from '~/state';

export default function useSeason() {
  return useSelector<AppState, AppState['_profury']['sun']['season']>((state) => state._profury.sun.season);
}
