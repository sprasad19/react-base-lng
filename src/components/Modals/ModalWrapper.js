import { Dialog, DialogTitle } from "@material-ui/core";
import React, { memo } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { closeModalAction, closeModalBoolAction } from "../../redux/redux/modals/actions";
import { makeSelectOpenModal } from "../../redux/redux/modals/selectors";
import { TransitionUp } from "./Transition";

const ModalWrapper = ({
  children,
  size,
  esc,
  dimmer,
  scrolling = false,
  header,
  closeIcon,
  dispatch,
  open,
  ...props
}) => {
  const onClose = async () => {
    dispatch(closeModalBoolAction());
    await setTimeout(async () => {
      if (props.closeModal) return await props.closeModal();
      return await dispatch(closeModalAction());
    }, 500);
  };
  return (
    <Dialog
      onClose={onClose}
      open={open}
      id="modal_modal"
      TransitionComponent={TransitionUp}
      transitionDuration={400}
      aria-describedby="alert-dialog-slide-description"
    >
      {header && <DialogTitle>{header}</DialogTitle>}
      {children}
    </Dialog>
  );
};

const mapStateToProps = createStructuredSelector({
  open:makeSelectOpenModal()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ModalWrapper);
