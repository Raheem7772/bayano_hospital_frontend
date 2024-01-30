import {Routes,Route} from "react-router-dom";
import './App.css';

import Home from "./components/home/home";
import About from "./components/About/about";

import Blog from "./components/blog/blog";
import BlogDetails1 from "./components/blog/blogdetails1";
import BlogDetails2 from "./components/blog/blogdetails2";
import BlogDetails3 from "./components/blog/blogdetails3";
import Login from "./components/login/login";
import DashBoard from "./components/login/dashboard/dashboard";
import MedicineCategory from "./components/login/medicinecategory/medicinecategory";
import ManageMedicine from "./components/login/managemedicine/managemedicine";
import MedicineSales from "./components/login/dashboard/medicinesales/medicinesales";
import PharmacyProfile from "./components/login/pharmacyprofile/pharmacyprofile";
import Payment from "./components/login/dashboard/payment/payment";
import ContactPage from "./components/contact/contact";
import AppointmentPage from "./components/appointment/appoitment";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/auth' element={<Login />} />
        <Route exact path='/auth/dashboard' element={<DashBoard />} />
        <Route exact path='/auth/medicinecategory' element={<MedicineCategory />} />
        <Route exact path='/auth/managemedicine' element={<ManageMedicine />} />
        <Route exact path='/auth/medicinesales' element={<MedicineSales />} />
        <Route exact path='pharmacyProfile' element={<PharmacyProfile />} />
        <Route exact path='/process-payment' element={<Payment />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exeact path='/appointment' element={<AppointmentPage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/blog' element={< Blog/>} />
        <Route exact path="/blog/details1" element={<BlogDetails1 />} />
        <Route exact path="/blog/details2" element={<BlogDetails2 />} />
        <Route exact path="/blog/details3" element={<BlogDetails3 />} />
      </Routes>
      
    </div>
  );
}

export default App;
