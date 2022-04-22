import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [Data,setData]=useState(0)
  const changeShape=()=>{
   var opt=document.getElementById('shape').value;
   if(opt=='Square')
      setData(0);
   if(opt=="Circle")
     setData(1);
 }
 const [items,setItems]=useState([]);
 const addShape=()=>{
  setItems((oldItem)=>{
    return ([...oldItem,Data])
  })
}

  return (
    <div id="main">
      <div id="shape-creator">
         <select onChange={()=>changeShape()} name="" id="shape">
            <option defaultChecked value="Square">Square</option>
            <option value="Circle">Circle</option>
         </select>
        <button onClick={()=>addShape()}>Add shape</button>
      </div>

      <div id="shapes-holder">
        {
          items.map((shapes,index)=>{
            if(shapes==1){
              return(
                <div key={index} className='circle'>
                  {index}
                </div>
              )}
              if(shapes==0){
                return (
                  <div key={index} className='square'>
                    {index}
                  </div>
                )
              }
            }
          )
        }
      </div>

    </div>
    
  )
 
}


export default App;
