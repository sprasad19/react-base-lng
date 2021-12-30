import produce from "immer";
import {
  SET_ERROR,
  SET_ERROR_MESSAGE,
  SET_USER_NAME,
  SET_ACCESS_TOKEN,
  SET_USER_DETAILS,
  SET_USER_DETAILS_ERROR,
  LOGOUT,
  SET_LANGUANGE,
} from "./constants";
export const INITIAL_STATE = {
  loading: false,
  error: false,
  errorMessage: "404",
  username: "",
  openSideBar: false,
  token: "",
  userDetails: null,
  message: "",
  lang: "en",
};
const globalReducer = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_ERROR:
        draft.error = action.error;
        break;
      case SET_ERROR_MESSAGE:
        draft.errorMessage = action.error;
        break;
      case SET_USER_NAME:
        draft.username = action.username;
        break;
      case SET_USER_DETAILS:
        draft.username =
          action.userDetails.uname || action.userDetails.employee_name || "";
        draft.userDetails = action.userDetails;
        break;
      case SET_USER_DETAILS_ERROR:
        draft.userDetails = action.userDetails;
        break;
      case SET_ACCESS_TOKEN:
        draft.token = action.token;
        break;
      case LOGOUT:
        draft.token = "";
        draft.username = "";
        draft.userDetails = null;
        break;

      case SET_LANGUANGE:
        draft.lang = action.lang;
        break;

      default:
        return draft;
    }
  });
};

export default globalReducer;
