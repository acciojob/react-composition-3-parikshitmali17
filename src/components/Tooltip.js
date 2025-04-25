import React from 'react'

export const Tooltip = (props) => {
  return (
    <div><p style={{backgroundColor: props.text.length ==0 ? "white" :"red", fontSize:"30px", color:'white', display:"inline-block", height:"100px", width:"200px",display:"flex",  padding:"20px", alignItems:'center'}} >{props.text}</p></div>
  )
}
