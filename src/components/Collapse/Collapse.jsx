import { useState } from 'react';
import arrowdown from '../../assets/arrowdown.png';
import arrowup from '../../assets/arrowup.png';


export default function Collapse(props ) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <button className='collapsetitle' onClick={toggleCollapse}>
        {props.title}
        <img src={isOpen ? arrowdown : arrowup} alt="arrow" className='arrow' />
      </button>
      {isOpen && <div className="collapsecontent">{props.children}</div>}
    </div>
  );
}