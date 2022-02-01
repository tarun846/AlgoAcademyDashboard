import React from 'react'

function CousrseBox({data}) {
    return (
        <div className = 'dashboard_current' >
            <div className="dashboard-content">
              
              <div className="background-dashboard">
                  <img className = 'course_img' src="/Assets/IMG-20220131-WA0001.jpg" alt=""/>
              <h1> {data.Courses} </h1>
              <div className="teacher_info">
                   <div className="sahis">  
                  <img src="/Assets/user-profile-icon-free-vector.jpg" alt=""/>
                   <div className="binis"> 
                  <div className="instructor"> {data.name} </div>
                  <div className="asistant">  3 Teaching Assistant </div>
              </div>
                  </div>
                  
              </div>   
          </div>
          <div className="second_part">
              <div className="banner">
                  <div className="resource com"> <span> 12  </span>  Resources </div>
                  <div className="topics com">   <span> 3  </span>  Topics </div>
                  <div className="students com">  <span> 23  </span> students </div>
              </div>
                 <div className="activites">
              <div className="active1 activity"> 1 UnPublished resources </div>
              <div className="active2 activity  "> 1 UnPublished resources</div>
              <div className="active3 activity  ">1 UnPublished resources </div>
          </div>
          </div>
              
         </div>
        </div>
    )
}

export default CousrseBox
