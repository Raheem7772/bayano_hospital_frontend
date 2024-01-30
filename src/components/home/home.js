import './home.css';
import { Link } from "react-router-dom";
import {VscTriangleDown} from "react-icons/vsc";
import ProfileCard from '../profile/profile';
import Footer from '../footer/footer';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import Header from '../header/header';

const profiles = [
    {
      skill:'Anesthetics',
      name: 'ERICH MCBRIDE',
      avatar: 'https://demo.creativeitem.com/bayanno/uploads/user.jpg',
      email: 'xidim@gmail.com',
      Address: 'Eius sed incidunt ipsam omnis',
      Phone :'+612-92-1385682',
      Degrees :'M.D. of Medicine',
      Profile:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        skill:'Cardiology',
        name: 'Micheal Pewd',
        avatar: 'https://demo.creativeitem.com/bayanno/uploads/user.jpg',
        email: 'doctor@example.com',
        Address: 'Tempor distinctio At non iusto nulla nostrud',
        Phone :'+984-46-9388638',
        Degrees :'M.D. of Medicine',
        Profile:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
    // Add more profiles as needed
  ];
const Home = ()=>{
    
  
    return(
        
        <div>
            <Header />
             {/* < !--Carousel -- > */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                {/* <!-- Indicators/dots --> */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                {/* <!-- The slideshow/carousel --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://demo.creativeitem.com/bayanno/uploads/frontend/slider_images/slider1.jpg" alt="Los Angeles" class="d-block" />
                        <div className="carousel-caption">
                           
                            <h2 className="carousel-heading">Giving children the care they deserve</h2>
                            <p className="mt-4 carousel-para">To keep the body in good health is a duty. Otherwise we shall not be able to keep our mind strong and clear</p>
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://demo.creativeitem.com/bayanno/uploads/frontend/slider_images/slider2.jpg" alt="Chicago" class="d-block" />

                        <div className="carousel-caption">
                            
                            <h2 className="carousel-heading">The skill to heal, the spirit to care</h2>
                            <p className="mt-4 carousel-para">Dedicated to providing multidisciplinary medical care and backed by state-of-the-art facilities</p>
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://demo.creativeitem.com/bayanno/uploads/frontend/slider_images/slider3.jpg" alt="New York" class="d-block" />
                        <div className="carousel-caption">
                            
                            <h2 className="carousel-heading">Where Compassion and Healing Come Together</h2>
                            <p className="mt-4 carousel-para">Dedicated to providing multidisciplinary medical care and backed by state-of-the-art facilities</p>
                            
                        </div>
                    </div>
                </div>

                {/* <!-- Left and right controls/icons --> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                            <i className="fa fa-phone"></i>
                                <h4 className='Emergency-contact'>Emergency Contact</h4>
                                <h3>1-800-400-7400</h3>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card">
                                <i className="fa fa-calendar"></i>
                                <h4 className='Emergency-contact'>Doctor Appointment</h4>
                                <button className="btn btn1">
                                <Link to="/appointment" >Book An Appointment </Link>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <i className="fa fa-clock-o"></i>
                                <h4 className='Emergency-contact'>Opening Hours</h4>
                                <ul className='time-day'>
                                    <li className="clearfix">Monday - Friday
                                        <span className="float-right">10.00-21.00</span></li><br/>
                                    <li class="clearfix">Saturday
                                        <span className="float-right">10.00-18.00</span></li><br/>
                                    <li class="clearfix">Sunday
                                        <span className="float-right">11.00-17.00</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        <div className='image-desc-container d-flex'>
            <div>
                <img src="https://demo.creativeitem.com/bayanno/uploads/frontend/welcome.png" className='Bayanno-image' alt='Bayanno image'/>
               
            </div>
            <div className='Bayanno-description'>
                <h3 className='Bayanno-heading'>Welcome To Bayanno Diagnostic Center</h3>
                <p className="Bayanno-desc mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris quisque adipiscing lobortis aptent cras et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris quisque adipiscing lobortis aptent cras et justo.</p>
            </div>
        </div>
            <section className="bayanno-home-services-container">
                <div className="container">
                    <div className="row">
                        <h3 className="bayanno-home-services-main-heading col-12">
                            Our World Class Services
                        </h3>
                        <p className="bayanno-home-services-description col-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam.
                        </p>
                    </div>
                </div>
            </section>
            <section className="mt-0 pt-0 container-sec">
                <div className="w-100 d-flex justify-content-center mt-0 pt-0">
                    <VscTriangleDown className="bayanno-home-triangle-icon-services" />
                </div>
            </section>
            {/*Our World Class Services*/}
            <section className='bayano-worldclass-services-container'>
                <div className='bayano-worldclass-card'>
                    <div className='bayano-worldclass-img-desc-card'>
                        <div className='bayano-worldclass-img-card'>
                            <img src='https://res.cloudinary.com/dsm5qqqrm/image/upload/v1699424146/innovative-technology-modern-hospital_980220-534_zoyasm.jpg'
                            className='bayano-worldclass-img' alt='imgage'/>
                        </div>
                        <div className='bayano-worldclass-desc-card'>
                            <h4>High quality service</h4>
                            <p>Quality healthcare is deﬁned as “consistently delighting the patient by providing.
                             efﬁcacious, effective and efﬁcient healthcare services according to the latest clinical
                              guidelines and.</p>
                        </div>
                    </div>
                    <div className='bayano-worldclass-img-desc-card'>
                        <div className='bayano-worldclass-img-card'>
                            <img src='https://res.cloudinary.com/dsm5qqqrm/image/upload/v1699424094/19-0125656_rnvzsz.jpg'
                            className='bayano-worldclass-img' alt='imgage'/>
                        </div>
                        <div className='bayano-worldclass-desc-card'>
                            <h4>Ready for intervention</h4>
                            <p>We use the term 'intervention' to apply to any activity undertaken with the
                                 objective of improving human health by preventing disease, by curing or reducing.
                                 </p>
                        </div>
                    </div>
                </div>
                <div className='bayano-worldclass-card'>
                    <div className='bayano-worldclass-img-desc-card'>
                        <div className='bayano-worldclass-img-card'>
                            <img src='https://res.cloudinary.com/dsm5qqqrm/image/upload/v1699424146/90_vhds7m.jpg'
                            className='bayano-worldclass-img' alt='imgage'/>
                        </div>
                        <div className='bayano-worldclass-desc-card'>
                            <h4>Modern hospital and technology</h4>
                            <p> It helps healthcare management professionals to store and retrieve data in a much more efficient way.</p>
                        </div>
                    </div>
                    <div className='bayano-worldclass-img-desc-card'>
                        <div className='bayano-worldclass-img-card'>
                            <img src='https://res.cloudinary.com/dsm5qqqrm/image/upload/v1699424189/female-specialist-consulting-man-with-throat-problem-5683299-4743498_vyvk8a.png'
                            className='bayano-worldclass-img' alt='imgage'/>
                        </div>
                        <div className='bayano-worldclass-desc-card'>
                            <h4>Specialist consulting for health problems</h4>
                            <p>Provide health organizations with professional guidance spanning a wide range of
                                 services that may include manufactured goods, mobile devices, information 
                                 systems, and retail.</p>
                        </div>
                    </div>
                </div>

            </section>
            {/*Departments section*/}
            <section className='bayano-department-section-container'>
                <h2 className='Departments-heading mb-3 pb-3'>Departments</h2>
                <div className='d-flex justify-content-center'>
                    <Link to="/Anesthetics" className="bayano-department-section-card">
                        <img src="https://demo.creativeitem.com/bayanno/uploads/frontend/department_images/2.png"
                         className='bayano-department-section-card-image' alt="Avatar"/>
                         <h4>Anesthetics</h4>
                    </Link>
                    <Link to="/Cardiology" className="bayano-department-section-card">
                        <img src="https://demo.creativeitem.com/bayanno/uploads/frontend/department_images/1.png"
                         className='bayano-department-section-card-image' alt="Avatar"/>
                        <h4>Cardiology</h4>
                    </Link>
                    <Link to="/Gastroenterology" className="bayano-department-section-card">
                        <img src="https://res.cloudinary.com/dsm5qqqrm/image/upload/v1699426875/stomach-gastroenterology-7486408-6148948_b24zvn.webp"
                         className='bayano-department-section-card-image' alt="Avatar"/>
                        <h4>Gastroenterology</h4>
                    </Link>
                </div>
            </section>
            {/*Our Awesome Doctors section*/}
            <h2 className='Our-Awesome-Doctors-heading'>Our Awesome Doctors</h2>
            <div className="d-flex justify-content-center">
                
                {profiles.map((profile, index) => (
                    <ProfileCard key={index} profile={profile} />
                ))}
            </div>
            <hr className='Our-Awesome-Doctors-heading-line'/>
            <section className='Get-In-Touch-With-Our-Professionals-section'>
                    <h1 className='Get-In-Touch-With-Our-Professionals-heading'>Get In Touch With Our Professionals</h1>
                    <Link to="/appointment"><button className='Get-In-Touch-With-Our-Professionals-button btn-primary'>MAKE AN APPOINTMENT</button></Link>
            </section>

            <Footer />
            <ScrollToTopButton />

</div>

    )
}

export default Home;