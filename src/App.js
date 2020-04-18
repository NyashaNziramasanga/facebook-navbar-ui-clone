import React from 'react';
import Navbar from './components/navbar/Navbar';
import NavItem from './components/navbar/NavItem';

import { ReactComponent as BellIcon } from './assets/icons/bell.svg';
import { ReactComponent as MessengerIcon } from './assets/icons/messenger.svg';
import { ReactComponent as CaretIcon } from './assets/icons/caret.svg';
import { ReactComponent as PlusIcon } from './assets/icons/plus.svg';
import { ReactComponent as CogIcon } from './assets/icons/cog.svg';
import { ReactComponent as ChevronIcon } from './assets/icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './assets/icons/arrow.svg';
import { ReactComponent as BoltIcon } from './assets/icons/bolt.svg';

const App = () => {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
    </Navbar>
  );
};

export default App;
