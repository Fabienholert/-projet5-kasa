import Section from '../../components/Section/section'
import  imageHome from'../../assets/imageHome.jpg'
import './Home.css'
import Card from '../../components/Card/Card'

export default function Home () {
    return (
        <>
        <div>
        <Section imgSrc={imageHome} alt="Image de la page d'accueil" />
        <div className='textehome'>
            Chez vous, partout et ailleurs
        </div>
        </div>
        <Card/>
        </>
    )
};

export function Containercard() {
    return (
        <li>
          {data.map((card, index) => (
              <Card key={index} cover={card.cover} title={card.title} />
          ))}
      </li>
    );
 }


 


