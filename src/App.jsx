import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import BtnContainer from './components/BtnContainer'

function App() {

  const [calVal , setCalVal]= useState("");
  const onBtnClick=(buttonText)=>{
    if(buttonText==="c"){
      setCalVal("");
    }
    else if(buttonText==="="){
      const result=eval(calVal);
      setCalVal(result);
    }
    else{
      let newDisVal=calVal+buttonText;
      setCalVal(newDisVal);
    }
  }
  return (
    <>
     <div className="main-container">
     <Display disVal={calVal}></Display>
     <BtnContainer
      onBtnClick={onBtnClick}
      ></BtnContainer>
     </div>
    </>
  )
}

export default App
