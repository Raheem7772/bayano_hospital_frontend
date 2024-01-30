import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import Footer from '../footer/footer';
import Header from '../header/header';
import './blog.css';
import { Link } from 'react-router-dom';


const Blog = () =>{
    return(
        <>
        <Header />
        <div>
        <section className="about-section-container">
                    <div className="about-section-image">
                        <div className="col-lg-12 about-section-heading">
                            <h1 className="about-heading text-uppercase">Blog</h1>
                            <div>
                                <p1><Link to="/"><span className='about-section-home'>Home </span></Link></p1>
                                <p1>/ Blog</p1>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
        <div className="blog-container">
            <div className='d-flex justify-content-center'>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="blog-card">
                                <div className='blog-card-description'>
                                <Link to="/blog/details1">
                                <h4><span className='blog-card-heading'>Why employer healthcare strategies must be local one</span></h4>
                                </Link>
                                <p className='blog-card-para'>The best employers care not only about their employees’ productivity, but their well-being. And if you’re heading up a large company that employs ...</p>
                                </div>
                                <hr className='blog-card-line'/>
                                <div className='d-flex justify-content-between'>
                                    <div className='blog-card-date d-flex m-2'>
                                    <i className="fa fa-calendar"></i>
                                        <p>10 Nov,2023</p>
                                    </div>
                                    <div>
                                        <Link  className='blog-card-read d-flex m-2'>
                                        <i class="fa-solid fa-right-long"></i>
                                        <p>Read More</p>
                                        </Link>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="blog-card">
                                <div className='blog-card-description'>
                                <Link to="/blog/details2">
                                <h4><span className='blog-card-heading'>Why employer healthcare strategies must be local two</span></h4>
                                </Link>
                                <p className='blog-card-para'>The best employers care not only about their employees’ productivity, but their well-being. And if you’re heading up a large company that employs ...</p>
                                </div>
                                <hr className='blog-card-line'/>
                                <div className='d-flex justify-content-between'>
                                    <div className='blog-card-date d-flex m-2'>
                                    <i className="fa fa-calendar"></i>
                                        <p>10 Nov,2023</p>
                                    </div>
                                    <div>
                                        <Link  className='blog-card-read d-flex m-2'>
                                        <i class="fa-solid fa-right-long"></i>
                                        <p>Read More</p>
                                        </Link>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-card">
                                <div className='blog-card-description'>
                                <Link to="/blog/details3">
                                <h4><span className='blog-card-heading'>Why employer healthcare strategies must be local three</span></h4>
                                </Link>
                                <p className='blog-card-para'>The best employers care not only about their employees’ productivity, but their well-being. And if you’re heading up a large company that employs ...</p>
                                </div>
                                <hr className='blog-card-line'/>
                                <div className='d-flex justify-content-between'>
                                    <div className='blog-card-date d-flex m-2'>
                                    <i className="fa fa-calendar"></i>
                                        <p>10 Nov,2023</p>
                                    </div>
                                    <div>
                                        <Link  className='blog-card-read d-flex m-2'>
                                        <i class="fa-solid fa-right-long"></i>
                                        <p>Read More</p>
                                        </Link>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <Footer />
                <ScrollToTopButton />
        </>
    )
}

export default Blog;