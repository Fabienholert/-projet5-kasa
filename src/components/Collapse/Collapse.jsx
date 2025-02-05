import { useState } from 'react';
import arrowdown from '../../assets/arrowdown.png';
import arrowup from '../../assets/arrowup.png';
import'./collapse.scss'


export default function Collapse(props ) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse__container">
      <button className='collapse__title' onClick={toggleCollapse}>
        {props.title}
        <img src={isOpen ? arrowdown : arrowup} alt="arrow" className='arrow' />
      </button>
      {isOpen && <div className="collapse__content">{props.children}</div>}
    </div>
  );
}