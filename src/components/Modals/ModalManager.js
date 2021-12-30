/**
 *
 * Modals
 *
 */

import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import TestModal from "./TestModal";

import  { makeSelectModal } from "../../redux/redux/modals/selectors";
function Modals({ activeModal, ...props }) {
  const modalLookup = {
    TestModal,
  };
  let renderModal;
  if (activeModal) {
    const { modalType, modalProps } = activeModal;
    const ModalComponent = modalLookup[modalType];
    renderModal = <ModalComponent {...modalProps} />;
  }

  return <Fragment>{renderModal ? renderModal: null}</Fragment>;
}

Modals.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  activeModal: makeSelectModal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Modals);
