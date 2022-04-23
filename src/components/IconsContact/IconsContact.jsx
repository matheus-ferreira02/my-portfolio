import React from 'react';
import PropTypes from 'prop-types';
import { FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineGithub } from 'react-icons/ai';
import './style.css';

function IconsContact() {
  return (
    <section className="contacts">
      <div className="contact">
        <span className="icon-contact">
          <FiInstagram />
        </span>
        <div className="content">
          <h2>Instagram</h2>
          <span className="text-contact">
            <a
              href="https://www.instagram.com/matheus.3359/"
              target="_blank"
              rel="noopener noreferrer"
            >
              matheus.3359
            </a> 
          </span>
        </div>
      </div>

      <div className="contact">
        <span className="icon-contact">
          <FiTwitter />
        </span> 
        <div className="content">
          <h2>Twitter</h2>
          <span className="text-contact">
            <a
              href="https://twitter.com/matheus23803928"
              target="_blank"
              rel="noopener noreferrer"
            >
              @TeusFerreiraDev
            </a>
          </span>
        </div>
        
      </div>
      <div className="contact">
        <span className="icon-contact">
          <FiLinkedin />
        </span> 
        <div className="content">
          <h2>Linkedin</h2>
          <span className="text-contact">
          <a
              href="https://www.linkedin.com/in/matheus-ferreira-araujo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Matheus Ferreira de Araujo
            </a>
          </span>
        </div>
        
      </div>
      <div className="contact">
        <span className="icon-contact">
          <MdOutlineEmail />
        </span> 
        <div className="content">
          <h2>E-mail</h2>
          <span className="text-contact">
          <a
              href="mailto:m.ferreira.araujo2016@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              m.ferreira.araujo2016@gmail.com
            </a>
          </span>
        </div>
        
      </div>
      <div className="contact">
        <span className="icon-contact">
          <AiOutlineGithub />
        </span>
        <div className="content">
          <h2>GitHub</h2>
          <span className="text-contact">
            <a
              href="https://github.com/matheus-ferreira02"
              target="_blank"
              rel="noopener noreferrer"
            >
              matheus-ferreira02
            </a>
          </span>
        </div>
        
      </div>
    </section>
  );
}

IconsContact.propTypes = {
  text: PropTypes.string,
}.isRequired;

export default IconsContact;
