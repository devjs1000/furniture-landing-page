import React from 'react';
import bangloreIcon from '../../icons/banglore.png'
import delhiIcon from '../../icons/delhi.png'
import kolkataIcon from '../../icons/kolkata.png'
import mumbaiIcon from '../../icons/mumbai.png'
import workFromHomeIcon from '../../icons/work-from-home.png'
import chennaiIcon from '../../icons/chennai.png'
import internationalIcon from '../../icons/international.png'

const JobArea=({icon, title})=>{
  return (
  <div className='mx-2 p-2' >
    <a href="#">
      <img src={icon} className='rounded h-32' alt={title} />
      <button className='w-full my-2 shadow-lg font-semibold bg-indigo-500 text-white py-1 px-2 rounded'>{title}</button>
    </a>
  </div>
  )
}
const Jobs = ({}) => {
return (
  <div className=' bg-indigo-100  p-4 shadow'>
    <div className='flex flex-wrap justify-center rounded bg-white'>
      <JobArea icon={workFromHomeIcon} title='Work From Home'/>
      <JobArea icon={bangloreIcon} title='Banglore'/>
      <JobArea icon={delhiIcon} title='Delhi/NCR'/>
      <JobArea icon={kolkataIcon} title='Kolkata'/>
      <JobArea icon={mumbaiIcon} title='Mumbai'/>
      <JobArea icon={chennaiIcon} title='Chennai'/>
      <JobArea icon={internationalIcon} title='International'/>

    </div>


  </div>)
}

export default Jobs;
