import data from '../../assets/logement.json';
import Collapse from '../../components/Collapse/Collapse';

const informations= data

export default function FicheLogement({pictures, title, location, host, rating, tag, description, equipments }) {
  return (
    <div key={informations.id}>
    
        
            <img src={pictures} alt={title} className='carroussel'/>
        
      <h2>{informations.title}</h2>
      <p>Location: {informations.location}</p>
      <p>Host: {informations.host.name}</p>
      <p>Rating: {informations.rating}</p>
        <p>tag: {informations.tag}</p>
      <Collapse>description {informations.description}</Collapse>
      <Collapse>equipements {informations.equipments}</Collapse>
    </div>
  );
}
