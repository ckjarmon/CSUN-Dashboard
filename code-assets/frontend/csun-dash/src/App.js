import React, {useState} from 'react';
import HomePage from './pages/HomePage'
import PlannerPage from './pages/PlannerPage';
import RatingsPage from './pages/RatingsPage';
import ProfessorSearchPage from './pages/ProfessorSearchPage';
import CS from './elements/Majors/CS';
import SignInPage from './pages/SignInPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MajorsMenu from './elements/Majors/MajorsMenu';
import CSMajor from './elements/Majors/CS'
import { Alert } from "@mui/material"

function App() {
  const [alert, setAlert] = useState({})
  const [alertEnabled, setAlertEnabled] = useState(false)


  function handleAlert(alert){
    setAlert(alert)
    setAlertEnabled(true)
    setTimeout(() => {
      setAlertEnabled(false)
      setAlert({})
    }, 2500)
  }


  return (
    <div className="App">
      {
        alertEnabled ?
            <div style={alertContainer}>
              <Alert style={alertStyle} variant="filled" severity={alert.severity}>
                {alert.message}
              </Alert>
            </div> : <div></div>
      }

      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/planner' element={<PlannerPage handleAlert={handleAlert}/>} />
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

const alertStyle = {
  position: "absolute",
  margin: "8px 16px",
  width: "328px"
}

const alertContainer = {
  width: "100w",
  display:"flex",
  justifyContent: "right"
}