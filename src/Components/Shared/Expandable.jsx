import { useState } from 'react';
const Expandable = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(props);
  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);
  return (
    <div>
      <button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
      {isOpen && props.children}
    </div>
  );
};

export default Expandable;
