import './contentwrapper.css'
import { CalenderContext } from '../context/context'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function ContentWrapper() {
    const [{data,dynamic_month},dispatch]= CalenderContext();
  return (
    <>
      <div className='wrapper'>
        <div className=''>
            {data[dynamic_month].name} Takvimim
        </div>
        <div className=''>
        <FaArrowLeft className='  text-orange-200 bg-amber-600 rounded-full mr-5 cursor-pointer transition-all duration-500 hover:scale-125'></FaArrowLeft>
        <FaArrowRight className='  text-orange-200 bg-amber-600 rounded-full  cursor-pointer transition-all duration-500 hover:scale-125  ' ></FaArrowRight>
        </div>
        <div className='board w-full p-8 shadow-amber-800 '>
            <div className=' grid grid-cols-7 gap-2 mb-2 text-2xl'>
                <div className=' flex items-end justify-center shadow-amber-800 shadow-lg bg-amber-600 '>Pazartesi</div>
                <div className=' flex items-end justify-center shadow-amber-800 shadow-lg bg-amber-600 '>Salı</div>
                <div className=' flex items-end justify-center shadow-amber-800 shadow-lg bg-amber-600 '>Çarşamba</div>
                <div className=' flex items-end justify-center shadow-amber-800 shadow-lg bg-amber-600 '>Perşembe</div>
                <div className=' flex items-end justify-center shadow-amber-800 shadow-lg bg-amber-600 '>Cuma</div>
                <div className=' flex items-end justify-center shadow-amber-800 shadow-lg bg-amber-600 '>Cumartesi</div>
                <div className=' flex items-end justify-center shadow-amber-800 shadow-lg bg-amber-600 '>Pazar</div>







            </div>
            
        </div>
      </div>
    </>
  )
}

export default ContentWrapper
