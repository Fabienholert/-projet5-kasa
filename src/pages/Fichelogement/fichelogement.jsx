import data from '../../assets/logement.json';
import Collapse from '../../components/Collapse/Collapse';
import Slideshow from '../../components/Slideshow/Slideshow'

const logements= data

export default function Fichelogement({equipments, description , pictures}) {
  return (
    <div >
      {logements.map ((logement) =>(
        <div key={logement.id}>
      <Slideshow > <img src={logement.pictures} alt={logement.title} className='carroussel'/> </Slideshow> 
      <Collapse title="Description" > {logement.description}</Collapse>
      <Collapse title="Équipements" > {logement.equipments}</Collapse>
      </div>
      ))}
    </div>
  )}
