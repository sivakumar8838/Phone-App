import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Phones.css'
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
    <div className='phone1-container'>
      <div className='card1'>
      <div className='img2'>
        <img src={phone.img} alt={phone.name} 
        className='img1'/>
        <div className='price1'>

          <div className='n'>
          <h4 className='name1'>{phone.name}</h4>
          <h2>$ : {phone.price} 25,000 31% off</h2>
          </div>

          <div className='highlights'>
          <p>
          <h2>Higlights : </h2> {phone.highlights}</p>
          </div>

          <h2>Features :</h2>
         <div className='Features'>
          <p>{phone.features.map((res)=> (
          <p><h4 className='h4'>{res.name}</h4> : {res.description}</p>
         ))}</p>
              </div>

          <h2>Specification :</h2>
          <div className='Specification'>
          <p>{phone.Specifications.map((res)=> (
          <p><h4 className='h4'>{res.name}</h4> : {res.description}</p>
         ))}</p>
         </div>
        
          </div>
        </div>
       
        
         
      </div>
    </div>
  );
}

export default Phones;
