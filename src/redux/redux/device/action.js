import {
  SET_ADD_STAFF_SIDEBAR_HIDE,
  SET_ADD_STAFF_VISIBLE,
  SET_DEVICE_DETAILS,
  SET_MY_AC_SIDEBAR_HIDE,
  SET_MY_AC_SIDE_BAR_VISIBLE,
  SET_SET_VISIBLE,
  SET_SIDEBAR_HIDE,
} from "./constants";

// Device Width and Height
export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const isMobile = width < 786;
  return {
    width,
    height,
    isMobile,
  };
};
export const setDeviceHeightWidth = () => ({
  type: SET_DEVICE_DETAILS,
  payload: getWindowDimensions(),
});

export const setSideBarVisible = () => ({
  type: SET_SET_VISIBLE,
});

export const setSideBarHide = () => ({
  type: SET_SIDEBAR_HIDE,
});


export const setMyAccountVisible  = () => ({
  type: SET_MY_AC_SIDE_BAR_VISIBLE,
});

export const setMyAccountHide  = () => ({
  type: SET_MY_AC_SIDEBAR_HIDE,
});


export const setAddStaffVisible = () => ({
  type: SET_ADD_STAFF_VISIBLE,
});

export const setAddStaffHide = () => ({
  type: SET_ADD_STAFF_SIDEBAR_HIDE,
});
