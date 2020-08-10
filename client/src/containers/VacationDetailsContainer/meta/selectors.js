import { initialState } from './reducer';
/**
 * Get VacationDetails
 * @param state
 * @returns {Object}
 */
export const get = state => state.VacationDetails || initialState;
