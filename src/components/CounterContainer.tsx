import {useContext} from 'react';
import {context} from '../context/mainContext'
import Loading from './Loading'
import Counter from "./Counter";
export default ()=>{
  const ctx=useContext(context)

  return (
    <div className="w-full">
      <Counter />
      <div className="px-4 py-4">
        <h2 className="text-6xl text-gray-400">{ctx.products[ctx.selected].title}</h2>
        <h2 className="text-6xl font-semibold text-gray-800">{ctx.products[ctx.selected].baseline}</h2>
        <h2 className="text-lg text-gray-400 ">
        {ctx.products[ctx.selected].punchline}
        </h2>
      </div>
    </div>
  )
}
