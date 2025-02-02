import data from '../../assets/logement.json';
import Collapse from '../../components/Collapse/Collapse';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tags'

const logements= data

export default function Fichelogement() {
  return (
    <div >
      {logements.map ((logement) =>(
        <div key={logement.id}>   
          <Slideshow images={logement.pictures}/>
      <p>{logement.location}</p>
      <p className='rating'>{logement.rating}</p>
      <Tag>{logement.tags}</Tag>
      <Collapse title="Description"> {logement.description}</Collapse>
      <Collapse title="Équipements" > {logement.equipments}</Collapse>
      </div>
      ))}
    </div>
  )}
