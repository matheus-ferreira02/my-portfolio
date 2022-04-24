import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { MdPerson, MdOutlineEmail } from 'react-icons/md';
import { FiAlertCircle } from 'react-icons/fi';
import { BsDownload } from "react-icons/bs";
import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';
import './style.css';
import i18n from '../../translate/i18n';
import IconsContact from '../IconsContact/IconsContact';

function Contacts() {
  const form = useRef();
  const [modal, setModal] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [statusModal, setStatusModal] = useState(true);
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(false);
  const emptyModal = useRef();
  const refTextarea = useRef();
  const [textarea, setTextarea] = useState('');
  const [name, setName] = useState('');


  const showModal = () => {
    setModal(!modal);
    document.body.classList.toggle('show-modal');
  }

  const submitEmail = () => {
    const { REACT_APP_USER_ID } = process.env;

    setLoadingModal(true);
    showModal();

    emailjs.sendForm('gmail', 'email_portifolio', form.current, REACT_APP_USER_ID)
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

  const verifyInputs = (event) => {
    event.preventDefault();

    if(!name) setInvalidName(true);
    if(!email) setInvalidEmail(true)
    if(!textarea) setInvalidMessage(true);

    if (name && email && textarea) submitEmail();
  }

  const focusOut = () => {
    if (!email) setInvalidEmail(false);
    else setInvalidEmail(validateEmail());
  }

  useEffect(() => {
    if (!email) setInvalidEmail(false);
    if (!validateEmail()) setInvalidEmail(validateEmail());
  }, [email]);

  useEffect(() => {
    if (name) setInvalidName(false);
  }, [name]);

  useEffect(() => {
    if (textarea) setInvalidMessage(false);
  }, [textarea]);

  const verifyLengthTextarea = ({ target }) => {
    setTextarea(target.value);
    if(target.value) refTextarea.current.id = 'textareaWithValue';
    else refTextarea.current.id = '';
  }

  return (
    <section className="contacts-container">
      <h1 id="contacts" className="title-container">
          { i18n.t('contacts.title') }
      </h1>
      { modal && (
        <section onTransitionEnd={ showModal } ref={ emptyModal } className="modal-container">
          { loadingModal
            ? (
              <Loading />
            )
            : <Modal
                containerModal={ emptyModal }
                statusModal={ statusModal }
              />
            }
        </section>
      ) }
      <section className="contacts-content">
      <form ref={ form } className="form-contact" onSubmit={ verifyInputs }>
        <div className="input-label">
          <div className="icon">
            <MdPerson />
          </div>
          
          <input
            maxLength="40"
            type="text"
            value={ name }
            name="name"
            placeholder={ i18n.t('contacts.placeholderName') }
            onChange={ ({ target }) => setName(target.value) }
          />

            <span
              className={ invalidName ? 'fade-in invalid-icon' : 'fade-out invalid-icon' }
            >
              <FiAlertCircle />
            </span>
            <span
              className={ invalidName ? 'fade-in invalid-value' : 'fade-out invalid-value' }
            >
              { i18n.t('contacts.errorName') }
            </span>
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
              className={ invalidEmail ? 'fade-in invalid-value' : 'fade-out invalid-value' }
            >
              { i18n.t('contacts.errorEmail') }
            </span>
        </div>

        <div className="textarea-label">
          <span className="placeholder" ref={ refTextarea }>{ i18n.t('contacts.placeholderMessage') }</span>
          <textarea
            name="message"
            maxLength="280"
            value={ textarea }
            onChange={ verifyLengthTextarea }
          />

            <span
              className={ invalidMessage ? 'fade-in invalid-icon invalid-textarea-icon' : 'fade-out invalid-icon invalid-textarea-icon' }
            >
              <FiAlertCircle />
            </span>
            <span
              className={ invalidMessage ? 'fade-in invalid-value invalid-textarea' : 'fade-out invalid-value invalid-textarea' }
            >
              { i18n.t('contacts.errorMessage') }
            </span>
        </div>

        <button className="btn-submit" type="submit">
          { i18n.t('contacts.buttonSubmit') }
        </button>
      </form>

      <div className="division" />

      <IconsContact />
    </section>
      <section className="curriculum">
        <a href="../../curriculo.pdf" download>
          <span><BsDownload /></span>
          <p>{ i18n.t('contacts.download') }</p>
        </a>
      </section>      
    </section>
  );
}

export default Contacts;
