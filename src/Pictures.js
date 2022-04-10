import React from 'react'
import mail from "./assets/mail.svg"
import map from "./assets/map.svg"
import phone from "./assets/phone.svg"
import design from "./assets/design.svg"
import man from "./assets/man.svg"
import woman from "./assets/woman.svg"
import padlock from "./assets/padlock.svg"
import gman from "./assets/growing-up-man.svg"
import gwoman from "./assets/growing-up-woman.svg"
import "./Pictures.css"



const Pictures = ({info}) => {

  

  return (
    <div className='icons' >
       {info[0]?.name.title ==="Mr" ?
       (<img id='man' className='icon' src={man} alt="" />) :
       (<img id='woman' className='icon' src={woman} alt="" />) }
       <img id='mail' className='icon' src={mail} alt="" /> 
       {info[0]?.name.title ==="Mr" ?
       (<img id='gman' className='icon' src={gman} alt="" /> ) :
       (<img id='gwoman' className='icon' src={gwoman} alt="" />)} 
       <img id='map' className='icon' src={map} alt="" /> 
       <img id='phone' className='icon' src={phone} alt="" /> 
       <img id='padlock' className='icon' src={padlock} alt="" /> 

    </div>
  )
}

export default Pictures