import '././expandable.css';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';
const Expandable = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);
  return (
    <div>
      <Button className='expandableBtn' onClick={toggleOpen}>
        {isOpen ? 'Hide comments' : 'Open comments'}
      </Button>
      {isOpen && props.children}
    </div>
  );
};

export default Expandable;
