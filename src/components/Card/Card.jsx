import './card.css';
import { Link } from 'react-router-dom';

export default function Card({ to, children, className = 'card' }) {
  return (
      <div className={className}>
          <Link to={to} >
            {children}
         </Link>
      </div>
  );
}