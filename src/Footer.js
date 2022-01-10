import React from 'react'
import './Footer.css'
import facebookIcon from './image/facebook.svg'
import twitterIcon from './image/twitter.svg'
import instagramIcon from './image/instagram.svg'
function Footer() {
    return (
        <div className='footer'>
        <div className='footer__Links'>
         
            <ul className="foooter__Support">
                <li  className='title'>Support</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
            </ul>
            <ul className="foooter__Community">
            <li className='title'>Community</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
            </ul>
            <ul className="foooter__Hosting">
            <li className='title'>Hosting</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
            </ul>
            <ul className="foooter__About">
            <li className='title'>About</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
            </ul>
        </div>

        <div className="footer__Social">
            <div className="footer__SocialLeft">
                2021 Airbnb Inc
            </div>
            <div className="footer__SocialRight">
<img src={facebookIcon} alt="" />
<img src={twitterIcon} alt="" />
<img src={instagramIcon} alt="" />
            </div>
        </div>
        </div>
    )
}

export default Footer
