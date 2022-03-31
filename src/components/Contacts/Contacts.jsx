import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
/* import i18n from '../../translate/i18n'; */
import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';
import './style.css';

function Contacts() {
  const form = useRef();
  const [modal, setModal] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [statusModal, setStatusModal] = useState(true);

  const showModal = () => {
    setModal(!modal);
    document.body.classList.toggle('show-modal');
  }

  const submitEmail = (event) => {
    event.preventDefault();
    const { REACT_APP_SERVICE_NAME, REACT_APP_TEMPLATE_ID, /* REACT_APP_USER_ID */ } = process.env;

    setLoadingModal(true);
    showModal();

    emailjs.sendForm(REACT_APP_SERVICE_NAME, REACT_APP_TEMPLATE_ID, form.current, 'dsada')
      .then(() => {
        setLoadingModal(false);
        setStatusModal(true);
      }, () => {
        setLoadingModal(false);
        setStatusModal(false);
      });
  }

  return (
    <section id="contacts" className="contacts-container">
      { modal && (
        <section className="modal-container">
          { loadingModal
            ? (
              <Loading />
            )
            : <Modal
                showModal={ showModal }
                statusModal={ statusModal }
              />
            }
        </section>
      ) }

      <form ref={ form } className="form-contact" onSubmit={ submitEmail }>
        <label htmlFor="name-input">
          Name
          <input type="text" name="name" id="name-input"/>
        </label>
        
        <label htmlFor="email-input">
          Email
          <input type="email"name="email" id="email-input"/>
        </label>

        <label htmlFor="textarea">
          Mensagem
          <textarea name="message" id="textarea" />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacts;
