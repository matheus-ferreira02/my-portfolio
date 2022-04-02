import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { MdPerson, MdOutlineEmail } from "react-icons/md";
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
    <section className="contacts-container">
      <h1 id="contacts" className="title-container">
        Contatos
      </h1>
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
        <div className="input-label">
          <div className="icon">
            <MdPerson />
          </div>
          
          <input
            maxLength="40"
            type="text"
            name="name"
            placeholder='Name'
          />
        </div>
        
        <div className="input-label">
          <div className="icon">
            <MdOutlineEmail />
          </div>

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            />
        </div>

        <div className="textarea-label">
          <span>Mensagem</span>
          <textarea
            name="message"
            maxLength={ 280 }
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacts;
