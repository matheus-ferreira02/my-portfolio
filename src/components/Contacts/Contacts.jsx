import React, { useRef, useState } from 'react';
/* import emailjs from 'emailjs-com'; */
import './style.css';

function Contacts() {
  const form = useRef();
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
    document.body.classList.toggle('show-modal');
  }

  const submitEmail = (event) => {
    event.preventDefault();
   /*  const { REACT_APP_SERVICE_NAME, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } = process.env; */

  /*  emailjs.sendForm(REACT_APP_SERVICE_NAME, REACT_APP_TEMPLATE_ID, form.current, REACT_APP_USER_ID)
      .then(() => {
        setModal(true);
      }); */

    showModal();    
  }

  return (
    <section id="contacts" className="contacts-container">
      { modal && (
        <section className="modal-container">
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            type="button"
            className="empty-modal"
            onClick={ showModal }
          />
          <section className="message-modal">
            <p>Mensagem enviada com sucesso!</p>
            <button
              type="button"
              onClick={ showModal }
            >
              Ok
            </button>
          </section>
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
