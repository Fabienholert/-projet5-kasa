import { useState } from 'react';
import arrowup from '../../assets/arrowup.png';
import'./collapse.scss'


export default function Collapse(props ) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="collapse">
      <button className='collapse__title' onClick={toggleCollapse}>
        {props.title}
        <img
          src={arrowup}
          alt="arrow"
          className={`collapse__arrow ${isOpen ? 'collapse__arrow--rotated' : ''}`}
        />
      </button>
      <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
        {props.children}
      </div>
    </div>
  );
}