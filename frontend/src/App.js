import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Home from "./Pages/Home/Home/Home";
import Pulses from "./Pages/Home/Pulses/Pulses";
import MoreAbout from "./Pages/Home/About/MoreAbout";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import PulsesDetails from "./Pages/Home/Pulses/PulsesDetails";
import PrivateRout from "./Pages/PrivateRout/PrivateRout";
import Contact from "./Pages/Contact/Contact";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Dashboard from "./Pages/admin/Dashboard";
import Products from "./Pages/admin/Products";
import UploadProducts from "./Pages/admin/UploadProducts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./Pages/admin/AdminLogin";
import Orders from "./Pages/admin/Orders";
import { base } from "./others/api";
import Success from "./Pages/others/Success";
import Feedback from "./Pages/admin/Feedback";
import Chatting from "./Pages/admin/Chatting";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/Pulses",
          loader: async () => {
            return fetch(
              `${base}/products`
            );
          },
          element: (
            // <PrivateRout>
              <Pulses></Pulses>
            // </PrivateRout>
          ),
        },
        {
          path: "/About",
          element: <MoreAbout></MoreAbout>,
        },
        {
          path: "/Login",
          element: <Login></Login>,
        },
        {
          path: "/success",
          element: <Success></Success>,
        },
        {
          path: "/Register",
          element: <Register></Register>,
        },
        {
          path: "/Contact",
          element: <Contact></Contact>,
        },
        {
          path: "/Cart",
          element: (
            <PrivateRout>
              <Cart></Cart>
            </PrivateRout>
          ),
        },
        {
          path: "/Orders",
          element: (
            <PrivateRout>
              <MyOrder></MyOrder>
            </PrivateRout>
          ),
        },
        {
          path: "/AdminLogin",
          element: <AdminLogin></AdminLogin>,
        },

        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
          children: [
            // Nested routes for the dashboard

            {
              path: "",
              element: <Products></Products>,
            },
            {
              path: "products",
              element: <Products></Products>,
            },
            {
              path: "upload-products",
              element: <UploadProducts></UploadProducts>,
            },
            {
              path: "orders",
              element: <Orders></Orders>,
            },
            {
              path: "feedbacks",
              element: <Feedback></Feedback>,
            },
            {
              path: "chatting",
              element: <Chatting></Chatting>, 
            },
            // Add more nested routes as needed
          ],
        },

        {
          path: "/Pulses/:id",
          loader: async ({ params }) => {
            return fetch(
              `${base}/products/${params.id}`

            );
          },
          element: (
            <PrivateRout>
              <PulsesDetails></PulsesDetails>
            </PrivateRout>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="App">


      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999999 }}
      />


      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
