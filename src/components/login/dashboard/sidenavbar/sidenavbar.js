// Sidebar.js
import React from 'react';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './sidenavbar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div className={`side-navbar ${isOpen ? 'open' : ''}`}>
      <div className='d-flex justify-content-around mb-4'>
        
      <img src="https://demo.creativeitem.com/bayanno/uploads/logo.png" width="60" alt="doctor logo"
        className='sidebar-header-logo'/>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <FaBars />
        
      </div>           
      </div>
      <hr/>
      <div className='sidebar-profile-container d-flex'>
        <div >
          <img src='https://demo.creativeitem.com/bayanno/uploads/user.jpg' width="40"className='sidebar-profile-container-image'/>
        </div>
        <div className='d-flex flex-column sidebar-profile'>
        <h4 className='sidebar-profile-welcome'>Welcome,</h4>
        <p className='sidebar-profile-name'>Jennifer Lopez</p>
        </div>
      </div>
      <hr/>
      <ul className="nav d-flex flex-column">
        <li>
          <a href="/auth/dashboard">
          <i class="fa-solid fa-house"></i> <span className='sidebar-names'>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/auth/medicinecategory">
          <i class="fa-regular fa-hospital"></i><span className='sidebar-names'>Medicine Category</span>
          </a>
        </li>
        <li>
          
          <li>
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"><i class="fa-solid fa-tablets"></i>
              <span className='sidebar-names'>Medicine</span> </a>
              <ul class="dropdown-menu">
                <li><Link to='/auth/managemedicine'>Manage Medicines</Link></li>
                <li><Link to='/auth/medicinesales'>Medicine Sales</Link></li>
                </ul>
            </li>
          
        </li>
        <li>
          <a href="/pharmacyProfile">
          <i class="fa-solid fa-user"></i><span className='sidebar-names'>Profile</span>
          </a>
        </li>
        <li>
          <a href="/process-payment">
          <i class="fa-regular fa-credit-card"></i><span className='sidebar-names'>Payment</span>
          </a>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Sidebar;
