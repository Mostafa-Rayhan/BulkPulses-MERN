import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import {io} from 'socket.io-client';
import { base } from "../../others/api";
import axios from "axios";

// const socket = io(base);

const AdminChat = ({user,showChat, setShowChat}) => {
//   const [showChat, setShowChat] = useState(false);
//   const [user, setUser]=useState("")


  const [dummyChats, setDummyChats] = useState();






  useEffect(() => {

    const fetchChats = async () => {
      try {
        const response = await axios.get(`${base}/messages/${user}`);
        // console.log("res msg", response );
        setDummyChats(response.data);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };
    // Fetch initial chats when component mounts
    fetchChats();

    // Set up an interval to fetch chats every 6 seconds
    const intervalId = setInterval(fetchChats, 6000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [user]);


  const handleToggleChat = () => {
    setShowChat(!showChat);

  };

  const handleSendMessage =async (e) => {
    e.preventDefault()
    // console.log("data", e.target?.question?.value);

    await axios.put(`${base}/messages/${user}`, { user: "author",text: e?.target?.question?.value });

    // Fetch updated chats after sending a message
    fetchChats();
    // socket.emit('newMessage', {user: "John",text: e?.target?.question?.value });
  };

  const fetchChats = async () => {
    try {
      const response = await axios.get(`${base}/messages/${user}`);
      // console.log("res msg", response );
      setDummyChats(response.data);
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };


  return (
    <div className="fixed bottom-4 right-4">


      {showChat && (
        <div className="bg-white border rounded-lg  shadow-md w-72">
          <div className="bg-blue-500 text-white rounded-lg  py-2 px-4 flex justify-end">
            <span className="cursor-pointer" onClick={handleToggleChat}>
              <HighlightOffIcon />
            </span>
          </div>
          <div className="max-h-40 overflow-y-scroll p-4">
            {dummyChats?.messages?.map((chat, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded ${
                  chat.user === "author"
                    ? "bg-blue-500 text-white text-right"
                    : "bg-gray-200 text-black text-left "
                }`}
              >
                <strong>{chat?.user=="author"?"You" : "Strange"}:</strong> {chat?.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 flex items-center border-t">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded"
              name="question"
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 ml-2 rounded">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminChat;
