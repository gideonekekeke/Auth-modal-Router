import React, { useState, useEffect } from "react";
import { app } from "../Base";
import pic from "../img/1.jpg";
import DetailScreen from "../component/DetailScreen";
import { Link } from "react-router-dom";

const db = app.firestore();
function Homescreen() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getData = async () => {
    await db.collection("user").onSnapshot((snap) => {
      const item = [];
      snap.forEach((doc) => {
        item.push({ ...doc.data(), id: doc.id });
      });
      setData(item);
      console.log(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>this is the home screen </div>
      <center
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        {data.map(
          ({ id, desc, avatar, img1, img2, paragraph, details, title }) => (
            <div
              key={id}
              style={{
                width: "350px",
                border: "1px solid silver",
                display: "flex",
                flexDirection: "column",
                display: "flex",
                margin: "10px",
              }}
            >
              <div
                style={{
                  height: "200px",
                  width: "100%",
                  backgroundColor: "red",
                }}
              >
                <Link to={`/main/${id}`}>
                  <img
                    src={img1}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Link>
                <div
                  style={{
                    height: "70px",
                    width: "70px",
                    marginTop: "-50px",
                    marginLeft: "-230px",

                    zIndex: 20,
                  }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      border: "5px solid silver",
                      borderRadius: "360px",
                    }}
                    src={img2}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  textAlign: "left",
                  padding: "5px",
                  marginTop: "50px",
                }}
              >
                {desc}
              </div>

              {open ? <DetailScreen /> : null}
            </div>
          )
        )}
      </center>
    </>
  );
}

export default Homescreen;
