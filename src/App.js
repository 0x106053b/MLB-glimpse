import React from 'react'
import MainPage from './Pages/MainPage/MainPage'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import './App.css'
import LeaguePage from './Pages/LeaguePage/LeaguePage';
import Nav from './Components/Nav/Nav'
import TeamPage from './Pages/TeamPage/TeamPage';
import { AnimatePresence } from 'framer-motion';
import NewsPage from './Pages/NewsPage/NewsPage';


const MainLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
}

const MenuLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

const App = () => {
  return (
    <div className="app">
      <AnimatePresence>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate replace to="/main" />} />
            <Route path="/main" element={<MainPage />} />
          </Route>
          <Route element={<MenuLayout />}>
            <Route path="/league" element={<LeaguePage />}></Route>
            <Route path="/team" element={<TeamPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App;