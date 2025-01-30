import data from '../../assets/logement.json';
import Collapse from '../../components/Collapse/Collapse';

const informations= data

export default function Fichelogement(data) {
  return (
    <div key={informations.id}>
        
            <img src={pictures} alt={title} className='carroussel'/>
      <Collapse>description {informations.description}</Collapse>
      <Collapse>equipements {informations.equipments}</Collapse>
    </div>
  );
}
