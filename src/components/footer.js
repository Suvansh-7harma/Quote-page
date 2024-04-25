import React from 'react';
import "../styles/footer.css";
import logoFooter from "../Assets/logoipsum-237.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logoFooter} />
      </div>
      <div className="para-footer">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
      </div>
      <div className="tabs-footer">
          <span>About</span>
          <span>Careers</span>
          <span>History</span>
          <span>Service</span>
          <span>Projects</span>
          <span>Blog</span>
      </div>
    </div>
  );
}

export default Footer;