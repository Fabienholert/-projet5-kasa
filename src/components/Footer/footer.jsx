import Logob from '../../assets/Logoblanc.png'
import './footer.css'

export default function Footer () {
    return (
        <footer className='Footer'>
           <img src ={Logob} alt ='logo Kasa en blanc' className='logo-blanc'/>
           <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}