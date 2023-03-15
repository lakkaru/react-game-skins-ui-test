import React from "react";
import LeftMenuUpButton from "../../../components/leftMenuUp/LeftMenuUpButton";

const buttons = [
  {
    name: "crash",
    icon: "data:image/png;base64,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",
    indication_status: "none",
    bgColor: "#6b67f3",
  },
  {
    name: "upgrade",
    icon: "https://icons.veryicon.com/png/o/weather/linear-icon-31/upgrade-10.png",
    indication_status: "none",
    bgColor: "#272042",
  },
  {
    name: "bonuses",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTzg3vKPTA2t8JhyJuAP9WTtk7T7nC3iO8A&usqp=CAU",
    indication_status: "block",
    bgColor: "#272042",
  },
  {
    name: "top",
    icon: "https://cdn-icons-png.flaticon.com/512/2282/2282594.png",
    indication_status: "none",
    bgColor: "#272042",
  },
];
export default function LeftMenuUp() {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        flexDirection: "column",
        marginTop: "30px",
      }}
    >
      {buttons.map((val, key) => {
        return (
          <div key={key}>
            <LeftMenuUpButton button={val} />
          </div>
        );
      })}
    </div>
  );
}
