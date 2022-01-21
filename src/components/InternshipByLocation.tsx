import React from 'react';
import bangloreIcon from '../../icons/banglore.png'
import delhiIcon from '../../icons/delhi.png'
import kolkataIcon from '../../icons/kolkata.png'
import mumbaiIcon from '../../icons/mumbai.png'
import workFromHomeIcon from '../../icons/work-from-home.png'

const JobArea=({icon, title})=>{
  return (
  <div className='mx-2 p-2'>
    <a href="#">
      <img src={icon} className='rounded h-32' alt={title} />
      <button className='w-full my-2 shadow-lg font-semibold bg-indigo-500 text-white py-1 px-2 rounded'>{title}</button>
    </a>
  </div>
  )
}
const Jobs = ({}) => {
return (
  <div className='flex justify-center bg-indigo-100  p-4 shadow'>
    <div className='flex rounded bg-white'>
      <JobArea icon={workFromHomeIcon} title='work from home'/>
      <JobArea icon={bangloreIcon} title='banglore'/>
      <JobArea icon={delhiIcon} title='delhi'/>
      <JobArea icon={kolkataIcon} title='kolkata'/>
      <JobArea icon={mumbaiIcon} title='mumbai'/>

    </div>


  </div>)
}

export default Jobs;
