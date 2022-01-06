import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import JsonViewer from "react-json-view";
import { axiosInstance } from "../axiosApi";

export const Home = (props) => {
  let boxstyle = {
    borderRadius: "25px",
    border: "2px solid #73AD21",
    padding: "20px",
    width: "auto",
    height: "65vh",
    overflow: "auto",
    margin: "10px 10px 10px 10px",
    fontSize: "10px",
  };

  const [datajson, setDatajson] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/fileupload/")
      .then((result) => {
        fetch(result.data[0]["json_file"], {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((r) => r.json())
          .then(function (myJson) {
            setDatajson(myJson);
          });
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const hiddenFileInput = React.useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("json_file", event.target.files[0]);
    data.append("username", props.username);
    console.log(data);

    const refreshToken = localStorage.getItem("refresh_token");
    axiosInstance
      .post("/refresh/", { refresh: refreshToken })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);

        fetch("http://127.0.0.1:8000/userapi/fileupload/", {
          method: "PUT",
          headers: new Headers({
            Authorization: localStorage.getItem("access_token")
              ? "JWT " + localStorage.getItem("access_token")
              : null,
            accept: "application/json",
          }),
          body: data,
        })
          .then((r) => r.json())
          .then((data) => {
            console.log(data["json_file"].join(""));

            setDatajson(JSON.parse(data["json_file"].join("")));
            event.target.value = null;
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {datajson && datajson.length ? (
        <>
          <div style={boxstyle}>
            <JsonViewer
              src={datajson}
              displayDataTypes={false}
              displayObjectSize={false}
              iconStyle="square"
              name="Json"
              keyColor="white"
              theme={{
                base00: "#282c34",
                base01: "red",
                base02: "black",
                base03: "black",
                base04: "black",
                base05: "black",
                base06: "red",
                base07: "white",
                base08: "red",
                base09: "red",
                base0A: "blue",
                base0B: "blue",
                base0C: "green",
                base0D: "black",
                base0E: "black",
                base0F: "pink",
              }}
            />
          </div>
          <Button
            onClick={handleClick}
            className="position-relative start-50 translate-middle mt-3"
            variant="btn btn-danger"
          >
            re-upload
          </Button>{" "}
          <form>
            <input
              id="file"
              name="file"
              type="file"
              ref={hiddenFileInput}
              accept=".json"
              onChange={handleChange}
              style={{ display: "none" }}
            />
          </form>
        </>
      ) : (
        <>
          <Button
            onClick={handleClick}
            className="position-absolute start-50 top-50 translate-middle mt-3"
            variant="btn btn-danger"
          >
            Upload Json
          </Button>{" "}
          <form>
            <input
              id="file"
              name="file"
              type="file"
              ref={hiddenFileInput}
              accept=".json"
              onChange={handleChange}
              style={{ display: "none" }}
            />
          </form>
        </>
      )}
    </>
  );
};
