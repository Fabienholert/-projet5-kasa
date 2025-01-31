import data from '../../assets/logement.json';
import Collapse from '../../components/Collapse/Collapse';
import Slideshow from '../../components/Slideshow/Slideshow'

const logements= data

export default function Fichelogement() {
  return (
    <div >
      {logements.map ((logement) =>(
        <div key={logement.id}>
      <Slideshow > <img src={logement.pictures} alt={logement.title} className='carroussel'/> </Slideshow> 
      <Collapse>description {logement.description}</Collapse>
      <Collapse>equipements {logement.equipments}</Collapse>
      </div>
      ))}
    </div>
  )}
