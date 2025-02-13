import logements from '../../assets/logement.json';
import Collapse from '../../components/Collapse/Collapse';
import Slideshow from '../../components/Slideshow/Slideshow';
import Rating from '../../components/Rating/rating';
import Tag from '../../components/Tag/Tags';
import {Navigate,  useParams } from "react-router-dom";
import './fichelogement.scss'



export default function Fichelogement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);
  if (!logement) {
    return <Navigate to="/erreur404"/>;
  }
  return (
    <div className='fichelogement'> 
            <Slideshow images={logement.pictures}/>
            <div className='fichelogement__container'>
              <div className='fichelogement__container-left'>
              <p className='fichelogement__title'>{logement.title}</p>
              <p className='fichelogement__localisation'>{logement.location}</p>
              <div className='fichelogement__tag'>
              {logement.tags.map((tag, index) => (
              <Tag key={index} tagName={tag} />
              ))}
              </div>
            </div>
            <div className="fichelogement__info">
              <p className='fichelogement__info--texte'>{logement.host.name}</p>
              <img src={logement.host.picture} alt={`Photo de ${logement.host.name}`} />
            </div>
            <Rating rating={parseInt(logement.rating, 10)} />
          <div className='fichelogement__collapse'>
            <Collapse title="Description"> <div className='fichelogement_collapse--texte'>{logement.description}</div></Collapse>
            <Collapse title="Équipements" >  
                <div>
                  {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                  ))}
                </div>
            </Collapse>
            </div>
          </div>
    </div>
  )}