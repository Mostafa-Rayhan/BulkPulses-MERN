import React from 'react';
import { Link } from 'react-router-dom';

const Puls = ({ puls }) => {
    console.log("pul", puls);
    const { _id, productName, Detail, image, price } = puls;
    return (
        <div className=''>

            <div className='  lg:grid lg:grid-cols-2 lg:gap-10 lg:p-5 stats'>
                <Link to={`${_id}`}>
                    <div className="card w-96   shadow-xl bg-gray-200 m-3">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{productName}</h2>
                            <p className=' text-justify truncate'>{Detail}</p>
                            <h2 className="card-title">KG: {price} tk</h2>
                        </div>
                        <figure><img src={image} alt="Shoes" /></figure>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Puls;
