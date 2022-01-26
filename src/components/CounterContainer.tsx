import {useContext} from 'react';
import {context} from '../context/mainContext'
import Counter from "./Counter";
import Social from './Social'

export default ()=>{
  const ctx=useContext(context)

  return (
    <div className="w-full" id='counter-container'>
      <Counter />
      <div className="px-4 py-4">
        <h2 className="text-6xl text-gray-400 main-headings">{ctx.products[ctx.selected].title}</h2>
        <h2 className="text-6xl font-semibold text-gray-800 main-headings">{ctx.products[ctx.selected].baseline}</h2>
        <h2 className="text-xl text-gray-400 ">
        {ctx.products[ctx.selected].punchline}
        </h2>
      </div>
      <div className='ml-4'>
      <Social/>
      </div>

    </div>
  )
}
