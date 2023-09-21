import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Chart from './Chats/Chat'
import Task from './Pages/Task/Task'
import Contact from './Pages/Contact/Contact'
import Settings from './Pages/Settings/Settings'
import GlobalStateProvider from './Contexts/GlobalStateProvider'
import Support from './Pages/Support/Support'
import User from './Pages/User/User'
import Subscription from './Pages/Subscription/Subscription'
import Tags from './Pages/Tags/Tags'
import CompanyBranding from './Pages/CompanyBranding/CompanyBranding'
import AccountsSecurity from './Pages/AccountSecurity/AccountsSecurity'
import Notifications from './Pages/Notifications/Notifications'
import UpgradePlan from './Pages/UpgradePlan/UpgradePlan'
import SideBar from './Components/SideBar/SideBar'

function App() {


  return (
    <GlobalStateProvider>
      <SideBar>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/task' element={<Task />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/chats' element={<Chart />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/support' element={<Support />} />
        <Route path='/user' element={<User />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/tags' element={<Tags />} />
        <Route path='/company-branding' element={<CompanyBranding />} />
        <Route path='/accounts-security' element={<AccountsSecurity />} />
        <Route path='/notification' element={<Notifications />} />
        <Route path='/upgrade-plan' element={<UpgradePlan />} />
      </Routes>
      </SideBar>
   </GlobalStateProvider>
  )
}

export default App