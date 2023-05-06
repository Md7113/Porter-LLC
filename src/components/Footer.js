import React from 'react';
import '../css/components/Footer.css';
import Facebook from '../images/facebook.svg';
import LinkedIn from '../images/linkedIn.svg';
import Email from '../images/email.svg';

const Footer = () => {
  return (
    <div className="businessContactInfo">
						<div>
							<span>Northern California: </span>
							<p> 149 Parkshore </p>
							<p>Drive Folsom, CA 95630</p>
						</div>
						<div>
							<span>Bay Area: </span>
							<p>388 Market Street Suite 1300,</p>
							<p> San Francisco, CA 94111</p>
						</div>
						<div>
							<span>Southern California:</span>{' '}
							<p>516 N Sepulveda Blvd </p>
							<p> Manhattan Beach, CA 90266</p>
						</div>
						<div>
							<a className="aTag" href="https://www.facebook.com/porterllc" target="_blank">
								<img src={Facebook} alt="facebook icon" />
							</a>
							<a className="aTag" href="https://www.linkedin.com/company/porterconsultingllc/?original_referer=https%3A%2F%2Fwww.porterllc.com%2F" target="_blank">
								<img src={LinkedIn} alt="LinkedIn icon" />
							</a>
							<a className="aTag" href="mailto:info@porterllc.com">
								<img src={Email} alt="email icon" />
							</a>
						</div>
					</div>
  )
}

export default Footer;