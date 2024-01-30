import DashboardFooter from '../dashboard/dashboardfooter/dashboardfooter';
import Sidebar from '../dashboard/sidenavbar/sidenavbar';
import DashboardHeader from '../dashboardheader/dashboardheader';
import './pharmacyprofile.css';


const PharmacyProfile = () =>{
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
                      Profile
                      </h3>
                    </div>
                  </div>
                  </div>
                  <div class="col-md-12">

            <div className="panel panel-primary" data-collapsed="0">

                <div className="panel-body">

                    <form role="form" className="form-horizontal form-groups"  method="post" enctype="multipart/form-data">

                        <div className="form-group">
                            <label for="field-1" className="col-sm-3 control-label">Name</label>

                            <div className="col-sm-5">
                                <input type="text" name="name" class="form-control" id="field-1" value="Jennifer Lopez" required=""/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="field-1" class="col-sm-3 control-label">Email</label>

                            <div className="col-sm-5">
                                <input type="email" name="email" className="form-control" id="field-1" value="pharmacist@example.com" required=""/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="field-ta" class="col-sm-3 control-label">Address</label>

                            <div className="col-sm-5">
                                <textarea name="address" className="form-control " id="field-ta">Some address</textarea>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="field-1" className="col-sm-3 control-label">Phone</label>

                            <div className="col-sm-5">
                                <input type="text" name="phone" className="form-control" id="field-1" value="1234567"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">Image</label>

                            <div className="col-sm-2">

                                <div className="fileinput fileinput-new" data-provides="fileinput"><input type="hidden"/>
                                    <div className="fileinput-new thumbnail" data-trigger="fileinput">
                                        <img src="https://demo.creativeitem.com/bayanno/uploads/user.jpg" alt="..." />
                                    </div>
                                    
                                    <div>
                                        <span className="btn btn-white btn-file">
                                            
                                            <input type="file" name="image" accept="image/*"/>
                                        </span>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>

                        
                    </form>

                </div>

            </div>

        </div>
                    <hr className='dashboard-container-header-line' /> 
                <DashboardFooter />
                    </div>
                    
                    </div>
                    </div>
        </>
    )
}

export default PharmacyProfile;