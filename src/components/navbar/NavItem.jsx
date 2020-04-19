import React, { useState } from 'react';

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      {/* Toggle open on and off */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};

export default NavItem;
