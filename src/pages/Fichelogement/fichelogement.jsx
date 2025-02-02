import data from '../../assets/logement.json';
import Collapse from '../../components/Collapse/Collapse';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tags';
import { useParams } from "react-router-dom";

const logements= data

export default function Fichelogement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  if (!logement) {
    return <p>Logement non trouvé</p>;
  }
  return (
    <div >
        <div key={logement.id}>   
          <Slideshow images={logement.pictures}/>
      <p>{logement.location}</p>
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
