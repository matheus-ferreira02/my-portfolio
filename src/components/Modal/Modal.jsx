import React from 'react';
import PropTypes from 'prop-types';
import i18n from '../../translate/i18n';
import './style.css';

function Modal({ showModal, statusModal }) {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        className="empty-modal"
        onClick={ showModal } 
      />
      <section className="message-modal">
        <p>{ statusModal
          ? i18n.t('messages.successfullyEmail')
          : i18n.t('messages.errorEmail')
        }</p>
        <button
          type="button"
          onClick={ showModal }
        >
          Ok
        </button>
      </section>
    </>
  );
}

Modal.propTypes = {
  showModal: PropTypes.func,
  statusModal: PropTypes.bool,
}.isRequired;

export default Modal;
