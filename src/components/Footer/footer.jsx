import Logob from '../../assets/Logoblanc.png'
import './footer.scss'

export default function Footer () {
    return (
        <footer className='Footer'>
           <img src ={Logob} alt ='logo Kasa en blanc' className='footer__logo'/>
           <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}