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
import AdminChat from "./AdminChat";
import SendIcon from "@mui/icons-material/Send";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Chatting = () => {
  const [value, setValue] = useState("1");
  const [allproducts, setallProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchChats=()=>{
      axios
      .get(`${base}/messages`)
      .then((res) => {
        // console.log("res feedback", res);
        setallProducts(res?.data);
      })
      .catch((error) => {
        console.log("err", error);
      });
    }

    fetchChats();

    // Set up an interval to fetch chats every 6 seconds
    const intervalId = setInterval(fetchChats, 6000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };


  }, [refresh]);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const deleteDoc = (row) => {
    axios
      .delete(`${base}/messages/${row._id}`)
      .then(function (response) {
        setRefresh(!refresh);
        ToastSuccess("Successfully product deleted");

        // console.log(response);
      })
      .catch(function (error) {
        ToastError(error?.message || "Something wrong");
        console.log(error);
      });
  };

  const handleToggleChat = (u) => {
    setUser(u);
    setShowChat(!showChat);
  };

  // data for modal Detail , image, image2 price, productName _id
  const approvedTable = (d) => {
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Serial No. </TableCell>
                {/* <TableCell align="right">Price</TableCell> */}
                <TableCell align="right">See Messages</TableCell>
                {/* <TableCell align="right">Download</TableCell> */}
                <TableCell align="right">Delete</TableCell>
                {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {d?.reverse()?.map((row, index) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                    <div className="flex items-center gap-2">
                      <Avatar
                        alt="Travis Howard"
                        src={`${base}/${row?.image}`}
                      />
                      <p className="text-[1em]">{row?.productName} </p>
                    </div>
                  </TableCell> */}
                  <TableCell align="left">{index + 1} . Strange</TableCell>
                  <TableCell align="right" className="text-black ">
                    <button
                      className={`bg-blue-500 text-white px-2 py-1  rounded focus:outline-none ${
                        showChat ? "hidden" : ""
                      }`}
                      onClick={() => handleToggleChat(row?.user)}
                    >
                      {showChat ? (
                        <span>
                          <SendIcon style={{width:"20px" }} />
                        </span>
                      ) : (
                        <span>
                          {/* <HighlightOffIcon /> */}
                          <SendIcon style={{width:"20px" }} />
                        </span>
                      )}
                    </button>
                  </TableCell>

                  <TableCell align="right">
                    <button
                      onClick={() => deleteDoc(row)}
                      className="bg-transparent border-0 "
                    >
                      <DeleteIcon style={{ color: "red" }} />
                    </button>
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
              <Tab label="Messages" value="1" />
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

      <AdminChat
        user={user}
        showChat={showChat}
        setShowChat={setShowChat}
      ></AdminChat>
    </div>
  );
};

export default Chatting;
