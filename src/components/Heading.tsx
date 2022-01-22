import React from 'react';

const Heading = ({heading, subHeading, linkText, }) => {
  return (
    <div className='flex flex-wrap m-8'>
<h2 className='w-full text-4xl text-gray-800'>{heading}</h2>
<div className='flex justify-between w-full'>
<h3 className='text-2xl text-gray-500'>{subHeading}</h3>
<button className='bg-blue-500 text-blue-50 shadow-lg h-12 py-2 px-4 ' style={{minWidth:'100px'}}>{linkText}</button>
</div>
    </div>
  )
}

export default Heading ;
