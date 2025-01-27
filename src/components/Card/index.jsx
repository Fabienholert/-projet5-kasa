 import data from '../../assets/logement.json'
 import './card.css'

function Card(props) {
    return (
      <div className="card">
         <img src={props.cover} alt="" className="card-image" />
         <span className="card-title">{props.title}</span>
      </div>
    );
  }
  export default function Cards() {
    return (
      <div className="container-card">
          {data.map((card, index) => (
              <Card key={index} cover={card.cover} title={card.title} />
          ))}
      </div>
    );
 }


 


