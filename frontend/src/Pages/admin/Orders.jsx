// import testImage from "../../assets/CardImage/download.jpg";
import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { AppContext } from "../../app.context";
import Avatar from "@mui/material/Avatar";
// import base from "../../components/Database";
import AddTaskIcon from "@mui/icons-material/AddTask";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
// import ToastSuccess, { ToastError } from "../../components/Toast";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ToastSuccess, { ToastError } from "../../others/toast";
import { base } from "../../others/api";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Orders = () => {
  const [value, setValue] = useState("1");
  const [allproducts, setallProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get(`${base}/OrderProduct`)
      .then((res) => {
        setallProducts(res?.data?.reverse());
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, [refresh]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const approveOrder = (row) => {
    const body = {
      delivered: "delivered",
    };
    axios
      .put(`${base}/OrderProduct/${row._id}`, body)
      .then(function (response) {
        setRefresh(!refresh);
        ToastSuccess("Product approved");

        // console.log(response);
      })
      .catch(function (error) {
        ToastError(error?.message || "Something wrong");
        console.log(error);
      });
  };
  const rejectOrder = (row) => {
    const body = {
      delivered: "Cancelled",
    };
    axios
      .put(`${base}/OrderProduct/${row._id}`, body)
      .then(function (response) {
        setRefresh(!refresh);
        ToastSuccess("Product rejected");

        // console.log(response);
      })
      .catch(function (error) {
        ToastError(error?.message || "Something wrong");
        console.log(error);
      });
  };

  const approvedTable = (d) => {
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image & Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Total Price</TableCell>
                <TableCell align="right">Buyer</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Delivery Status</TableCell>
                <TableCell align="right">Delivery</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {d?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <div className="flex items-center gap-2">
                      <Avatar
                        alt="Travis Howard"
                        src={`${base}/${row?.image}`}
                      />
                      <p className="text-[1em]">{row?.productName} </p>
                    </div>
                  </TableCell>
                  <TableCell align="right">{row?.quantity}</TableCell>
                  <TableCell align="right">{row?.totalprice} </TableCell>
                  <TableCell align="right">
                    {row?.name} <br /> {row?.email}{" "}
                  </TableCell>
                  <TableCell align="right">{row?.phone} </TableCell>
                  <TableCell align="right">
                    {/* {!(row?.delivered) && <span className="text-yellow-500 ">Pending</span> } */}
                    {row?.delivered == "Cancelled" ? <span className="text-red-500 font-semibold">Cancelled</span>
                    :
                    row?.delivered == "delivered"?  <span className="text-green-500 font-semibold  ">Delivered</span>
                    :
                    <span className="text-yellow-500 ">Pending</span>
                    }

                  </TableCell>

                  <TableCell align="right">
                    {!(row?.delivered) || row?.delivered=="pending" ?
                    (
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => approveOrder(row)}
                          className="bg-transparent border-0 "
                        >
                          <CheckCircleIcon style={{ color: "blue" }} />
                        </button>
                        <button
                          onClick={() => rejectOrder(row)}
                          className="bg-transparent border-0 "
                        >
                          <DeleteIcon style={{ color: "red" }} />
                        </button>
                      </div>
                    )
                  :"" } 
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {/* <Tab label="Pending" value="1" /> */}
              <Tab label="All Products" value="1" />
              {/* <Tab label="Cancelled" value="3" /> */}
              {/* <Tab label="others" value="4" /> */}
            </TabList>
          </Box>
          {/* <TabPanel value="1">{tableData(pending)}</TabPanel> */}
          <TabPanel value="1">{approvedTable(allproducts)}</TabPanel>
          {/* <TabPanel value="3">{approvedTable(cancelled)}</TabPanel> */}
          {/* <TabPanel value="4">{others(allFiles)}</TabPanel> */}
        </TabContext>
      </Box>
    </div>
  );
};

export default Orders;
