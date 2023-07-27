import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserForm: React.FC = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phoneNumber, email } = userInfo;

    // Validation: Ensure all fields are filled
    if (!name || !phoneNumber || !email) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Validation: Check phone number format
    const phoneNumberRegex = /^\d{10}$/; // Regex for 10-digit phone number
    if (!phoneNumber.match(phoneNumberRegex)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    // Validation: Check email format
    const emailRegex = /^\S+@\S+\.\S+$/; // Basic email format validation
    if (!email.match(emailRegex)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Save user information into local storage
    const userDetails = {
      name,
      phoneNumber,
      email,
    };

    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // if all details are given redirect the user to the second page
    navigate('/second-page');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={userInfo.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
