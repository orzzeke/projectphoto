import React from "react";

const Item = ({ id, note, date, time, delData }) => {
  function del() {
    delData(function (params) {
      return params.filter((item) => item.id != id);
    });
  }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="del" onClick={del}>
        刪除
      </button>
    </div>
  );
};

export default Item;
