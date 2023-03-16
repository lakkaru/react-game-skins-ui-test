import React from "react";
import OtherSkins from "./vepons/OtherSkins";
import PlayerValue from "./vepons/PlayerValue";
import Skins from "./vepons/Skins";
import SkinStatus from "./vepons/SkinStatus";

const vepons = [
  {
    player: { playerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU", playerValue: "$12.00" },
    skins: { skin1Image: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png",unColor1:'#a62ee4', skin2Image: "https://www.freepnglogos.com/uploads/gun-png/download-handgun-png-image-png-image-pngimg-1.png", unColor2:'red' },
    otherskin: { otherSkinValue: "", otherSkinImage: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png" },
    status: { skinStatus: "In game", skinStatusColor: "#333" },
  },
  {
    player: { playerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU", playerValue: "$12.00" },
    skins: { skin1Image: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png",unColor1:'#a62ee4', skin2Image: "https://www.freepnglogos.com/uploads/gun-png/download-handgun-png-image-png-image-pngimg-1.png", unColor2:'red' },
    otherskin: { otherSkinValue: "", otherSkinImage: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png" },
    status: { skinStatus: "In game", skinStatusColor: "#333" },
  },
  {
    player: { playerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU", playerValue: "$12.00" },
    skins: { skin1Image: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png",unColor1:'#a62ee4', skin2Image: "", unColor2:'red' },
    otherskin: { otherSkinValue: "$1.23", otherSkinImage: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png" },
    status: { skinStatus: "1.23x", skinStatusColor: "#426b60" },
  },
  {
    player: { playerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU", playerValue: "$12.00" },
    skins: { skin1Image: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png",unColor1:'#a62ee4', skin2Image: "", unColor2:'red' },
    otherskin: { otherSkinValue: "", otherSkinImage: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png" },
    status: { skinStatus: "In game", skinStatusColor: "#333" },
  },
  {
    player: { playerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU", playerValue: "$12.00" },
    skins: { skin1Image: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png",unColor1:'#a62ee4', skin2Image: "", unColor2:'red' },
    otherskin: { otherSkinValue: "$3.78", otherSkinImage: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png" },
    status: { skinStatus: "1.26x", skinStatusColor: "#426b60" },
  },
  {
    player: { playerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU", playerValue: "$12.00" },
    skins: { skin1Image: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png",unColor1:'#a62ee4', skin2Image: "https://www.freepnglogos.com/uploads/gun-png/download-handgun-png-image-png-image-pngimg-1.png", unColor2:'red' },
    otherskin: { otherSkinValue: "", otherSkinImage: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png" },
    status: { skinStatus: "In game", skinStatusColor: "#333" },
  },
  {
    player: { playerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU", playerValue: "$12.00" },
    skins: { skin1Image: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png",unColor1:'#a62ee4', skin2Image: "https://www.freepnglogos.com/uploads/gun-png/download-handgun-png-image-png-image-pngimg-1.png", unColor2:'red' },
    otherskin: { otherSkinValue: "", otherSkinImage: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png" },
    status: { skinStatus: "In game", skinStatusColor: "#333" },
  },
  {
    player: { playerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU", playerValue: "$12.00" },
    skins: { skin1Image: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png",unColor1:'#a62ee4', skin2Image: "https://www.freepnglogos.com/uploads/gun-png/download-handgun-png-image-png-image-pngimg-1.png", unColor2:'red' },
    otherskin: { otherSkinValue: "", otherSkinImage: "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png" },
    status: { skinStatus: "In game", skinStatusColor: "#333" },
  },
];
export default function Vepons() {
  return (
    <div>
      {vepons.map((val, key) => {
        return (
          <div key={key}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
              border: "1px solid #333",
              borderRadius: "15px",
              padding: "3px",
            }}
          >
            <PlayerValue player={val.player}/>
            <Skins skins={val.skins}/>
            <OtherSkins otherSkin={val.otherskin}/>
            <SkinStatus status={val.status}/>
          </div>
        );
      })}
    </div>
  );
}
