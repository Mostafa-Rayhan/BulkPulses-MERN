import React, { useContext } from 'react';
import { base } from '../../others/api';
import { AuthContext } from '../../Context/AuthPro/AuthPro';

const SingleCart = ({ request, setpayContact }) => {
    const { name, price, productName, quantity, phone, email, image, _id } = request;
    const { setRefresh, refresh } = useContext(AuthContext);
    const mainprice = price * quantity;

    const hendleDelete = request => {
        const agree = window.confirm(`Are you sure you want to delete: ${name}`)

        if (agree) {
            fetch(`${base}/CartProduct/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setRefresh(!refresh) 
                })
        }

    }

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

                        <td className='lg:w-52'>Quantity: <b>{quantity}</b>  kg</td>

                        <td className='lg:w-52'>Price:<b> {mainprice} </b> tk</td>
                        <th className=''>

                            <label htmlFor="bookModal" className="btn w-36 h-8 btn-neutral btn-xs lg:mx-5" onClick={() => setpayContact(request)}>Confirm Order</label>

                        </th>
                        <th className=''>
                            <button onClick={() => hendleDelete(_id)} className="btn w-8 h-8 btn-neutral rounded-full btn-xs lg:mx-10">X</button>
                        </th>
                    </tr>

                </tbody>
            </div>
        </div>

    );
};

export default SingleCart;
