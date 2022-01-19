import { createContext, useState } from "react";

export const context = createContext([] as any);

export default function MainContext({ children }: { children: any }) {
  const [products, setProducts] = useState([
    {
      chair: "https://i.ibb.co/1XM0MJV/ych.png",
      color: "yellow",
      background:
        "https://assets-news.housing.com/news/wp-content/uploads/2020/04/22184310/Check-out-these-duplex-interior-design-ideas-FB-1200x700-compressed.jpg",
    },
    {
      chair: "https://i.ibb.co/R3nY3XV/gch.png",
      color: "gray",
      background:
        "https://cdnassets.hw.net/ab/75/a4bc752f41f288d3e45c29454cdb/9b03a91b55f5408980862881d9255102.jpg",
    },
    {
      chair: "https://i.ibb.co/Nm82jr3/rch.png",
      color: "red",
      background:
        "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/08/26204630/Duplex-House-Design-Living-Room-1024x683.jpg",
    },
  ]);
  const [selected, setSelected] = useState(1);
  const [menuNav, setMenuNav] = useState(0);
  return (
    <context.Provider
      value={{ products, setProducts, selected, setSelected, menuNav, setMenuNav}}
    >
      {children}
    </context.Provider>
  );
}
