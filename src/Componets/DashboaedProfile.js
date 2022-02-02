import React , {useState} from 'react'
import Accordioncontent from "../fakedataAccordion";
import Accordion from '../minicomponents/Accordion';
function DashboaedProfile() {
    const [click, setclick] = useState(null);
    
    console.log(click);
    function toggle(i) {
      // console.log(click);
      console.log(i);
      if (click === i ) {
         return setclick(null)
      }
        setclick(i)
      // console.log(i);
    }
    return (
        <div className = 'DashedProfile' >
            <div className = 'Dashedprofile_content'> 
            <div className = 'profile_img' >
            <img src = '/images.jpeg' />
            </div>
              <div className = 'profile_content'>
              <h1>Hello Rishav</h1>
               <h2> Signout</h2>
              </div>
              
            </div>
            <div className = 'Accordion_holder'>
            {Accordioncontent.map((val , i ) => {
   return  <Accordion data = {val}  key = {i} clicks = {click}  index ={i} toggle={toggle}   />
            })}
                 </div>
        </div>
    
    )
}

export default DashboaedProfile
