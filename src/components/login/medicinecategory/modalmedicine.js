// import React, { useState } from 'react';
// import axios from 'axios';
 import Cookies from 'js-cookie';

// const LoginModal = ({ isOpen, onClose }) => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSave = async () => {
//     try {
//       // Make an API call using Axios or your preferred method
//       const token=Cookies.get("jwt_token");
//       const response = await axios('http://localhost:7777/api/addmedicine', {
//         method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         name: name.name,
//         description: description.description,
//       }),
//       });

//       // Handle the response as needed
//       console.log('Medicine added successfully:',response.data);

//       // Close the modal
//       onClose();
//     } catch (error) {
//       // Handle login error
//       console.error('Login failed', error);
//     }
//   };

//   return (
//     <div className={`modal ${isOpen ? 'open' : ''}`}>
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         <h2>Login</h2>
//         <form>
//           <label>
//             Name
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           <label>
//             Description
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </label>
//           <button type="button" onClick={handleSave}>
//             save
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;

import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    // Define your form fields here
    name: '',
    description: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, description, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [description]:value,
    });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch API POST request
    try {
      const token=Cookies.get("jwt_token");
      const response = await fetch('http://localhost:7777/api/addmedicine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      // Assuming your API returns a JSON object
      console.log('Response from server:', data);

      // Update your UI state or take any other action with the received data
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <br />
      {/* Add more form fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
