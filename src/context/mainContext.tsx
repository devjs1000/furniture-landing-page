import { createContext, useState } from "react";

export const context = createContext([] as any);

export default function MainContext({ children }: { children: any }) {
  const [products, setProducts] = useState([
    {
      title:'Xcitedu',
      color: "#f97316",
      background:0,
     baseline:'Internships',
     punchline:'looking for internships'
    },
    {
      title:'XcitEducation',
      color: "#10b981",
      background:1,
      baseline:'Trainings',
      punchline:'looking forward to scale your skills'
    },
    {
      title:'Xcitedu',
      color: "#111827",
      background: 2,
      baseline:'Capitals',
      punchline:'building startups'
    },
    {
      title:'Xciteducation',
      color: "#facc15",
      background: 3,
      baseline:'Foundations',
      punchline:'reshaping villages'
    },
    {
      title:'XcitEdu',
      color: "#ef4444",
      background: 4,
      baseline:'House Of Design',
      punchline:'An Interior Designing Sphere'
    }
  ]);
  const [selected, setSelected] = useState(0);
  const [menuNav, setMenuNav] = useState(0);
  return (
    <context.Provider
      value={{ products, setProducts, selected, setSelected, menuNav, setMenuNav}}
    >
      {children}
    </context.Provider>
  );
}
