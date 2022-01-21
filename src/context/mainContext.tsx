import { createContext, useState } from "react";
import barrierBreakingImg from '../../img/barrierBreaking.svg'
import trainingImg from '../../img/training.svg'
import feelingProudImg from '../../img/feelingProud.svg'

export const context = createContext([] as any);

export default function MainContext({ children }: { children: any }) {
  const [products, setProducts] = useState([
    {
      title:'Internships',
      color: "yellow",
      background:barrierBreakingImg
    },
    {
      title:'Training',
      color: "gray",
      background:trainingImg
    },
    {
      title:'Capital',
      color: "red",
      background: feelingProudImg
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
