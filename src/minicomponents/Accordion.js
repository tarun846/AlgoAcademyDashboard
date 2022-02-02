import React from 'react'

function Accordion({data,clicks,index,toggle}) {
  const  { text , title}  = data
//   console.log(data.data.id);
    return (
        <div
        className =  'Accordion'    
        onClick = { () =>toggle(index)}
         >
         <div className ='accordion' >
         
              
          <h1 style ={{ fontSize :'10px' , fontWeight : 'bolder' }} > {data.title}  </h1>
           <div className = 'x'  >
             +
              </div>
         
         </div>
 
       <div  id = 'Accordion-text' className = {clicks === index ? ' AccordionChange' : 'accordion-content' } >  
       <p>  {data.text} </p>      
     </div>

        </div> 
    )
}

export default Accordion
