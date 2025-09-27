import React, { useEffect } from 'react';
import './ContactUs.css';
import linkedinIcon from '../../assets/linkedin_logo.png';
import contactusmap from '../../assets/Contact/contactusmap.jpg';

const ContactForm = () => {
    useEffect(() => {
        const handleFormSubmit = () => {
            const form = document.getElementById('form');
            const result = document.getElementById('result');

            form.addEventListener('submit', function(e) {
                e.preventDefault();

                const email = form.querySelector('input[name="email"]').value;
                if (!isValidEmail(email)) {
                    result.innerHTML = "Please enter a valid email address.";
                    return;
                }

                const formData = new FormData(form);
                const object = Object.fromEntries(formData);
                const json = JSON.stringify(object);

                result.innerHTML = "Please wait...";

                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status === 200) {
                        result.innerHTML = json.message;
                    } else {
                        console.log(response);
                        result.innerHTML = json.message;
                    }
                })
                .catch(error => {
                    console.log(error);
                    result.innerHTML = "...";
                })
                .then(function() {
                    form.reset();
                    setTimeout(() => {
                        result.style.display = "none";
                    }, 3000);
                });
            });
        };

        const isValidEmail = (email) => {
            const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return re.test(email);
        };

        handleFormSubmit();
    }, []);

      
return (
        <div className="body-container-cf container">
            
            <div className="content-wrapper-cf">
                <div className="card-cf">
                    <div className="card-content-cf">
                        <h2>Get in touch with us!</h2>
                        <form id="form" className="form-cf">
                            <input type="hidden" name="access_key" value="1d8bf373-f885-4dba-afae-da3f44d00450" />
                            <input type="text" name="name" required placeholder="Your Name" />
                            <input type="email" name="email" required placeholder="Your Email" />
                            <input type="tel" name="phone" placeholder="Your Phone Number (optional)" />
                            <textarea name="message" required placeholder="Your Message"></textarea>
                            <button type="submit">Submit</button>
                            <div id="result"></div>
                        </form>
                    </div>
                </div>
                <div className="card-cf">
                    <div className="card-content-cf">
                        <h2>Contact Details</h2>
                        <div className="parent-div-cf">
        <div className="sub-div-cf dark-overlay-cf">
            <div className="content">
                <div className="card-cf">
                    <div className="card-content-cf">
                        <div className="contact-section-cf">
                            <div className="contact-sub-card-cf">
                                <p><strong>Name:</strong> Ajit Mishra</p>
                                <p><strong>Contact:</strong> +91 7259999944</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sub-div-cf dark-overlay-cf">
            <div className="content">
                <div className="card-cf">
                    <div className="card-content-cf">
                        <div className="contact-section-cf">
                            <div className="contact-sub-card-cf">
                                <p><strong>Name:</strong> Ajay Sharma</p>
                                <p><strong>Contact:</strong> +91 9845614014</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


                    </div>
                </div>
                <div className="card-cf">
                    <div className="card-content-cf">
                        <h2>Location</h2>
                        <a href="https://www.google.com/maps/place/WGS+Interior+Products+Pvt+Ltd/@12.9812386,77.6338259,17z/data=!3m2!4b1!5s0x3bae16bac8133401:0xdda9b1dcea8397c!4m6!3m5!1s0x3bae16bb66eae359:0xb552a8e9fe4831ab!8m2!3d12.9812334!4d77.6364008!16s%2Fg%2F11l68tk4pr?entry=ttu" target="_blank" rel="noopener noreferrer">
                            <img src={contactusmap} alt="map" className="map-cf" />
                        </a>
                    </div>
                </div>
                <div className="card-cf">
                    <div className="card-content-cf">
                        <h2>Contact Information</h2>
                        <div className="parent-div-cf">
                            <div className="sub-div-cf dark-overlay-cf">
                                <div className="content">
                                    <p><strong>WGS Interior Products Pvt Ltd</strong></p>
                                    <p>480, 2nd Floor, 2nd Cross, 2nd Main, Near BDA Complex, Indiranagar, Bangalore -560038</p>
                                      <br/>
                                    <p><strong>Experience Centre</strong></p>
                                    <p>WGS Design Studio #3349, 12th Main Road, 5th Cross, Indiranagar 2nd Stage Bangalore -560008</p>
                                    <p><strong>Email:</strong> commercials@wgsindia.in</p>
                                            <br/>
                                    <p><strong>Monday - Friday:</strong> 9am - 5pm</p>
                                    <p><strong>Saturday:</strong> 10am - 4pm</p>
                                    <p><strong>Sunday:</strong> Closed</p>
                                    <p><a href="https://www.linkedin.com/company/wgs-interior-products-private-limited/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                                        <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon-cf" style={{ width: '18px', height: '18px', marginTop: '10px' }} />
                                    </a></p>
                                </div>
                            </div>
                           {/*  <div className="sub-div-cf dark-overlay-cf">
                                <div className="content">
                                    
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ContactForm;