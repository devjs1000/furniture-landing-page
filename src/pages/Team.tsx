import TeamCard from "../components/TeamCard";
import { useState, useEffect } from "react";

export default ()=>{
    const [team, setTeam]=useState([] as any)
    const [show, setShow]=useState(6)
    const [blurredControls, setBlurredControl]=useState(true)
    useEffect(()=>{
        fetch('http://localhost:8000/users/data').then((res)=>res.json()).then((data:any)=>{
            setTeam(data)
            console.log();
            
        })
        
        
    },[])
    return (
        <div >
            <div className="grid grid-rows-auto grid-cols-3 mx-20 my-5  gap-2">
            {team.map((a:any, index:number)=>{
                if(index>=show){
                    return ''
                }
                return (
                    <div key={index} className="mx-auto">
                        <TeamCard name={a.name} quote={a.quote} img={a.profilePicture}/>
                    </div>
                )
            })}

            </div>
            <div className="blurry-deck h-60 overflow-hidden  relative grid grid-rows-auto grid-cols-3 mx-20 my-8  gap-2">
            {team.map((a:any, index:number)=>{
                if(index<=show){
                    return ''
                }
                return (
                    <div key={index} className="mx-auto">
                        <TeamCard name={a.name} quote={a.quote} img={a.profilePicture}/>
                    </div>
                )
            })}
            { 
                blurredControls && <div className="col-span-3 blurred flex justify-center items-center absolute top-0 w-full p-5 h-60 shadow-lg ">
                <button onClick={()=>{
                    document.querySelector('.blurry-deck')?.classList.toggle('h-60')
                    setBlurredControl(false)
                    }} className="bg-green-500 py-2 px-4 text-xl rounded font-semibold text-white hover:shadow-lg">load more</button>
            </div>
            }
            
            </div>
        </div>
    )
}