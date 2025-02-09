import logements from '../../assets/logement.json';
import Collapse from '../../components/Collapse/Collapse';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tags';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom' 
import './fichelogement.scss'



export default function Fichelogement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);
  if (!logement) {
    return <Link to="/erreur404"></Link>;
  }
  return (
    <div className='fichelogement'> 
            <Slideshow images={logement.pictures}/>

              <p className='fichelogement__title'>{logement.title}</p>
              <p className='fichelogement__localisation'>{logement.location}</p>
            <div className="fichelogement__info">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={`Photo de ${logement.host.name}`} />
            </div>
              <p className='fichelogement__rating'>{logement.rating}</p>
          <div className='fichelogement__tag'>
              {logement.tags.map((tag, index) => (
              <Tag key={index} tagName={tag} />
              ))}
          </div>
          <div className='fichelogement__collapse'>
            <Collapse title="Description"> {logement.description}</Collapse>
            <Collapse title="Équipements" >  
                <ul>
                  {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                  ))}
                </ul>
            </Collapse>
          </div>
    </div>
  )}