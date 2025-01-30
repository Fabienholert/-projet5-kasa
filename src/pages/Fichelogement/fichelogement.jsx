import data from '../../assets/logement.json';
import Collapse from '../../components/Collapse/Collapse';
import Slideshow from '../../components/Slideshow/Slideshow'

const informations= data

export default function Fichelogement() {
  return (
    <div>
      {informations.map ((informations) =>(
      key={informations.id}
      <Slideshow> <img src={pictures} alt={title} className='carroussel'/> </Slideshow> 
      <Collapse>description {informations.description}</Collapse>
      <Collapse>equipements {informations.equipments}</Collapse>
      ))}
    </div>
  )}
