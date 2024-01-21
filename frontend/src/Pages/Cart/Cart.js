import React, { useContext, useEffect, useState } from 'react';
import SingleCart from './SingleCart';
import { AuthContext } from '../../Context/AuthPro/AuthPro';
import PaymentModal from '../PaymentModal/PaymentModal';
import { base } from '../../others/api';

const Cart = () => {

    const { user } = useContext(AuthContext)
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch(`${base}/CartProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => setCart(data)) 
    },)

    const [payContact, setpayContact] = useState(null);

    return (
        <div>
            <h1 className=' text-xl font-bold'>My cart</h1>
            <div className='stats h-full mb-32 pt-10 '>

                <div className="overflow-x-auto">
                    <table className="table">



                        {
                            cart.map(request => <SingleCart

                                key={request._id}
                                request={request}
                                setCart={setCart}
                                setpayContact={setpayContact}

                            ></SingleCart>)
                        }
                        {
                            payContact &&
                            <PaymentModal contact={payContact} setdonorContact={setpayContact} ></PaymentModal>

                        }



                    </table>
                </div>

            </div>
        </div>
    );
};

export default Cart;
