import React, { useState, useEffect } from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import "./styles/style.css";

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    alert("增加成功");
  }, [data]);

  return (
    <div className="box">
      <Edit setdata={setData} />
      <List listData={data} delData={setData} />
    </div>
  );
};

export default Index;
