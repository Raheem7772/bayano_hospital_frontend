
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <section className='footer-section'>
            <div className='d-flex justify-content-center pt-5'>
                <div className='footer-image'>
                    <Link to="/">
                        <img src="https://demo.creativeitem.com/bayanno/uploads/logo.png" width="60" alt="doctor logo" />
                        <h4>Bayanno Diagnostic Center</h4>
                    </Link>
                </div>
                <div className='footer-image'>
                    <div className='footer-mainmenu'>
                    <h5>MAIN MENU</h5>
                    <li className='d-flex flex-column'>
                    <p1><Link to="/">Home</Link></p1>
                    <p1><Link to="/doctors">Doctors</Link></p1>
                    <p1><Link to="/appointment">Make An Appointment</Link></p1>
                    <p1><Link to="/auth" target="_blank">Login</Link></p1>
                    </li>
                    </div>
                </div>
                <div className='footer-image'>
                    <div className='footer-mainmenu'>
                    <h5>HELP AND SUPPORT</h5>
                    <li className='d-flex flex-column'>
                    <p1><Link to="/contact">Contact Us</Link></p1>
                    <p1><Link to="/about">About</Link></p1>
                    <p1><Link to="/blog">Blog</Link></p1>
                    </li>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
