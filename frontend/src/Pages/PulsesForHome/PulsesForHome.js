import React, { useEffect, useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { base } from '../../others/api';
import axios from 'axios';
const PulsesForHome = () => {

    const [ allproducts, setallProducts ] =useState([]);

    useEffect(()=>{
        axios.get(`${base}/Products`)
        .then(res=>{
          setallProducts(res?.data)
        })
        .catch(error=>{
          console.log("err", error);
        })
      },[])
      console.log("palut", allproducts );
    return (
        <div className='stats '>

            <div className='my-16 '>
                <h1 className="text-4xl font-bold text-left lg:mx-14">Pulses </h1><br />


                <div className='  grid lg:grid-cols-3 md:grid-cols-2   lg:gap-10 lg:m-10 lg:p-5'>

                    {allproducts?.map(a=>{
                        return (
                            <Link key={a?._id} to={`/Pulses/${a?._id}`}>
                            <div className="card w-96 shadow-xl bg-gray-200 m-3">
                                <div className="card-body">
                                    <h2 className="card-title">{a?.productName}</h2>
                                    <p className=' text-justify'>{a?.Detail}</p>
                                </div>
                                <figure>
                                    {
                                        a?.image?.includes("i.ibb.co") ?
                                        <img src={a?.image} alt="Pulse" className=' w-full max-h-64' />
                                        :
                                        <img src={`${base}/${a?.image}`} alt="Pulse" className=' w-full max-h-64' />
                                    }

                                    </figure> 
                            </div>
                        </Link>
                        )
                    })}







                </div>
                {/* <Link to="/Pulses"><button className="btn w-full    drop-shadow-lg bg-white border-white font-bold"><FontAwesomeIcon className=' h-6' icon={faChevronDown} /></button></Link> */}
            </div>

        </div>
    );
};

export default PulsesForHome;
