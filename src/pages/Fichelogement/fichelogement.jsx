import data from '../../assets/logement.json'



export default function ficheLogement(props) {
    return (
        <div>
            <img src = {props.pictures} alt = "" className='carroussel'/>
        </div>)};        
           <div className="container-card">
          {data.map((ficheLogement, index) => (
              <ficheLogement key={index}  title={ficheLogement.title} location={ficheLogement.location} host={ficheLogement.host} rating={ficheLogement.rating} tag={ficheLogement.tag} description={ficheLogement.description} equipment={ficheLogement.equipment}  />
          ))}
      </div>