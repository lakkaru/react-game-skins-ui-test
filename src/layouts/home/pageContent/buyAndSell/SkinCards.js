import React from "react";
import ActionButtons from "./ActionButtons";
import SkinCard from "./skinCards/SkinCard";

const cardInfo = [
  {
    category: "Factory New",
    chipColor: "#e54144",
    image:
      "https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png",
    name: "Survival Knife (WW)",
    price: "$984.27",
    isSet: "true",
  },
  {
    category: "Holo",
    chipColor: "#8749f9",
    image:
      "https://www.freepnglogos.com/uploads/gun-png/gun-weapon-pistol-vector-graphic-pixabay-9.png",
    name: "SGG QB (FN)",
    price: "$159.32",
    isSet: "",
  },
  { category: "Factory New", chipColor: "#a62ee4", image: "https://www.freepnglogos.com/uploads/gun-png/gun-weapon-pistol-vector-graphic-pixabay-9.png", name: "MPIO(MW)", price: "$89.87", isSet: "" },
  { category: "Holo", chipColor: "#dfb056", image: "https://www.freepnglogos.com/uploads/gun-png/gun-weapon-pistol-vector-graphic-pixabay-9.png", name: "M4A1-S (FN)", price: "$422.42", isSet: "true" },
  { category: "Gungnir", chipColor: "#e54144", image: "https://www.freepnglogos.com/uploads/gun-png/gun-weapon-pistol-vector-graphic-pixabay-9.png", name: "AWP (FN)", price: "$23.99", isSet: "" },
  { category: "Holo", chipColor: "#8749f9", image: "https://www.freepnglogos.com/uploads/gun-png/gun-weapon-pistol-vector-graphic-pixabay-9.png", name: "SSG OB (FN)", price: "$455.56", isSet: "" },
];
export default function SkinCards() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "5px",
        flexWrap: "wrap",
        marginTop: "10px",
      }}
    >
      {cardInfo.map((val, key) => {
        return (
          <div key={key}>
            <SkinCard
              category={val.category}
              chipColor={val.chipColor}
              image={val.image}
              name={val.name}
              price={val.price}
              isSet={val.isSet}
            />
          </div>
        );
      })}
      <div style={{position:'relative', bottom:'50px', backgroundColor:'#201938', padding:'15px', width:'100%'}}>
        <ActionButtons/>
      </div>
    </div>
  );
}
