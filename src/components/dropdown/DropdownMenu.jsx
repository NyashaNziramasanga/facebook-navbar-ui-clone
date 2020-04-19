import React from 'react';
import DropdownItem from './DropdownItem';

import { ReactComponent as CogIcon } from '../../assets/icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../assets/icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../assets/icons/bolt.svg';

function DropdownMenu() {
  return (
    <div className="dropdown">
      <div className="menu">
        <DropdownItem>My Profile</DropdownItem>
        <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
          Settings
        </DropdownItem>
      </div>
    </div>
  );
}

export default DropdownMenu;
