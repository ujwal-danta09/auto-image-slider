import React, { useEffect, useState } from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { data } from '../data'
const Slider = () => {
    const[currSlide,setCurrSlide] = useState(0)
    useEffect(()=>{
        setCurrSlide(0)
    },[])
    const handleLeft = ()=>{
    if(currSlide==0){
        setCurrSlide(2)
    }
    else
    {
        setCurrSlide(currSlide-1)
    }
    }

    const handleRight = ()=>{
        if(currSlide==2){
            setCurrSlide(0)
        }
        else
        {
            setCurrSlide(currSlide+1)
        }   
    }
    console.log(currSlide)

    useEffect(() => {
      const interval = setInterval(()=>{
      handleRight()
      },5000)
    
      return () => {
        clearInterval(interval)
      }
    }, [currSlide])
    



  return (
    <div className='slider-container'>
        <div className='icons'>
            <button onClick={handleRight} className='icon right'>
         <AiOutlineArrowRight/>
            </button>
            <button onClick={handleLeft} className='icon left'>
        <AiOutlineArrowLeft/>
            </button>
        </div>
         {data.map((data,index)=>{
             return (
                 <div key={index} className={data.id===currSlide?'current slide':'slide'}>
                     {currSlide===data.id &&
                     <>
                     <div className="img-container">
                         <img src={data.image} alt={data.heading} />
                     </div>
                     <div className="content">
                         <h2>{data.heading}</h2>
                         <hr />
                         <p>{data.content}</p>
                     </div>
                     </>
                     }
                 </div>
             )
         })}
    </div>
  )
}

export default Slider