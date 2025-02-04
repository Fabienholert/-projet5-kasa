import logements from '../../assets/logement.json';
import Collapse from '../../components/Collapse/Collapse';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tags';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom' 



export default function Fichelogement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);
  if (!logement) {
    return <Link to="/erreur404"></Link>;
  }
  return (
    <div >
        <div>   
          <Slideshow images={logement.pictures}/>
      <p>{logement.title}</p>
      <p>{logement.location}</p>
      <div className="host-info">
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt={`Photo de ${logement.host.name}`} />
      </div>
      <p className='rating'>{logement.rating}</p>
      <div>
      {logement.tags.map((tag, index) => (
      <Tag key={index} tagName={tag} />
      ))}
      </div>
      <Collapse title="Description"> {logement.description}</Collapse>
      <Collapse title="Équipements" > {logement.equipments}</Collapse>
      </div>
    </div>
  )}