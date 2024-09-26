import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Chat from "./Chats/Chat";
import Task from "./Pages/Task/Task";
import Contact from "./Pages/Contact/Contact";
import Settings from "./Pages/Settings/Settings";
import GlobalStateProvider from "./Contexts/GlobalStateProvider";
import Support from "./Pages/Support/Support";
import User from "./Pages/User/User";
import Subscription from "./Pages/Subscription/Subscription";
import Tags from "./Pages/Tags/Tags";
import CompanyBranding from "./Pages/CompanyBranding/CompanyBranding";
import AccountsSecurity from "./Pages/AccountSecurity/AccountsSecurity";
import Notifications from "./Pages/Notifications/Notifications";
import SideBar from "./Components/SideBar/SideBar";
import Form from "./Pages/Form/Form";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStateProvider>
        <SideBar>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/task" element={<Task />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/form" element={<Form />} />
            <Route path="/chats" element={<Chat />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
            <Route path="/user" element={<User />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/company-branding" element={<CompanyBranding />} />
            <Route path="/accounts-security" element={<AccountsSecurity />} />
            <Route path="/notification" element={<Notifications />} />
          </Routes>
        </SideBar>
      </GlobalStateProvider>
    </DndProvider>
  );
}

export default App;
