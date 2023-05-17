import './index.scss'
import {Link , NavLink} from 'react-router-dom'
import logo from './logo.png'

const Sidebar = () => (
    <div className='container'>
    <div className='nav-bar'>
        
        <Link className = 'logo' to= '/'>
            <img src= {logo}  alt=''/>
        </Link>
        <nav className='items'>
            <ul>
                <li className='links'>
                    <NavLink exact="true" activeclassname = "active" className="home-link" to='/'>
                HOME
            </NavLink></li>
            <li className='links'>
                 <NavLink exact="true" activeclassname = "active" className="about-link" to='/about'>
                ABOUT
            </NavLink>
            </li>
            <li className='links'>
                <NavLink exact="true" activeclassname = "active" className="contact-link" to='/contact'>
                CONTACT
            </NavLink>
            </li>
            </ul>           
        </nav>
    </div>
    </div>
)

export default Sidebar