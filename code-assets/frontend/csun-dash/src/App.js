import React from 'react';
import HomePage from './pages/HomePage'
import PlannerPage from './pages/PlannerPage';
import RatingsPage from './pages/RatingsPage';
import ProfessorSearchPage from './pages/ProfessorSearchPage';
import CS from './elements/Majors/CS';
import SignInPage from './pages/SignInPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MajorsMenu from './elements/Majors/MajorsMenu';
import CSMajor from './elements/Majors/CS'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/planner' element={<PlannerPage />} />
          <Route path='/majors' element={<MajorsMenu />} />
          <Route path='/ratings/:subject/:email' element={<RatingsPage/>} />
          <Route path='/professor-search' element={<ProfessorSearchPage />} />
          <Route path='/cs' element={<CS />} />
          <Route path='/signIn' element={<SignInPage />} />

          <Route path='/majors/cs' element={<CSMajor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
