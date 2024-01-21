import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../../New folder/Banner.jpg"
const Banner = () => {
    return (
        <div>

            <div className="hero min-h-full w-screen " style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-5xl my-48 ">
                        <h1 className="mb-5  text-5xl font-bold">Contact us for best quality and fresh pulses ...</h1>
                        <p className="mb-5 text-justify">BulkPulse is a wholesale marketplace where you can buy pulses in large quantities and also at a reasonable price. We provide delivery of our pulses in 64 districts of Bangladesh. You will get the best quality and clean pulses from us. To get these best quality pulses, you can order them on our website also you can contact us through our contact number.</p>
                        {/* <div data-aos="zoom-in-up" >

                            <Link to="/Pulses"><button className="btn w-72  m-5 drop-shadow-lg bg-white text-black border-black font-bold">Pulses</button></Link>

                        </div> */} 
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;
