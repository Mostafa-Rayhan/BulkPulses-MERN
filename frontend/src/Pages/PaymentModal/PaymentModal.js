import React from "react";
import { base } from "../../others/api";
import { ToastError } from "../../others/toast";

const PaymentModal = ({ contact }) => {
  const { name, price, productName, quantity, phone, email, image, _id } =
    contact;
  const mainprice = price * quantity;

  // const handleButton = event => {
  //     event.currentTarget.disabled = true;
  //     console.log('button clicked');
  // };

  const handleClick = (event) => {
    event.currentTarget.disabled = true;
    event.preventDefault();
    const price = contact.price;
    const productName = contact.productName;
    const quantity = contact.quantity;
    const phone = contact.phone;
    const email = contact.email;
    const image = contact.image;
    const totalprice = mainprice;

    const Order = {
      name,
      price,
      productName,
      quantity,
      phone,
      email,
      image,
      totalprice,
    };

    fetch(`${base}/OrderProduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("dat", data )
        // if (data.acknowledged) {

          fetch(`${base}/CartProduct/${_id}`, { 
            method: "DELETE",
          })
            .then((res) => res.json())
            .catch((err) => {
                ToastError(err?.message || "Unable to delete from cart")
            });

            window.location.replace(data?.url);
        // }
      })
      .catch((err) => console.log(err));


  };

  return (
    <div>
      <>
        <input type="checkbox" id="bookModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative ">
            <label
              htmlFor="bookModal"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-gray-700 text-white hover:text-black hover:border-black"
            >
              ✕
            </label>
            <div className=" text-center h-20  bg-gray-200  p-4 -mt-6 -mx-6  rounded-t-2xl mb-5">
              <h1 className=" font-bold text-lg ">
                Contact this number to confirm your order
              </h1>

              <span className="label-text text-xs font-bold ">
                +8801779417800 or +8801877380319
              </span>
            </div>

            <div className="form-control w-full max-w-xs mb-1 ">
              <label className="label">
                <span className="label-text font-bold">Product Name :</span>
              </label>
              <h1 className="input input-bordered w-full max-w-xs text-center  bg-gray-100">
                <b>{productName}</b>
              </h1>
            </div>

            <div className="form-control w-full max-w-xs my-2 ">
              <h1 className="input input-bordered w-full max-w-xs  bg-gray-100">
                <span className="mr-20 font-bold">Price:</span> <b>{price}</b>{" "}
                tk
              </h1>
            </div>

            <div className="form-control w-full max-w-xs  ">
              <h1 className="input input-bordered w-full max-w-xs  bg-gray-100">
                <span className="mr-16 font-bold">Quantity:</span>{" "}
                <b>{quantity}</b> kg
              </h1>
            </div>

            <div className="form-control w-full max-w-xs mb-2 ">
              <label className="label">
                <span className="label-text font-bold"></span>
              </label>
              <h1 className="input input-bordered w-full max-w-xs  bg-gray-100">
                <span className="mr-12 font-bold">Total Bill:</span>{" "}
                <b>{mainprice}</b> kg
              </h1>
            </div>

            <div>
              {/* <button onClick={() => hendleDelete(_id)} className=" btn w-full h-10  mb-2 btn-xs bg-white border-none ">
                                <button onClick={handleClick} className=" btn w-full h-10  mb-2 btn-xs bg-white border-none ">
                                    <label onClick={handleButton} className=" bg-white btn w-full h-10 btn-neutral mb-2 btn-xs ">Confirm Order</label>
                                </button>
                            </button> */}
              <button></button>

              <button
                htmlFor="bookModal"
                onClick={handleClick}
                className=" btn w-full h-10 btn-neutral mb-2 btn-xs "
              >
                Confirm Order
              </button>
            </div>

            <div className=" text-xs text-justify">
              <span className="label-text text-red-600   text-xs ">
                <span className="font-bold">Note :</span> Your order will be
                confirmed after you make the payment, without payment your order
                will not be approved !
              </span>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default PaymentModal;
