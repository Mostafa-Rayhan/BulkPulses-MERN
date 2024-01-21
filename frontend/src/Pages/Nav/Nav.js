import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowRight,
  faCartShopping,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Context/AuthPro/AuthPro";

import avatar from "../../New folder/avatar.gif";
import { base } from "../../others/api";

const Nav = () => {
  const { user, logOut, refresh } = useContext(AuthContext);
  // console.log(user?.displayName);
  // var name = user?.displayName.split(" ").splice(-1)[0];
  // console.log(name);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`${base}/CartProduct/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setCart(data));
    }
  }, [refresh, user]);


  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="mb-20">
      <div className="navbar bg-gray-200  fixed top-0 z-50 ">
        <div className="navbar-start ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <Link to="/">
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link to="/Pulses">
                <li>
                  <a>Pulses</a>
                </li>
              </Link>
              <Link to="/About">
                <li>
                  <a>About</a>
                </li>
              </Link>
              <Link to="/Contact">
                <li>
                  <a>Contact</a>
                </li>
              </Link>
              <Link to="/dashboard">
                <li>
                  <a>Admin Login</a>
                </li>
              </Link>

              <Link to="/Cart">
              <li className="relative ">
                <a className=" text-center rounded-b-lg ">
                  {" "}
                  <span className="relative"> 
                    <FontAwesomeIcon className="" icon={faCartShopping} />
                    <p className="absolute top-[-13px] right-[-10px] font-semibold   text-blue-600 ">{cart?.length || 0}</p>

                  </span>

                </a>
              </li>
              </Link>
            </ul>
          </div>
          <Link to="/">
            <a className="  normal-case text-3xl  ml-5 font-bold">BulkPulses</a>
          </Link>
        </div>

        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 font-bold">
            <Link to="/">
              <li>
                <a className="">Home</a>
              </li>
            </Link>
            <Link to="/Pulses">
              <li>
                <a>Pulses</a>
              </li>
            </Link>
            <Link to="/About">
              <li>
                <a className="">About</a>
              </li>
            </Link>
            <Link to="/Contact">
              <li>
                <a className="">Contact</a>
              </li>
            </Link>
            <Link to="/dashboard">
              <li>
                <a>Admin Login</a>
              </li>
            </Link>
            <Link to="/Cart">
              <li className="relative ">
                <a className=" text-center rounded-b-lg ">
                  {" "}
                  <b>
                    <FontAwesomeIcon className="" icon={faCartShopping} />
                  </b>
                </a>
                <p className="absolute top-[-13px] right-[-10px] font-semibold   text-blue-600 ">{cart?.length || 0}</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1 bg-gray-200 border-gray-200">
              {user?.email ? (
                <a className="text-white  flex">
                  <div className="avatar online ">
                    <div className="w-10 rounded-full">
                      <img alt="User"
                        src={
                          user?.photoURL
                        }
                      />
                    </div>
                  </div>
                  <br />
                </a>
              ) : (
                // <span className='text-white'>{user?.displayName}</span>
                <a className="text-black font-bold  flex" href="/login">
                  Login
                  {/* <div className="avatar ">
                                            <div className="w-10 rounded-full">
                                                <img src={avatar} />
                                            </div>
                                        </div><br /> */}
                </a>
              )}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu  pt-4 shadow bg-base-100 rounded-lg w-72"
            >
              {user?.email ? (
                <>
                  <div className="">
                    <div className="mb-5">
                      <span className=" font-bold text-lg ">
                        {user?.displayName}
                      </span>
                    </div>
                    <br />

                    <Link to="/Orders">
                      <li>
                        <a className=" h-10 mt-3  text-center rounded-b-lg bg-gray-100">
                          {" "}
                          <b>
                            <FontAwesomeIcon
                              className=" h-4    "
                              icon={faBagShopping}
                            />{" "}
                            My Orders
                          </b>
                        </a>
                      </li>
                    </Link>

                    <Link onClick={handleLogOut}>
                      <li>
                        <a className="  mt-5  text-center rounded-b-lg bg-gray-100">
                          {" "}
                          <b>Log Out</b>
                        </a>
                      </li>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="">
                    <Link to="/Login">
                      <li>
                        <a className="    text-center h-10 rounded-b-lg">
                          {" "}
                          <b>
                            Login{" "}
                            <FontAwesomeIcon
                              className=" h-3  ml-20  "
                              icon={faArrowRight}
                            />
                          </b>
                        </a>
                      </li>
                    </Link>
                  </div>
                </>
              )}
            </ul>
          </div>

          {/* <Link to="/Login"><a className="btn border-white bg-red-600">Login</a></Link> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
