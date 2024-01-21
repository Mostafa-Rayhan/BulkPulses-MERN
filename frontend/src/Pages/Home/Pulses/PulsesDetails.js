import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthPro/AuthPro";
import { base } from "../../../others/api";
import ToastSuccess from "../../../others/toast";

const PulsesDetails = () => {
  const { user, refresh, setRefresh } = useContext(AuthContext);
  const puls = useLoaderData();
  const { _id, productName, Detail, image2, price, image } = puls;

  const hendleCart = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName;
    const price = puls.price;
    const productName = puls.productName;
    const quantity = form.quantity.value;
    const phone = form.phone.value;
    const email = user?.email;
    const image = puls.image;

    const Cart = {
      name,
      price,
      productName,
      quantity,
      phone,
      email,
      image,
    };

    const p = quantity * price;

    fetch(`${base}/CartProduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Cart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          ToastSuccess("Added to cart successfully");
          setRefresh(!refresh);
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  const getInitialState = () => {
    const value = "";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className=" lg:stats  ">
      <div className="hero min-h-screen  ">
        <div className="hero-content flex-col">
          <form onSubmit={hendleCart}>
            {/* <img src={image2} className="max-w-full rounded-lg shadow-2xl" /> */}
            {Array.isArray(image2) ? (
              <img
                src={`${base}/${image2[0]}`}
                alt="Pulse"
                className="max-w-full rounded-lg shadow-2xl" 
              />
            ) : (
              <img src={image2} alt="Pulse" className="max-w-full rounded-lg shadow-2xl" />
            )}

            <h1 className="text-5xl font-bold mt-5">{productName}</h1>
            <p className="py-6">{Detail}</p>
            <p className="py-6 font-bold ">Price(kg): {price} tk</p>

            <div className="">
              <input
                value={value}
                onChange={handleChange}
                name="quantity"
                placeholder="Quantity(kg)"
                className="input input-bordered w-96 max-w-xs  bg-gray-100 text-black "
              />

              {/* <p>{`You selected ${value * price}`}</p> */}
            </div>
            <br />
            <div className="">
              <input
                name=""
                value={`${value * price} TK`}
                className="input input-bordered w-96 max-w-xs  bg-gray-100 text-black "
              />

              {/* <p>{`You selected ${value * price}`}</p> */}
            </div>
            <br />
            <div className="">
              <input
                name="phone"
                type="phone"
                placeholder="Phone"
                className="input input-bordered w-96 max-w-xs  bg-gray-100  "
                required
              />
            </div>
            <br />
            <div className="">
              <input
                name="Address"
                type="text"
                placeholder="Address"
                className="input input-bordered w-96 max-w-xs  bg-gray-100  "
                required
              />
            </div>
            <div className="mt-3">
              <span className="label-text  ">
                Add to the cart & confirm your order.{" "}
              </span>{" "}
              <br />
              <button className="btn mt-2   w-full max-w-xs drop-shadow-lg mb-10 btn-neutral ">
                Add to Catr
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PulsesDetails;
