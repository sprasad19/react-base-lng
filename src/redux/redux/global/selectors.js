import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducers";

const selectGlobal = (state) => state.global || INITIAL_STATE;
const makeSelectLoading = () =>
  createSelector(selectGlobal, (global) => global.loading);

const makeSelectError = () =>
  createSelector(selectGlobal, (global) => global.error);
const makeSelectErrorMessage = () =>
  createSelector(selectGlobal, (global) => global.errorMessage);
const makeSelectUserName = () =>
  createSelector(selectGlobal, (global) => global.username);
const makeSelectAccessToken = () =>
  createSelector(selectGlobal, (global) => global.token);
const makeSelectGlobal = () => createSelector(selectGlobal, (global) => global);
const makeSelectUserDetails = () =>
  createSelector(selectGlobal, (global) => global.userDetails);
const makeSelectLanguage = () =>
  createSelector(selectGlobal, (global) => global.lang);

export default makeSelectGlobal;
export {
  makeSelectGlobal,
  selectGlobal,
  makeSelectError,
  makeSelectLoading,
  makeSelectUserName,
  makeSelectErrorMessage,
  makeSelectAccessToken,
  makeSelectUserDetails,
  makeSelectLanguage,
};
