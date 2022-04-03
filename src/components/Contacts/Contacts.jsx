import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { MdPerson, MdOutlineEmail } from 'react-icons/md';
import { FiAlertCircle } from 'react-icons/fi';
/* import i18n from '../../translate/i18n'; */
import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';
import './style.css';

function Contacts() {
  const form = useRef();
  const [modal, setModal] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [statusModal, setStatusModal] = useState(true);
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const refEmail = useRef();

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

  const validateEmail = () => {
    const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const validationEmail = regexEmail.test(email);
    return !validationEmail;
  }

  const focusOut = () => {
    setInvalidEmail(validateEmail());
  }

  useEffect(() => {
    if (!email) setInvalidEmail(false);
    if (!validateEmail()) setInvalidEmail(validateEmail());
  }, [email]);

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
        
        <div className="input-label" style={{ marginBottom:"15px" }}>
          <div className="icon">
            <MdOutlineEmail />
          </div>

          <input
            type="email"
            name="email"
            onBlur={ focusOut }
            maxLength="60"
            ref={ refEmail }
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
            placeholder="E-mail"
            />
          
            <span
              className={ invalidEmail ? 'fade-in invalid-icon' : 'fade-out invalid-icon' }
            >
              <FiAlertCircle />
            </span>
            <span
              className={ invalidEmail ? 'fade-in invalid-email' : 'fade-out invalid-email' }
            >
              Insira um e-mail válido
            </span>
        </div>

        <div className="textarea-label">
          <span>Mensagem</span>
          <textarea
            name="message"
            maxLength="280"
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacts;
