import imageApropos from '../../assets/imageapropos.jpg'
import Section from '../../components/Section/section'
import './Apropos.css'
import Collapse from '../../components/Collapse/Collapse'
import apropos from '../../assets/apropos.json'


export default function Apropos() {
    return (
        <>
        
            <div>
                <Section imgSrc={imageApropos} alt="Image de la page d'accueil" />
            </div>
            <div className='collapse-container'>
             {apropos.map((apropos) => (
                              <Collapse
                                  key={apropos.title}
                                  title={apropos.title}
                                  description={apropos.description}
                              />
                                  
            ))}
        </div>
        </>)}
