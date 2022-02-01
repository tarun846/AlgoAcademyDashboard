import React from 'react'
import CousrseBox from '../minicomponents/CousrseBox'
import Search from '../minicomponents/Search'
import data from '../fakedata'
function DashboardMain() {
     
    return (
        <div className="dashboard_main">
        <Search/>
        <h1 className = 'course_current' style = {{ fontSize : '2rem'}}  >     Your Current Courses... </h1>
          <div className = 'course_structure'>
          {
              data.map( (d,i) => {
                  return <CousrseBox data = {d} key = {i}/>
              } )
          }
          </div>
          <h1  style = {{ fontSize : '2rem'}}  >     Your Previous Courses... </h1>
         

          flgfxlh;

        </div>
    )
}

export default DashboardMain;
