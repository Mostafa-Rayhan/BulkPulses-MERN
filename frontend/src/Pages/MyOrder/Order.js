import React from 'react';

const Order = ({ request }) => {
    const { name, price, productName, quantity, phone, email, image, _id, totalprice } = request;

    return (
        <div>
            <div className=' w-full align-middle  bg-gray-100 rounded-lg  my-5 gap-10 '>
                <tbody className=''>
                    {/* row 1 */}
                    <tr>
                        <th>

                        </th>
                        <td>
                            <div className="flex items-center space-x-3 mr-10 lg:w-60">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{productName}</div>
                                    <div className="text-sm opacity-50">Dhaka Savar</div>
                                </div>
                            </div>
                        </td>

                        <td className='lg:w-52'><b>{quantity}</b> kg</td>

                        <td className='lg:w-52'> <b>{totalprice}</b> tk</td>
                        <td className='lg:w-52'> <b>{request?.delivered || "Pending"}</b></td> 

                    </tr>

                </tbody>
            </div>
        </div>
    );
};

export default Order;
