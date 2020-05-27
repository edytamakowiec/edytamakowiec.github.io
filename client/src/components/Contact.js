import React, { useRef } from 'react';
import '../styles/Contact.css';

function Contact({ setRef }) {
  const contactRef = useRef();

  React.useEffect(() => {
    setRef(contactRef);
  }, [setRef]);

  return (
    <div className="container" ref={contactRef}>
      <h2 className="sectionHeader">CONTACT</h2>
      <div className="contact">
        <div>
          <i className="icon-mail contactIcon"/>
          <h3 className="contactValue"><a href="mailto:edytamakowiec@gmail.com">edytamakowiec@gmail.com</a></h3>
        </div>
        <div>
          <i className="icon-phone contactIcon"/>
          <h3 className="contactValue"><a href="tel:+48507501862">+48 507 501 862</a></h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;