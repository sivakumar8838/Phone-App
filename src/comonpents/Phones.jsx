import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Phones() {
  const [phone, setPhone] = useState(null);
  const { id } = useParams();

  const fetchPhoneData = async (id) => {
    try {
      const response = await axios.get(`https://instaba-1.onrender.com/api/phone/${id}`);
      setPhone(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching phone data:', error);
    }
  };

  useEffect(() => {
    fetchPhoneData(id);
  }, [id]);

  if (!phone) {
    return <div>Loading...</div>;
  }

  return (
    <div className='phone-container'>
      <div className='card'>
      
        <img src={phone.img} alt={phone.name} 
        className='img' />
         <h1 className='name'>{phone.name}</h1>
         <p>{phone.Specifications.map((res)=> (
          <p><h4 className='h4'>{res.name}</h4> :{res.description}</p>
         ))}</p>
      </div>
    </div>
  );
}

export default Phones;
