
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState, AppDispatch, AppStore } from '../store';

// Custom hooks with proper typings
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T): T => useSelector(selector);
export const useAppStore = () => useStore<AppStore>();
