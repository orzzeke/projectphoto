import React from "react";
import Item from "./Item";

const List = ({ listData, delData }) => {
  return (
    <div className="List">
      {listData.map((res) => {
        const { id, note, date, time } = res;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            delData={delData}
          />
        );
      })}
    </div>
  );
};

export default List;
