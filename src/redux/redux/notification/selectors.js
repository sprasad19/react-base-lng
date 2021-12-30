import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducers';

/**
 * Direct selector to the home state domain
 */

const selectNotificationDomain = state => state.notification || INITIAL_STATE;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Home
 */

const makeSelectNotification = () =>
  createSelector(
    selectNotificationDomain,
    notification => notification,
  );

export default makeSelectNotification;
export { selectNotificationDomain , makeSelectNotification };
