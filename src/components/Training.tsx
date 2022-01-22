import React from 'react';
import Category from './Category'
import Heading from './Heading'

export default ({}) => {
  return (
    <div>
    <Heading heading='Training' subHeading='Be future Ready with the best courses' linkText='view all' />
    <div className='text-xl text-gray-800 m-8'>
    Popular Categories
    </div>

    <Category />

    </div>
  );
}
