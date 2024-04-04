import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Phone.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [phone, setPhone] = useState([]);
  const navigate = useNavigate(); 

  const fetchPhoneData = async () => {
    try {
      const response = await axios.get(`https://instaba-1.onrender.com/api/phone`);
      setPhone(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching phone data:', error);
    }
  };

  const handlePhone = async (id) =>{
    try {
      const response = await axios.get(`https://instaba-1.onrender.com/api/phone/${id}`);
      navigate(`/phones/${id}`);
    } catch (error) {
      console.error('Error fetching phone data:', error);
    }
  }

  useEffect(() => {
    fetchPhoneData();
  }, []);

  return (
    <div className='phone-container'>
      {phone && phone.map((res, index) => (
        <div className='card' key={res._id} onClick={() => handlePhone(res._id)}>
          <img src={res.img} alt={res.name} className='img' />
          <h3 className='name'>{res.name}</h3>
          <h5 className='ram'>Ram: {res.ram} | Storage: {res.storage}</h5>
          <h3 className='price'>$ {res.price}</h3>
        </div>
      ))}
    </div>
  );
}

export default Home;
