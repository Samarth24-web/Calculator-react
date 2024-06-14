const BtnContainer=({onBtnClick})=>{
  const btnName=['c' ,  '1' , '2' , '+' ,'3' , '4' ,'-' , '5' ,'6', '*' , '7' , '8' ,'/' , '=' , ' 9'  , '0' ,'.'];
  return (
        <div className="btn-container">
          {btnName.map((name)=> 
          <button key={name} className='btn'
          onClick={()=>onBtnClick(name)}
          >{name}</button>
          )}
       </div>
       )
}

export default BtnContainer;