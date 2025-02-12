import Section from '../../components/Section/section';
import imageHome from '../../assets/imageHome.jpg';
import './Home.scss';
import '../../components/Card/Card.scss'
import Card from '../../components/Card/Card';
import logements from '../../assets/logement.json';

export default function Home() {
  return (
    <>
      <div className="home">
          <Section imgSrc={imageHome} alt="Image de la page d'accueil" />
          <div className="home__texte">
              <span>Chez vous,</span> <span>partout et ailleurs</span>
          </div>
          <div className="home__card">
              {logements.map((logement) => (
                  <Card
                      key={logement.id}
                      to={`/ficheLogement/${logement.id}`}
                  >
                      <img src={logement.cover} alt={logement.title} />
                      <h3 className='home__card-title'>{logement.title}</h3>
                  </Card>
              ))}
          </div>
      </div>
    </>
  );
}