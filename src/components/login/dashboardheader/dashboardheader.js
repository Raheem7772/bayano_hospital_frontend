import './dashboardheader.css';
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const DashboardHeader = () =>{
    let navigate=useNavigate();
    const onClickLogout = ()=>{
        
        Cookies.remove('jwt_token');
        navigate('/auth')
    
    }

    return(
        <>
        <div className='bashboard-header'>
            <h1 className='bashboard-header-name'>Bayanno Hospital Management System</h1>
        </div>
        <div className='bashboard-header-name-website-logout d-flex justify-content-around'>
            <div className='bashboard-header-name-fa d-flex'>
            <i class="fa-solid fa-user fa-solid-user"></i>
            <p>pharmacist</p>
            </div>
            <div className='bashboard-header-website-logout-container d-flex'>
                <div className='d-flex bashboard-header-website'>
                <i class="fa-brands fa-firefox"></i>
                <a href='https://www.google.com/'target='_blank'><p className='website'>Website</p></a>
                </div>
                <div>
                    <p>|</p>
                </div>
                <div className='d-flex bashboard-header-logout'>
                
                <p className="logout-button" type="button" onClick={onClickLogout}>
                    Logout
                </p>
                <i class="fa-solid fa-right-from-bracket"></i>
                </div>

            </div>

        </div>
        </>
    )
}

export default DashboardHeader;