import { Link, Outlet, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import LogoutIcon from "@mui/icons-material/Logout";
import Person3Icon from "@mui/icons-material/Person3";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";


const Dashboard = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("admin"));
    if (getUser?.email=="admin@email.com" && getUser?.password==="admin") {

      setUser(getUser);
    }
    else {
      localStorage.removeItem("admin")
      navigate("/adminLogin");
    }
  }, [navigate]);

  if(!user){
    return <p>Loading ...</p>
  }

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };

  return (
    <div>
      {/* dashboard  */}
      <div className="bg-blue-900 h-[50px] md:h-[80px] w-full fixed top-0 left-0 z-50 flex items-center justify-start  ">
        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden ml-2">
          <MenuIcon style={{ color: "white" }} />
        </label>
        <div className="flex justify-start items-center  gap-2 ml-4 ">
       <Avatar sx={{bgcolor: "#F000B8"}}>{user?user.name?.substring(0, 2).toUpperCase():"NO"}</Avatar>
       <div>
        <h6 className="text-white font-bold mb-0 ">{user?.email} </h6>
        {/* <p className="text-white ">{user?.email}</p> */}
       </div>
       </div>
        {/* <h1 className="text-3xl font-bold text-[#F000B8] ml-6 ">TASK HERO</h1> */}
        {/* <img className="h-16 w-auto ml-4" src={logo} alt="" /> */}
      </div>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col min-h-screen  ">
          {/* <div className=" h-[50px] md:h-[80px] w-full "></div> */}

          <div className="p-8     ">
            {/* filter section  */}

            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side  ">
          {/* <div className="relative ">
            <div className="h-[50px] md:h-[80px] w-full "></div>
          </div> */}
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  min-h-screen   h-full  bg-[#E8EAED]  text-black pt-[100px] lg:pt-6 ">

            <li className="mb-2 ">
              <Link
                to="products"
                style={{
                  color: "#1976D2",
                  fontWeight: 700,
                  fontSize: "1.1em ",
                }}
              >
                <DriveFolderUploadIcon /> Products
              </Link>
            </li>
            <li className="mb-2 ">
              <Link
                to="upload-products"
                style={{
                  color: "#1976D2",
                  fontWeight: 700,
                  fontSize: "1.1em ",
                }}
              >
                <DriveFolderUploadIcon /> Upload Products
              </Link>
            </li>
            <li className="mb-2 ">
              <Link
                to="orders"
                style={{
                  color: "#1976D2",
                  fontWeight: 700,
                  fontSize: "1.1em ",
                }}
              >
                <DriveFolderUploadIcon /> Orders Manage
              </Link>
            </li>
            <li className="mb-2 ">
              <Link
                to="feedbacks"
                style={{
                  color: "#1976D2",
                  fontWeight: 700,
                  fontSize: "1.1em ",
                }}
              >
                <DriveFolderUploadIcon /> Feedbacks
              </Link>
            </li>
            <li className="mb-2 ">
              <Link
                to="chatting"
                style={{
                  color: "#1976D2",
                  fontWeight: 700,
                  fontSize: "1.1em ",
                }}
              >
                <DriveFolderUploadIcon /> Messages 
              </Link>
            </li>



            <li
              className="mb-2 "
              style={{ color: "#1976D2", fontWeight: 700, fontSize: "1.1em " }}
            >
              <button onClick={logout}>
                <LogoutIcon /> Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
