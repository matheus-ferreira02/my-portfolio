import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import i18n from '../../translate/i18n';
import './style.css';

function Modal({ containerModal, statusModal }) {
  const modal = useRef();
  const emptyModal = useRef();

  const teste = () => {
    modal.current.classList.add('fade-out-modal');
    containerModal.current.classList.add('fade-out-background');
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        className="empty-modal"
        ref={ emptyModal }
        onClick={ teste } 
      />
      <section ref={ modal } className={ statusModal
        ? "message-modal success"
        : "message-modal error" }>
        { statusModal ? <AiOutlineCheckCircle/> : <AiOutlineCloseCircle /> }
        <p>{ statusModal
          ? i18n.t('messages.successfullyEmail')
          : i18n.t('messages.errorEmail')
        }</p>
        <button
          type="button"
          onClick={ teste }
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
