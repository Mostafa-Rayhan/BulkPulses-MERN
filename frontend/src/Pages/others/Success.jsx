import React from 'react';

const Success = () => {
    return (
        <div className='  w-full  flex items-center justify-center'>
         <div>
         <h3 className=' mt-16 mb-6  text-3xl font-bold text-green-500'>Your order successfully placed</h3>
            <a href='/Pulses' className='   text-blue-500 underline  '>See More Pulses</a>
         </div>
        </div>
    );
};

export default Success; 
