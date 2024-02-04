import './contentwrapper.css'
import { CalenderContext } from '../context/context'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


function ContentWrapper() {

    const [{data,dynamic_month, day, month},dispatch]= CalenderContext();

    var counter = dynamic_month
    const next = ()=>{
      if(counter < 11 ){ counter++}
      else if( counter === 11){counter}
      dispatch({
        type: 'SET_MONTH',
        payload: counter
      })
    }
    const prev= ()=>{
      if(counter > 0 ){ counter--}
      else if( counter === 0){counter = 11}
      dispatch({
        type: 'SET_MONTH',
        payload: counter
      })
    }

   
  return (
    <>
      <div className='wrapper'>
        <div className= 'wrapperTitle'>
            {data[dynamic_month].name} Takvimim
        </div>
        <div className='wrapperIcons'>
          <FaArrowLeft onClick={prev} className='wrapperIconLeft'></FaArrowLeft>
          <FaArrowRight onClick={next} className='wrapperIconLeft'></FaArrowRight>
        </div>
        
      </div>
      <div className="board">
        <div className='boardDays'>
          <div className='grid-item'>Pazartesi</div>
          <div className='grid-item'>Salı</div>
          <div className='grid-item'>Çarşamba</div>
          <div className='grid-item'>Perşembe</div>
          <div className='grid-item'>Cuma</div>
          <div className='grid-item'>Cumartesi</div>
          <div className='grid-item'>Pazar</div>
        </div>
        <div>
          <div className="grid-items-box">
            {
              [...Array(data[dynamic_month].skip_days)].map((value, idx)=>{
                return(
                  <div className='boardBox1'> 
                    {data[dynamic_month === 0 ? 11 : dynamic_month -1].total_days - data[dynamic_month].skip_days +idx +1}
                  </div>
                )
              })
            }
            {
              [...Array(data[dynamic_month].total_days)].map((value, idx)=>{
                if(idx +1 === day && dynamic_month === month.index){
                  return(
                    <div className='boardBox'>Today </div>
                  )
                }
                return(
                  <div className='boardBox'> {idx +1} </div>
                )
              })
            }
            {
              [...Array(42 - data[dynamic_month].total_days - data[dynamic_month].skip_days)].map((value, index)=>{
                return(
                  <div className='boardBox1'>
                    { index + 1}
                    </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default ContentWrapper




