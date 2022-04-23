import React from 'react';
import i18n from '../../translate/i18n';
import './style.css';

function Footer() {
  return (
    <section className="footer-container">
      <p>
        { i18n.t('footer.copyright') } - Matheus Ferreira 2022 &#169;
      </p>

      <p>
        { i18n.t('footer.dev') }
      </p>

      
    </section>
  );
}

export default Footer;
