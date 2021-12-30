import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import globalReducer from "./redux/global/reducers";
import deviceReducer from "./redux/device/reducers";
import notificationReducer from "./redux/notification/reducers";
import modalsReducer from "./redux/modals/reducer";




const persistConfig = {
  key: "root",
  storage,
  whitelist: ["global"],
};

const reducers = combineReducers({
  device: deviceReducer,
  global: globalReducer,
  notification:notificationReducer,
  modals:modalsReducer,
});

export default persistReducer(persistConfig, reducers);
