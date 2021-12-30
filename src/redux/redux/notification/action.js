// import { SET_DEVICE_DETAILS, SET_ERROR, SET_ERROR_MESSAGE, SET_SET_VISIBLE, SET_USER_NAME } from "./constants";

import {  NOTIFICATION_GET, NOTIFICATION_DATA_GET } from "./constants";

// /**
//  * Dispatched when loading the repositories fails
//  *
//  * @param  {string} error The error
//  *
//  * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
//  */
// export function setError(error) {
//     return {
//       type: SET_ERROR,
//       error,
//     };
//   }
//   /**
//    * Dispatched when loading the repositories fails
//    *
//    * @param  {string} error The error
//    *
//    * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
//    */
//   export function setErrorMessage(error) {
//     return {
//       type: SET_ERROR_MESSAGE,
//       error,
//     };
//   }
//   /**
//    * Dispatched when loading the repositories fails
//    *
//    * @param  {string} username The error
//    *
//    * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
//    */
//   export function setUserName(username) {
//     return {
//       type: SET_USER_NAME,
//       username,
//     };
//   }

//   // Device Width and Height
//   export const getWindowDimensions = () => {
//     const { innerWidth: width, innerHeight: height } = window;
//     const isMobile = width < 786;
//     return {
//       width,
//       height,
//       isMobile,
//     };
//   };
//   export const setDeviceHeightWidth = () => ({
//     type: SET_DEVICE_DETAILS,
//     payload: getWindowDimensions(),
//   });

//   // export const setDeviceDetails = deviceDetails => ({
//   //   type: 'SET_DEVICE_DETAILS',
//   //   payload: deviceDetails,
//   // });
//   // Close Device Width and Height
//   export const setSideBarVisible = () => ({
//     type: SET_SET_VISIBLE,
//   });


export const addNotification = (notification) => {
  return {
    type: NOTIFICATION_GET,
    notification,
  };
};
export const addNotificationData = (notificationData) => {
  return {
    type: NOTIFICATION_DATA_GET,
    notificationData,
  };
};

