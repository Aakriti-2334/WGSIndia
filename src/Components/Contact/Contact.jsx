import React, { useEffect } from 'react';
import linkedinIcon from '../../assets/linkedin_logo.png'

import './Contact.css';

/* const ContactForm = () => {
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
                    result.innerHTML = "An error occurred. Please try again.";
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
    }, []); */
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
        <div className="body-container">



                <div className="card1">



                        <h2>Contact Information</h2>


                        


                            


                                <div className="content">


                                    <p><strong>WGS Interior Products Pvt Ltd</strong></p>
                                    <p>480, 2nd Floor, 2nd Cross, 2nd Main, Near BDA Complex, Indiranagar, Bangalore -560038</p>
                                    <p><strong>Email:</strong> commercials@wgsindia.in</p>




                                    <p><strong>Monday - Friday:</strong> 9am - 5pm</p>
                                    <p><strong>Saturday:</strong> 10am - 4pm</p>
                                    <p><strong>Sunday:</strong> Closed</p>
                                    <div className='lineincontact'></div>
                                    <p><strong>Experience Centre</strong></p>

        <p>WGS Design Studio

#3349, 12th Main Road,

5th Cross, Indiranagar 2nd Stage

Bangalore -560008</p>


                                    <a href="https://www.linkedin.com/company/wgs-interior-products-private-limited/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                                        <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" style={{ width: '18px', height: '18px', marginTop: '10px' }} />
                                    </a>
                                
                                
                               
                            
                            
                            </div> {/* content div ends here */}


                        
                    






                </div> {/* card div ends here */}
 

            
                <div className="card2">
                    <div className="card-content">
                        {/* <h2>Get in touch with us!</h2> */}
                        <form id="form">
                            <input type="hidden" name="access_key" value="1d8bf373-f885-4dba-afae-da3f44d00450" />
                            <input type="text" name="name" required placeholder="Your Name" />
                            <input type="email" name="email" required placeholder="Your Email" />
                            <input type="tel" name="phone" placeholder="Your Phone Number (optional)" />
                            <textarea name="message" required placeholder="Your Message"></textarea>
                            <button type="submit">Submit</button>
                            <div id="result"></div>
                        </form>
                    </div>{/* card-content ends here */}
                </div> {/* card div ends here */}
           
            
        </div>
    );
};
export default ContactForm;