import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the modals state domain
 */

const selectModalsDomain = state => state.modals || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Modals
 */

const makeSelectModals = () =>
  createSelector(
    selectModalsDomain,
    modals => modals,
  );
const makeSelectModal = () =>
  createSelector(
    selectModalsDomain,
    modals => modals.modal,
  );
const makeSelectOpenModal = () =>
  createSelector(
    selectModalsDomain,
    modals => modals.openModal,
  );

export default makeSelectModals;
export { selectModalsDomain, makeSelectModals, makeSelectModal , makeSelectOpenModal};
