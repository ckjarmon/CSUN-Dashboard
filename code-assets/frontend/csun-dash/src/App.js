import React from 'react';
import HomePage from './pages/HomePage'
import PlannerPage from './pages/PlannerPage';
import RatingsPage from './pages/RatingsPage';
import ProfessorSearchPage from './pages/ProfessorSearchPage';
import CS from './elements/majors/CS';
import SignInPage from './pages/SignInPage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import RatingsPageTwo from './pages/RatingsPageTwo';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/planner' element={<PlannerPage/>}/>
            <Route path='/ratings' element={<RatingsPage/>}/>
            <Route path='/ratings-two/:subject/:first_name/:last_name' element={<RatingsPageTwo/>} />
            <Route path='/professor-search' element={<ProfessorSearchPage/>}/>
            <Route path='/cs' element={<CS/>}/>
            <Route path='/signIn' element={<SignInPage/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
