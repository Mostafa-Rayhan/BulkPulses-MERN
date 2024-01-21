import { useEffect, useState } from "react";
import { base } from "../../others/api";
import axios from "axios";
import ToastSuccess, { ToastError } from "../../others/toast";
import { LoadingButton } from "@mui/lab";


const UploadProducts = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [btnLoading, setbtnLoading]=useState(false)
  const [thumb, setThumb] = useState(null);
  const [allFiles, setAllFiles] = useState([]);
  const [user, setUser] = useState();
  const [localRef, setLocalRef] = useState(false);
  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("driveUser"));
    if (getUser) {
      setUser(getUser);
    }
  }, [localRef]);

  // useEffect(() => {
  //   axios
  //     .get(`${base}/files`)
  //     .then(function (response) {
  //       // console.log("re", response)
  //       setAllFiles(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);


  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };
  const handleFileCSingle = (event) => {
    setThumb(event.target.files[0]);
  };

  const upload = (e) => {
    e.preventDefault();
    setbtnLoading(true)

    const t = e.target;
    const body = {
      productName: t.productName?.value,
      price: t.price?.value,
      Detail: t.Detail?.value
    };
    console.log("body", body);

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    formData.append("thumb", thumb);
    formData.append("productName", body.productName);
    formData.append("price", body.price);
    formData.append("Detail", body.Detail);

    axios
      .post(`${base}/Products`, formData)
      .then(function (response) {
        // setRefreshP(!refreshP);
        ToastSuccess("Successfully updated")

        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error?.message);
        ToastError(error?.message || "Something wrong");
      });
      setbtnLoading(false)
  };


  return (
    <div>
      <h4 className="text-3xl font-bold mb-12 "> Upload Document</h4>
      <div className=" w-full lg:w-[600px]">
        <form action="" className="my-8 w-full uploadForm" onSubmit={upload}>
          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3 text-left " htmlFor="">
              Product Name :{" "}
            </label>
            <input
              type="text"
              name="productName"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>

          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3 text-left " htmlFor="">
              price :{" "}
            </label>
            <input
              type="number"
              name="price"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>
          {/* <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3" htmlFor="">
              Uploader :{" "}
            </label>
            <input
              type="text"
              name="uploader_name"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div> */}
          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3 text-left " htmlFor="">
              Description :{" "}
            </label>
            <textarea
              type="text"
              name="Detail"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>



          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3 text-left " htmlFor="">
              Thumbnail :{" "}
            </label>
            <input
              onChange={handleFileCSingle}
              type="file"
              name="thumb"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>
          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3 text-left " htmlFor="">
              Image 2 :{" "}
            </label>
            <input
              onChange={handleFileChange}
              type="file"
              // multiple
              name="files"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>

          <div className="text-left mt-10 ">
            <LoadingButton loading={btnLoading} variant="contained" type="submit">
              Submit
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProducts;
