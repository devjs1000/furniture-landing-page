import React from "react";
import Counter from "./components/Counter";
import Dial from "./components/Dial";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App shadow py-2 my-3 mx-auto">
      <Navbar />
      <main className='flex m-6'>
        <div className='w-full'>
          <Counter />
          <div className='px-4 py-2'>
          <h2 className='text-6xl text-gray-400'>being</h2>
          <h2 className='text-6xl font-semibold text-gray-800' >at home</h2>
          <h2 className='text-lg text-gray-400 '>Meet your new comfort zone!</h2>
          
          </div>
         
        </div>

        <div className='w-full'>
          <Dial/>
        </div>
      </main>
    </div>
  );
}

export default App;
