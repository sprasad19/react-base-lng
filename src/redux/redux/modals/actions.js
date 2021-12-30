/*
 *
 * Modals actions
 *
 */

import { CLOSE_MODAL, CLOSE_MODAL_BOOL, OPEN_MODAL,  } from "./constants";

export function openModalAction(payload) {
  return {
    type: OPEN_MODAL,
    payload,
  };
}
export function closeModalAction() {
  return {
    type: CLOSE_MODAL,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * 
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function closeModalBoolAction() {
  return {
    type: CLOSE_MODAL_BOOL
  };
}
