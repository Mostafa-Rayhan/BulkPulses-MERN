import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import downArrow from "../../../New folder/downArrow.png"
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Puls from './Puls';

const Pulses = () => {
    const pulses = useLoaderData()
    console.log("pu", pulses )


    return (
        <div className='stats '>
            <div className='my-16 '>
                <h1 className="text-4xl font-bold text-left lg:mx-14">Available Pulses </h1><br />


                <div className='  grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2   lg:gap-10 lg:m-10 lg:p-5'>


                    {
                        pulses?.map(puls => <Puls
                            key={puls?.id}
                            puls={puls}
                        ></Puls>)
                    }





                </div>

            </div>

        </div>
    );
};

export default Pulses;
