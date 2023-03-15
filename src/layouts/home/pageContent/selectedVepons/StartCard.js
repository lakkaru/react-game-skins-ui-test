import React from "react";
import VeponInfo from "../../../../components/startCard/VeponInfo";
import StartRow from "./startCard/StartRow";

const vepons = [
  {
    name: "Neo-Noir",
    model: "USP-S",
    arrow: "#864aff",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/pistol-gun-6367941-5251269.png",
    zoom: "x1.5",
  },
  {
    name: "Vogue",
    model: "StatTrak Glock-18",
    arrow: "red",
    img: "https://www.freepnglogos.com/uploads/gun-png/gun-weapon-pistol-vector-graphic-pixabay-9.png",
    zoom: "x2",
  },
  {
    name: "The Empress",
    model: "AK-47",
    arrow: "yellow",
    img: "https://www.freepnglogos.com/uploads/gun-png/download-handgun-png-image-png-image-pngimg-1.png",
    zoom: "x5",
  },
];
export default function StartCard() {
  return (
    <div style={{backgroundColor: "#251e3f",
    borderRadius: "15px",
    padding:'15px'
    }}>
      <div
        style={{
          display: "flex",
          gap:'10px'
          
        }}
      >
        {vepons.map((val, key) => {
          return (
            <div key={key} style={{ }}>
              <VeponInfo
                name={val.name}
                model={val.model}
                arrow_color={val.arrow}
                vepon_img={val.img}
                zoom={val.zoom}
              />
            </div>
          );
        })}
      </div>
      <div>
       <StartRow/>
      </div>
    </div>
  );
}
