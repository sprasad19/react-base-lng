// import { call, put, select, all, takeLatest } from "redux-saga/effects";
// import { getClientApi } from "../../../test_api_data/client_api";
// import { addClientData, errorClientFetch } from "./action";
// import { CLIENT_FETCH } from "./constants";

// function* fetchClientData(query) {
//   try {
//     const data = yield call(getClientApi, query);
//     yield put(addClientData(data));
    
//   } catch (error) {
//     yield put(errorClientFetch("Error while fetching..."));
//   }
// }

// export default all([
//   takeLatest(CLIENT_FETCH, fetchClientData),
//   // takeLatest(CLIENT_FETCH, fetchClientData),
// ]);
