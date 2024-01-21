import React from 'react';
import logo1 from "../../New folder/fb.png"
import logo2 from "../../New folder/gmail.png"
import logo3 from "../../New folder/linkdin.png"
import logo4 from "../../New folder/call.png"
import Contactimage from "../../New folder/CONTACT.jpg"
const Contact = () => {
    return (
        <div>

            <h1>Contact us via any means where you feel comfortable communicating with us.</h1>
            <div className="">
                <img className=' h-96 w-full' alt="daisy" src={Contactimage} />
            </div>
            <div className=' stats  h-screen mt-5 lg:mt-20 text-center '>
                <div className='lg:mt-20 lg:flex lg:gap-x-20 mx-1 lg:mx-20 grid'>
                    <div >
                        <a target='_blank' href="https://www.facebook.com/sk.shovonroy/"><img src={logo1} alt="" className='h-20 w-20 ' /></a>

                        {/* <p ><b>google</b></p> */}
                    </div>
                    <div >
                        <a target='_blank' href="tel:+8801725061888"><img src={logo4} alt="" className='h-20 w-20 ' /></a>
                        {/* <p ><b>Phone</b></p> */}
                    </div>

                    <div >
                        <a target='_blank' href="https://bd.linkedin.com/"><img src={logo3} alt="" className='h-20 w-20 ' /></a>
                        {/* <p ><b>Linkdin</b></p> */}
                    </div>

                    <div >
                        <a target='_blank' href="https://mail.google.com/"><img src={logo2} alt="" className='h-20 w-20 ' /></a>

                        {/* <p ><b>Gmail</b></p> */}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Contact;