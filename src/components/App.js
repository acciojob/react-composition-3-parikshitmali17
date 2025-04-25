
import React,{useState} from "react";
import './../styles/App.css';
import { Tooltip } from "./Tooltip";

const App = () => {

  const [text1,setText1]=useState("");
  const [text2,setText2]=useState("");

 function handleOver1(){
setText1("This is a tooltip")
 }

 function handleOver2(){
  setText2("This is another tooltip")
  
 }


  return (
    <div>
      <Tooltip  text={text1} />
     <h1 style={{height:"200px" ,width:"400px"}} onMouseOut={()=>setText1("")} onMouseOver={handleOver1} >Hover Over Me</h1>

     <h4 onMouseOut={()=>setText2("")}  onMouseOver={handleOver2}>This is another Hover</h4>
     
     <Tooltip text={text2}/>
    </div>
  )
}

export default App
