import React from 'react'

function Search() {
    return (
        <>
        <div className="main_search">
<div className="search">
<input type="text" placeholder="search" />

   <div className = 'button_click' >
   <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8.75025" cy="8.75025" r="7.75025" stroke="black" stroke-width="2"/>
<path d="M13.2577 7.42489C12.8586 5.1885 9.54568 3.18193 7.11112 4.65759" stroke="black" stroke-width="2" stroke-linecap="round"/>
<line x1="14.2473" y1="15.1674" x2="21" y2="21.92" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
       </div> 


{/* <img src="/Assets/free-search-icon-free-vector-1.jpg" alt=""/> */}
{/* Search   */}

</div>
<div className="sahi">
    <div className="notification_img">
        <img src="./Assets/IMG-20220131-WA0009.jpg" alt=""/>
    </div>
    <div className="notification-date">  Today 3rd Dec </div>
</div>
        </div>
      <div className="course_info">
      <h1>  <span className = 'tot' > 27 </span> courses  </h1> 
      <h1> <span className = 'tot'> 318 </span> students  </h1>
      <h1> <span className = 'tot' > 27 </span> Resources </h1>
      <a href="">
      
      + Add a new courses 
      </a>
   </div>  
   </>
    )
}

export default Search
{/* <div className="main_search">
<div className="search">
  
     <!-- <img src="./Assets/free-search-icon-free-vector-1.jpg" alt=""> -->
</div>
<div className="sahi">
    <div className="notification_img">
        <img src="./Assets/IMG-20220131-WA0009.jpg" alt=""/>
    </div>
    <div className="notification-date">  Today 3rd Dec </div>
</div>

</div> */}