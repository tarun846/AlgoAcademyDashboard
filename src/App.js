import React from 'react'
import Dashboardnav from './Componets/Dashboardnav'
import DashboardMain from './Componets/DashboardMain'
import Dashboardprofile from './Componets/DashboaedProfile'

function App() {
  return (
    <div>
      <main className = 'mainstyle' >
        <Dashboardnav />
         <DashboardMain/>
          <Dashboardprofile/>
        
      </main>
    </div>
  )
}

export default App
