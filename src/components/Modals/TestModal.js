import React from "react";
import ModalWrapper from "./ModalWrapper";

import {
  DialogContentText,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  closeModalAction,
  closeModalBoolAction,
} from "../../redux/redux/modals/actions";
function TestModal(props) {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModalBoolAction());
    setTimeout(() => {
      dispatch(closeModalAction());
    }, 400);
  };
  return (
    <ModalWrapper header="Hi this is gooogle">
      <DialogContent id="alert-dialog-slide-description">
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="error" onClick={handleClose}>
          Disagree
        </Button>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Agree
        </Button>
      </DialogActions>
    </ModalWrapper>
  );
}

export default TestModal;
