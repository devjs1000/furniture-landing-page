import TeamCard from "../components/TeamCard";
import { useState, useEffect } from "react";
import axios from 'axios'
export default ()=>{
    const [team, setTeam]=useState([] as any)
    useEffect(()=>{
        fetch('http://localhost:8000/users/data').then((res)=>res.json()).then((data:any)=>{
            setTeam(data)
            console.log();
            
        })
        
        
    },[])
    return (
        <div className="grid grid-rows-auto grid-cols-3 mx-20 my-5  gap-2">
            {team.map((a:any, index:number)=>{
                return (
                    <div key={index} className="mx-auto">
                        <TeamCard name={a.name} quote={a.quote} img={a.profilePicture}/>
                    </div>
                )
            })}
        </div>
    )
}