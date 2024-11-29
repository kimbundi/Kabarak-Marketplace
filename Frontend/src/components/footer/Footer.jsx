import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p> Welcome to kabarak marketplace, your trusted marketplace for high-quality second-hand items. We believe in sustainability and offering affordable alternatives while promoting the reuse and recycling of goods. Whether you're looking for pre-loved treasures or giving your items a second life, we’re here to make it easier. </p>


            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                
                <li><a href='tel:+254745517657'>craftcodedesigners@gmail.com</a></li>
            </ul>
        </div>
     </div>
     <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; craftcodedesigners.com - All Right Reserved.

      </p>
    
    </div>
    

  )
}

export default Footer