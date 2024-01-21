import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import image from "../../New folder/image.png";
import { AuthContext } from "../../Context/AuthPro/AuthPro";
import googleLogo from "../../New folder/google logo.png";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { base } from "../../others/api";
import { ToastError } from "../../others/toast";

const AdminLogin = () => {
  const { signIn, signInWithGoogle, loading } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loginError, setLoginError] = useState("");
  const [btnLoading, setbtnLoading] = useState(false);
  const navigate=useNavigate()

  const userLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    axios.get(`${base}/Admin`)
    .then(res=>{
        console.log("res", res);
        const getUser=res?.data?.find(u=>u?.email===email && u?.password===password)
        if(getUser){
            localStorage.setItem("admin", JSON.stringify(getUser))
            navigate("/dashboard")
        }
        else {
            ToastError("User not found")
        }
    })
    .catch(err=>{
       ToastError( err?.message || "Something error")
    })
  }; 



  return (
    <div className=" lg:my-20  stats lg:py-5">
      <div className="hero  ">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className=" rounded-lg mb-20"
        >
          <div className="hero-overlay bg-opacity-60 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse  lg:p-10 rounded-md shadow-2xl ">
              <div className="text-center w-80w-80">
                <h1 className="text-5xl font-bold mb-5 text-white">
                  Login now!
                </h1>
                <p className="py-6 lg:px-6 text-white text-justify">
                  BalkPulses is a wholesale marketplace where you can buy pulses
                  in large quantities and also at a reasonable price. We provide
                  delivery of our pulses in all over Bangladesh. You will get
                  the best quality and clean pulses from us. To get these best
                  quality pulses, you can order them on our website also you can
                  contact us through our contact number.{" "}
                </p>
              </div>

              <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                <Form onSubmit={userLogin} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered "
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered "
                    />

                  </div>
                  <div className="form-control mt-4">
                    {/* <button className="btn btn-neutral">Login</button>  */}
                    <LoadingButton
                      loading={btnLoading}
                      variant="contained"
                      type="submit"
                    >
                      Submit
                    </LoadingButton>
                  </div>
                  {/* <div className="form-control mt-5">
                                        <button onClick={handleGoogleSignIn} className="btn ">Login With Google <img src={googleLogo} alt="google logo" className=' h-6 ml-6' /></button>
                                    </div> */}
                  {/* <div>
                                        {
                                            loginError && <p className="text-red-500">{loginError}</p>
                                        }
                                    </div> */}
                  {/* <div>
                                        <label className="label mt-4">
                                            <span className="label-text ">I don't have any account !</span>
                                            <Link to='/Register' className=' text-red-600'>Creat new account</Link>
                                        </label>

                                    </div> */}
                </Form>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
