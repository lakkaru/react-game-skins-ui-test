import React from "react";
import LeftMenuDownButton from "../../../components/leftMenuDown/LeftMenuDownButton";

const buttons = [
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUU5E9oyvVC4-p3wnk6NrfLVBkeyyVQq5nKy_L1RaXrYjFSAYHKPb02qP7ev4pLq2aD7s&usqp=CAU",
  },
  {
    icon: "https://www.freeiconspng.com/thumbs/speaker-icon/speaker-icon-15.png",
  },
  {
    icon: "https://camo.githubusercontent.com/b0503892ac39aa96ba5611fd5018cc0f8613f6b472a2d551a857bac1a0bcd091/68747470733a2f2f686174736372697074732e6769746875622e696f2f636972636c652d666c6167732f666c6167732f75732e737667",
  },
];
export default function LeftMenuDown() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        marginBottom: "20px",
      }}
    >
      {buttons.map((val, key) => {
        return (
          <div key={key}>
            <LeftMenuDownButton button={val} />
          </div>
        );
      })}
    </div>
  );
}
