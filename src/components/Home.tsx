import {Fragment} from 'react'
import DialContainer from "./DialContainer";
import CounterContainer from "./CounterContainer";

export default ()=>{
  return (
    <Fragment>
            <main className="flex sm-wrap  m-6  h-auto sm:h-[80vh]" >
<div className='w-full'>
<CounterContainer />

</div>
    <div className='w-full'>
    <DialContainer />

    </div>
    </main>
    </Fragment>
  )
}
