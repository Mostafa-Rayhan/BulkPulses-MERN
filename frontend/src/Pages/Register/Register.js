import React, { useContext, useEffect } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import {} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Context/AuthPro/AuthPro";
import image from "../../New folder/image.png";
import googleLogo from "../../New folder/google logo.png";
import { ToastError } from "../../others/toast";

const Register = () => {
  const { creatUser, updateUser, signInWithGoogle, loading, user } =
    useContext(AuthContext);
  console.log(creatUser);
  const location = useLocation();
  const fromLocat = location.state?.fromLocat?.pathname || "/";
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  const userDetail = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    creatUser(email, password, name)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            navigate(from, { replace: true });
          })
          .catch((err) => {
            console.log(err)
            ToastError(err|| "something wrong")
          });
        console.log("User:", user);
        form.reset();
        // navigate(fromLocat, { replace: true });
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(fromLocat, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  // if (loading) {
  //     return <div><Loading></Loading></div>
  // }

  return (
    <div className=" lg:my-20 stats ">
      <div className="hero lg:py-5 ">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className=" rounded-lg mb-20"
        >
          <div className="hero-overlay bg-opacity-60 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse  lg:p-10 rounded-md shadow-2xl ">
              <div className="text-center ">
                <h1 className="text-5xl font-bold mb-5 text-white">
                  Signup now!
                </h1>
                <p className="py-6 lg:px-6 text-white text-justify">
                  BulkPluses is a wholesale marketplace where you can buy pulses
                  in large quantities and also at a reasonable price. We provide
                  delivery of our pulses in 64 districts of Bangladesh. You will
                  get the best quality and clean pulses from us. To get these
                  best quality pulses, you can order them on our website also
                  you can contact us through our contact number.
                </p>
              </div>

              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <Form onSubmit={userDetail} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered bg-gray-50  "
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered bg-gray-50  "
                      required
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
                      className="input input-bordered bg-gray-50   "
                      required
                    />
                    <label className="label"></label>
                  </div>

                  <div className="form-control mt-3">
                    <button className="btn btn-neutral  ">Signup</button>
                  </div>
                  <div className="form-control mt-2">
                    <button
                      onClick={handleGoogleSignIn}
                      className="btn    font-bold  "
                    >
                      Signup With Google
                      <img
                        src={googleLogo}
                        alt="google logo"
                        className=" h-6 ml-6"
                      />
                    </button>
                  </div>
                  <div>
                    <label className="label mt-2">
                      <span className="label-text ">I have an account !</span>
                      <Link to="/Login" className=" text-red-600">
                        Login now
                      </Link>
                    </label>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
