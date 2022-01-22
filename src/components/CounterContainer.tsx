import Counter from './Counter';

export default ()=>{
  return (
    <div className="w-full">
      <Counter />
      <div className="px-4 py-2">
        <h2 className="text-6xl text-gray-400">{ctx.products[ctx.selected].title}</h2>
        <h2 className="text-6xl font-semibold text-gray-800">at home</h2>
        <h2 className="text-lg text-gray-400 ">
          Meet your new comfort zone!
        </h2>
      </div>
    </div>
  )
}
