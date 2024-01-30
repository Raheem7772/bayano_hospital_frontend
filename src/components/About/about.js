
import Footer from '../footer/footer';
import './about.css';
import { Link } from 'react-router-dom';
import {VscTriangleDown} from "react-icons/vsc";
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import Header from '../header/header';

const About = () =>{
    return(
        
        <div>
            <Header />
            <section className="about-section-container">
                    <div className="about-section-image">
                        <div className="col-lg-12 about-section-heading">
                            <h1 className="about-heading text-uppercase">About Us</h1>
                            <div>
                                <p1><Link to="/"><span className='about-section-home'>Home </span></Link></p1>
                                <p1>/ About Us</p1>
                            </div>
                        </div>
                    </div>
            </section>
            {/* about description*/}
            <div className='about-description-section'>
                <div>
                    <h2 className='about-description-section-heading'>ABOUT BAYANNO DIAGNOSTIC CENTER</h2>
                    <p className='about-description-section-para'>We are a health-first diagnostic center that has 125 state-of-the-art diagnostic centers located in 20 Indian cities. All the diagnostic centres brandishing our banner have NABL-certified diagnostic labs. Each diagnostic centre is headed by India’s best certified, skilled and experienced personnel. We have an in-house team that consists of 2200+ professionals. Our in-house team consist of India’s top pathologists, radiologists, and microbiologists.</p>
                    <p className='about-description-section-para'>We periodically send a small team of our in-house healthcare professionals to every diagnostic centre scattered all over India to train and retrain the professionals at that centre. This team of healthcare professionals are also sent occasionally without prior notice to ensure that our diagnostic centres are upholding the quality standards we have set to ensure the deliverance of international-grade diagnostic services.</p>
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
            <hr className='Our-Awesome-Doctors-heading-line'/>
            <section className='Get-In-Touch-With-Our-Professionals-section pt-5'>
                <Link to="/appointment"><button className='Get-In-Touch-With-Our-Professionals-button btn-primary'>MAKE AN APPOINTMENT</button></Link>
            </section>

            <Footer />
            <ScrollToTopButton />
        </div>
        
    )
}

export default About;