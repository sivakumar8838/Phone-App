import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Phones.css';

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-12">
          <div className="phone-image">
            <div className='i'>
            <img src={phone.img} alt={phone.name} 
            className="img-fluid" />
        
            </div>
            <button>Add to Card</button>  <button class="button">
    <svg
      viewBox="0 0 16 16"
      class="bi bi-lightning-charge-fill"
      fill="currentColor"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
      ></path></svg
    >Buy Now
  </button>
          </div>
         
        </div>
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="phone-details">
            <h4>{phone.name}</h4>
            <h3>₹ {phone.price}  <del className='del
            '>₹ 25,000</del> <p className='p'>31% off</p></h3>

            <div className='Highlights'>
              <h2>Highlights:</h2>
              <ul className='ul'>
                {phone.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className='Features1'>
              <h2>Features:</h2>
              <ul className='Features'>
                {phone.features.map((feature, index) => (
                  <li key={index} className="spec-item">
                     <p className="spec-name">{feature.name}</p>
                    <div className="spec-description">{feature.description}</div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className='Specifications1'>
  <h2>Specifications:</h2>
  <ul className='Specifications'>
    {phone.Specifications.map((spec, index) => (
      <li key={index} className="spec-item">
        <div className="spec-name">{spec.name}</div>
        <div className="spec-description">{spec.description}</div>
      </li>
    ))}
  </ul>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phones;