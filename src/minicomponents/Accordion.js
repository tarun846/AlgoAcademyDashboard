import React from 'react'

function Accordion({data,clicks,index,toggle,kstyles}) {
  const  { text , title}  = data
//   console.log(data.data.id);
    return (
        <div
        className =  'Accordion'    
        onClick = { () =>toggle(index)}
         >
         <div className ='accordion' >
             
          <h1 style ={{ fontSize :'15px' }} > {data.title}  </h1>
          <span className = {  kstyles ?  'actual1'  :'Change'  } ></span>
             <span className = {  kstyles ?  'actual2'  : 'Change' } ></span>
         </div>
 
       <div  id = 'Accordion-text' className = {clicks === index ? ' AccordionChange' : 'accordion-content' } >  
       <p>  {data.text} </p>      
     </div>

        </div> 
    )
}

export default Accordion
