import './dashboardfooter.css';

const DashboardFooter = () =>{

    return(
        <>
        <div className="row">
      
      <div className="col-12 mt-1 mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <i className="fa-regular fa-copyright bayanno-admin-footer-copyright-icon"></i>
            <p className="bayanno-admin-footer-copyright-text">
              2023{" "}
              <span className="bayanno-admin-footer-copyright-hospital-name">
                <b>Bayanno Hospital Management System</b>
              </span>{" "}
              Developed by{" "}
              <span className="bayanno-admin-footer-copyright-hospital-name">
                <b>Shaik Raheem</b>
              </span>
            </p>
          </div>
          <p className="bayanno-admin-footer-version-text"><b>VERSION 4.0</b></p>
        </div>
      </div>
    </div>
        </>
    )
}

export default DashboardFooter;