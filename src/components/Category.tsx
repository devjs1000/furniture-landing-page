import androidIcon from '../../icons/android.png'
import autocadIcon from '../../icons/autocad.png'
import excelIcon from '../../icons/excel.png'
import iosIcon from '../../icons/ios.png'
import marketingIcon from '../../icons/digital-marketing.png'
import webDevelopmentIcon from '../../icons/web-development.png'
import writtingIcon from '../../icons/creative-writting.png'

const Interests=({icon, title}:{icon:string, title:string})=>{
  return (
  <div className='mx-2 p-2' >
    <a href="#" className='text-center'>
      <img src={icon} className='rounded h-32 mx-auto' alt={title} />
      <button className='w-full my-2 truncate shadow-lg font-semibold bg-indigo-500 text-white py-1 px-2 rounded'>{title}</button>
    </a>
  </div>
  )
}
const Trainings = () => {
return (
  <div className=' bg-indigo-100  p-4 shadow'>
    <div className='flex justify-center flex-wrap rounded bg-white'>
      <Interests icon={androidIcon} title='android development'/>
      <Interests icon={autocadIcon} title='autocad'/>
      <Interests icon={writtingIcon} title='creative writting'/>
      <Interests icon={marketingIcon} title='digital marketing'/>
      <Interests icon={iosIcon} title='ios development'/>
      <Interests icon={excelIcon} title='ms excel'/>
      <Interests icon={webDevelopmentIcon} title='web development'/>
    </div>


  </div>)
}

export default Trainings;
