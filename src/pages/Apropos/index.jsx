import Imageapropos from'../../assets/Imageapropos.jpg'
import './Apropos.css'

export default function Apropos() {
    return (
        <>
        
        <div>
            <img src= {Imageapropos} alt = 'image de montage et  de ruisseau ' className='imageapropos' />
        <div className="detailApropos">
           <details><summary>Fiabilité</summary><div>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div></details>
           <details><summary>Respect</summary><div>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div></details>
           <details><summary>Service</summary><div>La qualité du service est au coeur de notre engament chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</div></details>
           <details><summary>Sécurité</summary><div>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div></details>           
        </div>   
        </div>

        </>
    )
};