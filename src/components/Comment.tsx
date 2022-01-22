
import React, {useState} from 'react';
import authImg from '../../img/auth.svg'
export default () => {
  const [comment, setComment]=useState('')
  return (

    <div className=" bg-white border-1 rounded shadow-lg p-8 m-8 block sm:flex">
    		<div className='w-full'>
          <img src={authImg} alt="auth image" className='h-60' />
        </div>
        <div className='' >
          <h1 className='text-gray-600 text-2xl mx-2 mt-2'>Add Comment</h1>
          <form action="#" className='flex flex-wrap'>
            <input type="email" className='w-full p-1 px-4 rounded bg-gray-50' placeholder="youremail@email.com" />
            <textarea name="name" onChange={(e)=>{
            setComment(e.target.value)
          }} value={comment} className='my-2 bg-gray-50 p-4 text-gray-600 resize-none rounded w-full h-40'>
              your comment
            </textarea>
            <button type="submit" name="button" className='w-full rounded bg-indigo-500 py-2 px-4 font-semibold text-white'>
              Comment
            </button>
          </form>
        </div>

    </div>
  );
}
