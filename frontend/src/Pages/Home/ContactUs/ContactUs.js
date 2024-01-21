import axios from "axios";
import React from "react";
import { base } from "../../../others/api";
import ToastSuccess, { ToastError } from "../../../others/toast";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const body = {
      email: target?.email?.value,
      feedback: target?.feedback?.value,
    };

    console.log("body", body );
    axios
      .post(`${base}/feedback`,body)
      .then((res) => {
        console.log("res", res);
        ToastSuccess("Succesfully sent feedback") 
      })
      .catch((error) => {
        console.log("err", error);
        ToastError(error?.message || "Something error")
      });
  };
  return (
    <div>
      <div data-aos="fade-up" className="stats w-full max-w-7xl mt-16">
        <form
          className=" bg-gray-100 p-5 stats-vertical"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold my-3 text-left">Feedback</h1>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-sm my-2 input-bordered  w-full max-w-2xl  mx-4 drop-shadow-md"
          />
          <br />

          <textarea
            placeholder="Feedback"
            name="feedback"
            className="textarea textarea-bordered my-2  textarea-lg w-full py-8 max-w-2xl drop-shadow-md"
          ></textarea>
          <br />

          <button
            type="submit"
            className="btn w-full max-w-xs drop-shadow-lg m-5 btn-neutral"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
