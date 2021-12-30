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

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {string} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function setError(error) {
  return {
    type: SET_ERROR,
    error,
  };
}
/**
 * Dispatched when loading the repositories fails
 *
 * @param  {string} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function setErrorMessage(error) {
  return {
    type: SET_ERROR_MESSAGE,
    error,
  };
}
/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} userDetails The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function setUserDetails(userDetails) {
  return {
    type: SET_USER_DETAILS,
    userDetails,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {string} message The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function setUserDetailsError(message) {
  return {
    type: SET_USER_DETAILS_ERROR,
    message,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {string} token The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function setAccessToken(token) {
  return { type: SET_ACCESS_TOKEN, token };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {string} username The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function setUserName(username) {
  return { type: SET_USER_NAME, username };
}

/**
 * Dispatched when loading the repositories fails
 *
 *
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function setLogout() {
  return { type: LOGOUT };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {string} lang The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function setLanguage(lang) {
  return { type: SET_LANGUANGE, lang };
}
