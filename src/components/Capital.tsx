import React from 'react';
import InternshipByLocation from './InternshipByLocation'
import Category from './Category'
import Heading from './Heading'

export default ({}) => {
  return (
    <div>
    <Heading heading='Internships' subHeading='Apply to internships for free' linkText='view all' />
    <div className='text-xl text-gray-800 m-8'>
    Popular Cities
    </div>
    <InternshipByLocation />
    <div className='text-xl text-gray-800 m-8'>
    Popular Categories
    </div>

    <Category />

    </div>
  );
}
