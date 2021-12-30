import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducers";

const selectGlobalDomain = (state) => state.device || INITIAL_STATE;

const makeSelectDeviceDimension = () => createSelector(selectGlobalDomain, (device) => device.windowDimension);
const makeSelectSideBar = () => createSelector(selectGlobalDomain, (device) => device.openSideBar);
const makeSelectDevice= () => createSelector(selectGlobalDomain, (device) => device);
export { makeSelectSideBar, makeSelectDeviceDimension , makeSelectDevice};
