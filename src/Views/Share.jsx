import React,{useEffect, useState} from 'react';
import { useLocation,useNavigate } from "react-router-dom";
import ENV from "../Components/Constants";
import "../assets/SCSS/share.scss"
export default function Share() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = decodeURIComponent(queryParams.get("id") || "");
    
    const navigate = useNavigate();
    const [image, setImage] = useState('/cards/g1.png');
    useEffect(() => {
      if (id !='') {
        try {
            fetch(`${ENV.PHP_SERVER}get-image.php?id=${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Network response was not ok.');
            }
          })
          .then(data => {
            if (data.error) {
                // navigate('/');
            }else{
              setImage(`${data.image}`);
            }
          })
          .catch(error => {
            // navigate('/');
          });
      
          } catch (error) {
            // navigate('/');
          }
      }else{
        // navigate('/');
      }
      
    }, [])
    
  return (
    <section className="share-card-container">
    <div className="card" id="card" >
      <img
        src={`${image}`}
        width="100%"
        alt="Eid Mubarak Card"
      />
    </div>
  </section>
  )
}
