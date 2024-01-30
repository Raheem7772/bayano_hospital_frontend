import React from 'react';
import './popup.css'

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner1'>
       <h4 className='medicine-category-popup-heading'>Bayanno Hospital Management System</h4>
        <i class="fa-solid fa-xmark top-right" type='button'onClick={()=>props.setTrigger(false)}></i>
        <button className='close-btn' onClick={()=>props.setTrigger(false)}>close</button>
        {props.children}
      </div> 
    </div>
  ): "";
}

export default Popup
