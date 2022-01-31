import React from 'react'

function CousrseBox({data}) {
    return (
        <div className = 'dashboard_current' >
            <div class="dashboard-content">
              
              <div class="background-dashboard">
                  <img src="/Assets/IMG-20220131-WA0001.jpg" alt=""/>
              <h1> {data.Courses} </h1>
              <div class="teacher_info">
                   <div class="sahis">  
                  <img src="/Assets/user-profile-icon-free-vector.jpg" alt=""/>
                   <div class="binis"> 
                  <div class="instructor"> {data.name} </div>
                  <div class="asistant">  3 Teaching Assistant </div>
              </div>
                  </div>
                  
              </div>   
          </div>
          <div class="second_part">
              <div class="banner">
                  <div class="resource com"> <span> 12  </span>  Resources </div>
                  <div class="topics com">   <span> 3  </span>  Topics </div>
                  <div class="students com">  <span> 23  </span> students </div>
              </div>
                 <div class="activites">
              <div class="active1 activity"> 1 UnPublished resources </div>
              <div class="active2 activity  "> 1 UnPublished resources</div>
              <div class="active3 activity  ">1 UnPublished resources </div>
          </div>
          </div>
              
         </div>
        </div>
    )
}

export default CousrseBox
