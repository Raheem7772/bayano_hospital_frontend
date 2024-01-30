
import Popup from './popup';
import  './medicinesales.css';
import React, { useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import Sidebar from '../sidenavbar/sidenavbar';
import DashboardHeader from '../../dashboardheader/dashboardheader';
import DashboardFooter from '../dashboardfooter/dashboardfooter';


const MedicineSales = () => {
  const [buttonpopup,setButtonpopup]=useState(false);
  const [refresh,setRefresh]= useState(0)
  const [formData, setFormData] = useState({
    // Define your form fields here
    no: '',
    medicines:'',
    totalPrice: '',
    patient:'',
    
    // Add more fields as needed
  });
  const [searchInput, setSearchInput] = useState("");
  const [dataToUpdate, setDataToUpdate] = useState({
    // your data to update
  });
  
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
      const response = await fetch('http://localhost:7777/api/medicine-sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      }).then(response =>response.json())
      .then(json =>setFormData({no : "",medicines:"",totalPrice : "",patient:""}))
      .catch(err => console.log(err))
      
        console.log(formData);
     
      setFormData({no : "",medicines:"",totalPrice : "",patient:""});
      
    } catch (error) {
      console.log('Error sending POST request:', error);
    }
    
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:7777/api/get-medicinesalesdata'); 
        const result = await response.json();
        setData(result.medicineSalesList);
        setRefresh(refresh +1)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };

    fetchData();
  }, [refresh]); 

  const handleUpdate = (_id) => {
    const token=Cookies.get("jwt_token");
    fetch(`http://localhost:7777/api/medicinesalesdtata-update/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        // Add any other headers if needed
      },
      body: JSON.stringify(dataToUpdate),
    })
      .then(response => response.json())
      .then(updatedData => {
        console.log('Data updated successfully:', updatedData);
        // Handle the updated data as needed
      })
      .catch(error => {
        console.error('Error updating data:', error);
        // Handle errors as needed
      });
  };
  

  const handleSearchChange = event => {
    setSearchInput(event.target.value);
    
  };
  useEffect(() => {
    const fetchData = async (item) => {
      try {
        const response = await fetch(`http://localhost:7777/api/medicinesalesdtata?search=${item.searchInput}`); 
        const result = await response.json();
        setData(result.medicineSalesList);
       
        
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };

    fetchData();
  }, []); 
  const filteredData = data.filter((item) =>
    item.medicines.toLowerCase().includes(searchInput.toLowerCase())
  );
  

  return(
        
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
                  Medicine
                  </h3>
                </div>
              </div>
              </div>
              <div className="row mt-3 mb-2">
              <div className="col-12">
                <button className="d-flex align-items-center medicine-sale-add-button"
                onClick={()=>setButtonpopup(true)}>
                  <i class="fa-solid fa-plus manage-medicine-add-button-icon"></i>
                  <h3 className="medicine-category-add-button-heading">
                  Add Medicine Sale
                  </h3>
                </button>
                <Popup trigger={buttonpopup} setTrigger={setButtonpopup} className='medicine-category-popup'>
                  <div className='medicine-sale-popup-card'>
                    <h3 className='medicine-sale-popup-card-heading'>Add Medicine Sale</h3>
                    <form className='medicine-category-popup-card-form' onSubmit={handleSubmit}>
                      <div className='form-group d-flex m-2'>
                        <label htmlFor="name" className='label-name'>No#</label>
                        <input 
                        className='form-control1-sale-medicine-no'
                        id='name'
                        placeholder=''
                        type="text" name="no" value={formData.no} onChange={handleChange}
                        />
                      </div>
                      <div className='form-group d-flex m-2'>
                        <label htmlFor="name" className='label-name'>Medicines</label>
                        <input 
                        className='form-control1-sale-medicine'
                        id='name'
                        placeholder='Enter medicine'
                        type="text" name="medicines" value={formData.medicines} onChange={handleChange}
                        />
                      </div>
                      <div className='form-group d-flex m-2'>
                        <label htmlFor="name" className='label-name'>Total Price</label>
                        <input 
                        className='form-control1-sale-total'
                        id='name'
                        placeholder='Enter amount'
                        type="text" name="totalPrice" value={formData.totalPrice} onChange={handleChange}
                        />
                      </div>
                      <div className='form-group d-flex m-2'>
                        <label htmlFor="name" className='label-name'>Patient</label>
                        <input 
                        className='form-control1-sale-patient'
                        id='name'
                        placeholder='Enter Patient'
                        type="text" name="patient" value={formData.patient} onChange={handleChange}
                        />
                      </div>
                      
                      <button className='btn btn-success' type='submit'>save</button>
                    </form>
                  </div>
                  
            </Popup>
                
              </div>
          
            </div>
            <div className='row medicine-category-perpage-serach-container'>
              <div className='col-12 clo-lg-3'>
                <div className='medicine-category-perpage-container'>
                  <div className='d-flex'>
                  <select className='medicine-category-perpage-select-container'>
                    <option value={"10"} selected>10</option>
                    <option value={"25"}>25</option>
                    <option value={"50"}>50</option>
                    <option value={"100"}>100</option>
                  </select>
              
                  <label className='medicine-category-perpage-select-container-perpage'>per page</label>
                  </div>
                  <div className="col-xs-9 col-right">
                  <div className="export-data">
                  <div className="DTTT btn-group">
                  <a className="btn btn-white DTTT_button_copy" id="ToolTables_table-2_0">
                  <span>Copy</span>
                  <div className='medicine-sales-serachbar-container'>
                  <embed id="ZeroClipboard_TableToolsMovie_1" src="assets/js/datatables/copy_csv_xls_pdf.swf" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="58" height="31" name="ZeroClipboard_TableToolsMovie_1" align="middle" allowscriptaccess="always" allowfullscreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="id=1&amp;width=58&amp;height=31" wmode="transparent"/>
                  </div>
                  </a>
                  <a className="btn btn-white DTTT_button_csv" id="ToolTables_table-2_1">
                    <span>CSV</span>
                    <div className='medicine-sales-serachbar-container'>
                      <embed id="ZeroClipboard_TableToolsMovie_2" src="assets/js/datatables/copy_csv_xls_pdf.swf" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="50" height="31" name="ZeroClipboard_TableToolsMovie_2" align="middle" allowscriptaccess="always" allowfullscreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="id=2&amp;width=50&amp;height=31" wmode="transparent"/>
                      </div>
                      </a>
                      <a className="btn btn-white DTTT_button_xls" id="ToolTables_table-2_2">
                        <span>Excel</span>
                        <div className='medicine-sales-serachbar-container'>
                          <embed id="ZeroClipboard_TableToolsMovie_3" src="assets/js/datatables/copy_csv_xls_pdf.swf" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="56" height="31" name="ZeroClipboard_TableToolsMovie_3" align="middle" allowscriptaccess="always" allowfullscreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="id=3&amp;width=56&amp;height=31" wmode="transparent"/>
                          </div>
                          </a>
                          <a class="btn btn-white DTTT_button_pdf" id="ToolTables_table-2_3">
                            <span>PDF</span>
                            <div className='medicine-sales-serachbar-container'>
                              <embed id="ZeroClipboard_TableToolsMovie_4" src="assets/js/datatables/copy_csv_xls_pdf.swf" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="47" height="31" name="ZeroClipboard_TableToolsMovie_4" align="middle" allowscriptaccess="always" allowfullscreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="id=4&amp;width=47&amp;height=31" wmode="transparent"/>
                              </div>
                              </a>
                              <a className="btn btn-white DTTT_button_print" id="ToolTables_table-2_4" title="View print view">
                                <span>Print</span>
                              
                                </a>
                                
                                </div>
                                
                                </div>
                                
                                
                                    </div>
                                    <div>
                                  <label className="d-flex">Search: 
                                    <input type="text"
                                    placeholder="Search by name..."
                                    value={searchInput}
                                    onChange={handleSearchChange} />
                                    </label>
                                    </div>               
                </div>
                
                <div>
                

                </div>
                

              </div>
              <div>
              <table class="table table-bordered table-striped datatable dataTable" id="table-2" aria-describedby="table-2_info">
              <thead>
        <tr role="row">
            <th class="sorting_asc" role="columnheader" tabindex="0" aria-controls="table-2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="#: activate to sort column descending">#</th>
            <th class="sorting" role="columnheader" tabindex="0" aria-controls="table-2" rowspan="1" colspan="1" aria-label="Medicines: activate to sort column ascending">Medicines</th>
            <th class="sorting" role="columnheader" tabindex="0" aria-controls="table-2" rowspan="1" colspan="1" aria-label="Total Price: activate to sort column ascending">Total Price</th>
            <th class="sorting" role="columnheader" tabindex="0" aria-controls="table-2" rowspan="1" colspan="1" aria-label="Patient: activate to sort column ascending">Patient</th>
            <th class="sorting" role="columnheader" tabindex="0" aria-controls="table-2" rowspan="1" colspan="1" aria-label="Options: activate to sort column ascending">Options</th>
            </tr>
    </thead>


                
              <tbody>
                 {/* Display your data in a formal way */}
                    {filteredData.map((item,index) => (
                        <tr key={index}>
                          <td className="sorting_1">{item.no}</td>
                          <td className="sorting_1">{item.medicines}</td>
                          <td className="sorting_1">{item.totalPrice}</td>
                          <td className="sorting_1">{item.patient}</td>
                          
                          <td>
                            <div className='d-flex'>
                              <button className='btn btn-warning btn-edit btn-edit-1'onClick={handleUpdate}
                              >Edit

                              </button>
                              <button className='btn btn-danger btn-edit btn-edit-2'
                              >Delete
                                
                              </button>
                            </div>
                          </td>
                        </tr>
                        

                      ))}
                  
                   
                  
                

              </tbody>

                  </table>
                  
                  
          </div>
          <hr className='dashboard-container-header-line' /> 
                <DashboardFooter />

            </div>
            
            </div>
            
            
            </div>
            </div>
    
)
  
};

export default MedicineSales;
