import DashboardHeader from '../../dashboardheader/dashboardheader';
import Sidebar from '../sidenavbar/sidenavbar';
import './payment.css';
import Popup from './popup';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Payment = () =>{
    const [buttonpopup,setButtonpopup]=useState(false);
  const [refresh,setRefresh]= useState(0)
  const [formData, setFormData] = useState({
    // Define your form fields here
    amount: '',
    cardNumber:'',
    expiryDate: '',
    cvc:'',
    
    // Add more fields as needed
  });
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  
  const [data,setData]=useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch API POST request
    try {
      const token=Cookies.get("jwt_token");
      const response = await fetch('http://localhost:7777/api/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      }).then(response =>response.json())
      .then(json =>setFormData({amount: '',cardNumber:'',expiryDate: '',cvc:'',}))
      .catch(err => console.log(err))
      
        console.log(formData);
     
      setFormData({amount: '',cardNumber:'',expiryDate: '',cvc:'',});
      alert('Payment processed successfully')
    } catch (error) {
      console.log('Error sending POST request:', error);
    }
    
  };
   
  

    return(
        <>
        <div className='medicine-bg'>
        <div className='row'>
            <div className='col-12 col-md-3 sidebar-container'>
            <Sidebar />
            </div>
            <div className='col-12 col-md-9 dashboard-container'>
                <div>
                    <DashboardHeader />
                </div>
                
                <hr className='dashboard-container-header-line' /> 
                <div className="row mt-3 mb-2">
              <div className="col-12">
                <div className="d-flex align-items-center">
                  <i class="fa-regular fa-circle-right bayanno-admin-dashboard-main-heading-icon"></i>
                  <h3 className="bayanno-admin-dashboard-main-heading-text">
                  Payment
                  </h3>
                </div>
              </div>
              </div>
              <div className="row mt-3 mb-2">
              <div className="col-12">
                <button className="d-flex align-items-center payment-add-button"
                onClick={()=>setButtonpopup(true)}>
                  <i class="fa-solid fa-plus manage-medicine-add-button-icon"></i>
                  <h3 className="medicine-category-add-button-heading">
                  Payment
                  </h3>
                </button>
                <Popup trigger={buttonpopup} setTrigger={setButtonpopup} className='medicine-category-popup'>
                  <div className='medicine-sale-popup-card'>
                    <h3 className='medicine-sale-popup-card-heading'>Add Medicine Sale</h3>
                    <form className='medicine-category-popup-card-form' onSubmit={handleSubmit}>
                      <div className='form-group d-flex m-2'>
                        <label htmlFor="name" className='label-name'>amount</label>
                        <input 
                        className='form-control1-sale-medicine-no'
                        id='name'
                        placeholder='Enter amount'
                        type="text" name="amount" value={formData.amount} onChange={handleChange}
                        />
                      </div>
                      <div className='form-group d-flex m-2'>
                        <label htmlFor="name" className='label-name'>cardNumber</label>
                        <input 
                        className='form-control1-payment-no'
                        id='name'
                        placeholder='Enter card no'
                        type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange}
                        />
                      </div>
                      <div className='form-group d-flex m-2'>
                        <label htmlFor="name" className='label-name'>expiryDate</label>
                        <input 
                        className='form-control1-payment-date'
                        id='name'
                        placeholder='Enter date'
                        type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange}
                        />
                      </div>
                      <div className='form-group d-flex m-2'>
                        <label htmlFor="name" className='label-name'>cvc</label>
                        <input 
                        className='form-control1-payment-cvc'
                        id='name'
                        placeholder='Enter cvc'
                        type="text" name="cvc" value={formData.cvc} onChange={handleChange}
                        />
                      </div>
                      
                      <button className='btn btn-success' type='submit'>Process Payment</button>
                    </form>
                  </div>
                  
            </Popup>
                
              </div>
          
            </div>
            
            
              </div>
              </div>
              </div>
        </>
    )
}

export default Payment;