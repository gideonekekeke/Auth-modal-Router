import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { app } from "../Base";

const db = app.firestore().collection("user");

function MainFile() {
  const [data, setData] = useState(null);

  const { id } = useParams();
  const getData = async () => {
    const docRef = await db.doc(id);
    const docData = await docRef.get();

    setData(docData.data());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      this is the main files : {id}
      <div>{data && data.title}</div>
    </div>
  );
}

export default MainFile;
