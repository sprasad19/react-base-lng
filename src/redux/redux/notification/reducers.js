import produce from "immer";
import {
  NOTIFICATION_DATA_GET,
  NOTIFICATION_GET,
} from "./constants";
export const INITIAL_STATE = {
  notificationData: [],
  notification: "",
};
const notificationReducer = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case NOTIFICATION_DATA_GET:
        draft.notificationData = action.notificationData;
        break;
      case NOTIFICATION_GET:
        draft.notification = action.notification;
        break;
      default:
        return draft;
    }
  });
};

export default notificationReducer;
