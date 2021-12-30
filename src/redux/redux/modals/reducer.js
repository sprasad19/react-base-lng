/*
 *
 * Modals reducer
 *
 */
import produce from "immer";
import { CLOSE_MODAL, CLOSE_MODAL_BOOL, OPEN_MODAL,  } from "./constants";

export const initialState = {
  modal: null,
  openModal:false
};

const modalsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case OPEN_MODAL:
        const { modalType, modalProps } = action.payload;
        draft.modal = { modalType, modalProps };
        draft.openModal = true;
        break;
      case CLOSE_MODAL:
        draft.modal = null;
        break;
      case CLOSE_MODAL_BOOL:
        draft.openModal = false;
        break;
      default:
        return draft;
    }
  });

export default modalsReducer;
