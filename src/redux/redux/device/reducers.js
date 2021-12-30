import produce from "immer";
import { getWindowDimensions } from "./action";
import { SET_ADD_STAFF_VISIBLE, SET_DEVICE_DETAILS, SET_MY_AC_SIDEBAR_HIDE, SET_MY_AC_SIDE_BAR_VISIBLE, SET_SET_VISIBLE, SET_SIDEBAR_HIDE } from "./constants";
export const INITIAL_STATE = {
  windowDimension: getWindowDimensions(),
  openSideBar: false,
  myAccountSideBar:false,
  staffSideBar:false
};
const deviceReducer = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_DEVICE_DETAILS:
        draft.windowDimension = action.payload;
        break;
      case SET_SET_VISIBLE:
        draft.openSideBar = !draft.openSideBar;
        break;
      case SET_SIDEBAR_HIDE:
        draft.openSideBar = false;
        break;
      case SET_MY_AC_SIDE_BAR_VISIBLE:
        draft.myAccountSideBar = !draft.myAccountSideBar;
        break;
      case SET_MY_AC_SIDEBAR_HIDE:
        draft.myAccountSideBar = false;
        break;
      case SET_ADD_STAFF_VISIBLE:
        draft.staffSideBar = !draft.staffSideBar;
        break;
      // case SET_ADD_STAFF_VISIBLE:
      //   draft.SET_ADD_STAFF_SIDEBAR_HIDE = false;
      //   break;

      default:
        return draft;
    }
  });
};

export default deviceReducer;
