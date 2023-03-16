import { useSelector } from 'react-redux';
import { AppState } from '~/state';

const useHarvestableIndex = () => useSelector<AppState, AppState['_profury']['field']['harvestableIndex']>(
  (state) => state._profury.field.harvestableIndex,
);

export default useHarvestableIndex;
