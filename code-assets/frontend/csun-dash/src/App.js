/* eslint-disable react/jsx-pascal-case */
import React, {useState} from 'react';
import HomePage from './pages/HomePage'
import PlannerPage from './pages/PlannerPage';
import RatingsPage from './pages/RatingsPage';
import ProfessorSearchPage from './pages/ProfessorSearchPage';
import SignInPage from './pages/SignInPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MajorsMenu from './elements/Majors/MajorsMenu';
import CSMajor from './elements/Majors/CS'
import CSMajor_2 from './elements/Majors/CS2'
import { Alert } from "@mui/material"

import _A242 from './elements/Majors/react_files/a242'
import _A06B from './elements/Majors/react_files/a06b'
import _B74C from './elements/Majors/react_files/b74c'
import _B77D from './elements/Majors/react_files/b77d'
import _FD83 from './elements/Majors/react_files/fd83'
import _81A9 from './elements/Majors/react_files/81a9'
import _AF7C from './elements/Majors/react_files/af7c'
import _82FE from './elements/Majors/react_files/82fe'
import _1209 from './elements/Majors/react_files/1209'
import _FCDA from './elements/Majors/react_files/fcda'
import _DBCF from './elements/Majors/react_files/dbcf'
import _904C from './elements/Majors/react_files/904c'
import _BBF0 from './elements/Majors/react_files/bbf0'
import _3B5D from './elements/Majors/react_files/3b5d'
import _DCB8 from './elements/Majors/react_files/dcb8'
import _29A4 from './elements/Majors/react_files/29a4'
import _B2DA from './elements/Majors/react_files/b2da'
import _7BD7 from './elements/Majors/react_files/7bd7'
import _6CB7 from './elements/Majors/react_files/6cb7'
import _514C from './elements/Majors/react_files/514c'
import _9DE4 from './elements/Majors/react_files/9de4'
import _A0A4 from './elements/Majors/react_files/a0a4'
import _E99B from './elements/Majors/react_files/e99b'
import _630D from './elements/Majors/react_files/630d'
import _9CD5 from './elements/Majors/react_files/9cd5'
import _2F07 from './elements/Majors/react_files/2f07'
import _58F8 from './elements/Majors/react_files/58f8'
import _6D99 from './elements/Majors/react_files/6d99'
import _A2F3 from './elements/Majors/react_files/a2f3'
import _87C7 from './elements/Majors/react_files/87c7'
import _BC18 from './elements/Majors/react_files/bc18'
import _1050 from './elements/Majors/react_files/1050'
import _F557 from './elements/Majors/react_files/f557'
import _54B7 from './elements/Majors/react_files/54b7'
import _5183 from './elements/Majors/react_files/5183'
import _B637 from './elements/Majors/react_files/b637'
import _D454 from './elements/Majors/react_files/d454'
import _E5F8 from './elements/Majors/react_files/e5f8'
import _63F6 from './elements/Majors/react_files/63f6'
import _F8F2 from './elements/Majors/react_files/f8f2'
import _4698 from './elements/Majors/react_files/4698'
import _C180 from './elements/Majors/react_files/c180'
import _9055 from './elements/Majors/react_files/9055'
import _52B1 from './elements/Majors/react_files/52b1'
import _C71A from './elements/Majors/react_files/c71a'
import _37FE from './elements/Majors/react_files/37fe'
import _77A1 from './elements/Majors/react_files/77a1'
import _DE46 from './elements/Majors/react_files/de46'
import _74B0 from './elements/Majors/react_files/74b0'
import _EB45 from './elements/Majors/react_files/eb45'
import _C909 from './elements/Majors/react_files/c909'
import _D283 from './elements/Majors/react_files/d283'
import _34F8 from './elements/Majors/react_files/34f8'
import _211E from './elements/Majors/react_files/211e'
import _45E7 from './elements/Majors/react_files/45e7'
import _86BB from './elements/Majors/react_files/86bb'
import _690E from './elements/Majors/react_files/690e'
import _8F4C from './elements/Majors/react_files/8f4c'
import _0E0A from './elements/Majors/react_files/0e0a'
import _2762 from './elements/Majors/react_files/2762'
import _C634 from './elements/Majors/react_files/c634'
import _2B9C from './elements/Majors/react_files/2b9c'
import _4995 from './elements/Majors/react_files/4995'
import _E45C from './elements/Majors/react_files/e45c'
import _5E19 from './elements/Majors/react_files/5e19'
import _D648 from './elements/Majors/react_files/d648'
import _27FF from './elements/Majors/react_files/27ff'
import _5B6B from './elements/Majors/react_files/5b6b'
import _66E1 from './elements/Majors/react_files/66e1'
import _8CD5 from './elements/Majors/react_files/8cd5'
import _E1DE from './elements/Majors/react_files/e1de'
import _D0F8 from './elements/Majors/react_files/d0f8'
import _2BBE from './elements/Majors/react_files/2bbe'
import _9BAE from './elements/Majors/react_files/9bae'
import _B287 from './elements/Majors/react_files/b287'
import _1D9D from './elements/Majors/react_files/1d9d'
import _7EAA from './elements/Majors/react_files/7eaa'
import _FA0E from './elements/Majors/react_files/fa0e'
import _48A3 from './elements/Majors/react_files/48a3'
import _CADF from './elements/Majors/react_files/cadf'
import _CDF2 from './elements/Majors/react_files/cdf2'
import _0829 from './elements/Majors/react_files/0829'
import _5540 from './elements/Majors/react_files/5540'
import _D7E7 from './elements/Majors/react_files/d7e7'
import _A0E1 from './elements/Majors/react_files/a0e1'
import _3DA4 from './elements/Majors/react_files/3da4'
import _44FC from './elements/Majors/react_files/44fc'
import _BEC8 from './elements/Majors/react_files/bec8'
import _3057 from './elements/Majors/react_files/3057'
import _4142 from './elements/Majors/react_files/4142'
import _AD53 from './elements/Majors/react_files/ad53'
import _3779 from './elements/Majors/react_files/3779'
import _C35B from './elements/Majors/react_files/c35b'
import _5440 from './elements/Majors/react_files/5440'
import _BCAE from './elements/Majors/react_files/bcae'
import _D9E3 from './elements/Majors/react_files/d9e3'
import _2B93 from './elements/Majors/react_files/2b93'
import _28A3 from './elements/Majors/react_files/28a3'
import _D020 from './elements/Majors/react_files/d020'
import _DA70 from './elements/Majors/react_files/da70'
import _1C24 from './elements/Majors/react_files/1c24'
import _CBEF from './elements/Majors/react_files/cbef'
import _6728 from './elements/Majors/react_files/6728'
import _893A from './elements/Majors/react_files/893a'
import _2F2E from './elements/Majors/react_files/2f2e'
import _BDDF from './elements/Majors/react_files/bddf'
import _F333 from './elements/Majors/react_files/f333'
import _89D2 from './elements/Majors/react_files/89d2'
import _2C06 from './elements/Majors/react_files/2c06'
import _FD3F from './elements/Majors/react_files/fd3f'
import _CBC1 from './elements/Majors/react_files/cbc1'
import _B694 from './elements/Majors/react_files/b694'
import _813B from './elements/Majors/react_files/813b'
import _093C from './elements/Majors/react_files/093c'
import _C5C5 from './elements/Majors/react_files/c5c5'
import _4974 from './elements/Majors/react_files/4974'
import _CF1D from './elements/Majors/react_files/cf1d'
import _D1E9 from './elements/Majors/react_files/d1e9'
import _C4B6 from './elements/Majors/react_files/c4b6'
import _BCA5 from './elements/Majors/react_files/bca5'
import _78DA from './elements/Majors/react_files/78da'
import _C614 from './elements/Majors/react_files/c614'
import _676E from './elements/Majors/react_files/676e'
import _8A15 from './elements/Majors/react_files/8a15'
import _4E74 from './elements/Majors/react_files/4e74'
import _1375 from './elements/Majors/react_files/1375'
import _D951 from './elements/Majors/react_files/d951'
import _45CE from './elements/Majors/react_files/45ce'
import _215C from './elements/Majors/react_files/215c'
import _A1A8 from './elements/Majors/react_files/a1a8'
import _E390 from './elements/Majors/react_files/e390'
import _6C7B from './elements/Majors/react_files/6c7b'
import _F10E from './elements/Majors/react_files/f10e'
import _DCC2 from './elements/Majors/react_files/dcc2'
import _6FA4 from './elements/Majors/react_files/6fa4'
import _EF68 from './elements/Majors/react_files/ef68'
import _E02F from './elements/Majors/react_files/e02f'
import _02A2 from './elements/Majors/react_files/02a2'
import _DCEA from './elements/Majors/react_files/dcea'
import _2209 from './elements/Majors/react_files/2209'
import _330B from './elements/Majors/react_files/330b'
import _68DF from './elements/Majors/react_files/68df'
import _D19C from './elements/Majors/react_files/d19c'
import _3358 from './elements/Majors/react_files/3358'
import _FB00 from './elements/Majors/react_files/fb00'
import _449A from './elements/Majors/react_files/449a'
import _3A0D from './elements/Majors/react_files/3a0d'


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
          <Route path='/ratings/:subject/:email' element={<RatingsPage />} />
          <Route path='/faculty' element={<ProfessorSearchPage />} />
          <Route path='/signIn' element={<SignInPage />} />

          <Route path='/majors/cs' element={<CSMajor />} />
          <Route path='/majors/cs_2' element={<CSMajor_2 />} />
        

          <Route path='/majors/a242' element={<_A242 />} />
          <Route path='/majors/a06b' element={<_A06B />} />
          <Route path='/majors/b74c' element={<_B74C />} />
          <Route path='/majors/b77d' element={<_B77D />} />
          <Route path='/majors/fd83' element={<_FD83 />} />
          <Route path='/majors/81a9' element={<_81A9 />} />
          <Route path='/majors/af7c' element={<_AF7C />} />
          <Route path='/majors/82fe' element={<_82FE />} />
          <Route path='/majors/1209' element={<_1209 />} />
          <Route path='/majors/fcda' element={<_FCDA />} />
          <Route path='/majors/dbcf' element={<_DBCF />} />
          <Route path='/majors/904c' element={<_904C />} />
          <Route path='/majors/bbf0' element={<_BBF0 />} />
          <Route path='/majors/3b5d' element={<_3B5D />} />
          <Route path='/majors/dcb8' element={<_DCB8 />} />
          <Route path='/majors/29a4' element={<_29A4 />} />
          <Route path='/majors/b2da' element={<_B2DA />} />
          <Route path='/majors/7bd7' element={<_7BD7 />} />
          <Route path='/majors/6cb7' element={<_6CB7 />} />
          <Route path='/majors/514c' element={<_514C />} />
          <Route path='/majors/9de4' element={<_9DE4 />} />
          <Route path='/majors/a0a4' element={<_A0A4 />} />
          <Route path='/majors/e99b' element={<_E99B />} />
          <Route path='/majors/630d' element={<_630D />} />
          <Route path='/majors/9cd5' element={<_9CD5 />} />
          <Route path='/majors/2f07' element={<_2F07 />} />
          <Route path='/majors/58f8' element={<_58F8 />} />
          <Route path='/majors/6d99' element={<_6D99 />} />
          <Route path='/majors/a2f3' element={<_A2F3 />} />
          <Route path='/majors/87c7' element={<_87C7 />} />
          <Route path='/majors/bc18' element={<_BC18 />} />
          <Route path='/majors/1050' element={<_1050 />} />
          <Route path='/majors/f557' element={<_F557 />} />
          <Route path='/majors/54b7' element={<_54B7 />} />
          <Route path='/majors/5183' element={<_5183 />} />
          <Route path='/majors/b637' element={<_B637 />} />
          <Route path='/majors/d454' element={<_D454 />} />
          <Route path='/majors/e5f8' element={<_E5F8 />} />
          <Route path='/majors/63f6' element={<_63F6 />} />
          <Route path='/majors/f8f2' element={<_F8F2 />} />
          <Route path='/majors/4698' element={<_4698 />} />
          <Route path='/majors/c180' element={<_C180 />} />
          <Route path='/majors/9055' element={<_9055 />} />
          <Route path='/majors/52b1' element={<_52B1 />} />
          <Route path='/majors/c71a' element={<_C71A />} />
          <Route path='/majors/37fe' element={<_37FE />} />
          <Route path='/majors/77a1' element={<_77A1 />} />
          <Route path='/majors/de46' element={<_DE46 />} />
          <Route path='/majors/74b0' element={<_74B0 />} />
          <Route path='/majors/eb45' element={<_EB45 />} />
          <Route path='/majors/c909' element={<_C909 />} />
          <Route path='/majors/d283' element={<_D283 />} />
          <Route path='/majors/34f8' element={<_34F8 />} />
          <Route path='/majors/211e' element={<_211E />} />
          <Route path='/majors/45e7' element={<_45E7 />} />
          <Route path='/majors/86bb' element={<_86BB />} />
          <Route path='/majors/690e' element={<_690E />} />
          <Route path='/majors/8f4c' element={<_8F4C />} />
          <Route path='/majors/0e0a' element={<_0E0A />} />
          <Route path='/majors/2762' element={<_2762 />} />
          <Route path='/majors/c634' element={<_C634 />} />
          <Route path='/majors/2b9c' element={<_2B9C />} />
          <Route path='/majors/4995' element={<_4995 />} />
          <Route path='/majors/e45c' element={<_E45C />} />
          <Route path='/majors/5e19' element={<_5E19 />} />
          <Route path='/majors/d648' element={<_D648 />} />
          <Route path='/majors/27ff' element={<_27FF />} />
          <Route path='/majors/5b6b' element={<_5B6B />} />
          <Route path='/majors/66e1' element={<_66E1 />} />
          <Route path='/majors/8cd5' element={<_8CD5 />} />
          <Route path='/majors/e1de' element={<_E1DE />} />
          <Route path='/majors/d0f8' element={<_D0F8 />} />
          <Route path='/majors/2bbe' element={<_2BBE />} />
          <Route path='/majors/9bae' element={<_9BAE />} />
          <Route path='/majors/b287' element={<_B287 />} />
          <Route path='/majors/1d9d' element={<_1D9D />} />
          <Route path='/majors/7eaa' element={<_7EAA />} />
          <Route path='/majors/fa0e' element={<_FA0E />} />
          <Route path='/majors/48a3' element={<_48A3 />} />
          <Route path='/majors/cadf' element={<_CADF />} />
          <Route path='/majors/cdf2' element={<_CDF2 />} />
          <Route path='/majors/0829' element={<_0829 />} />
          <Route path='/majors/5540' element={<_5540 />} />
          <Route path='/majors/d7e7' element={<_D7E7 />} />
          <Route path='/majors/a0e1' element={<_A0E1 />} />
          <Route path='/majors/3da4' element={<_3DA4 />} />
          <Route path='/majors/44fc' element={<_44FC />} />
          <Route path='/majors/bec8' element={<_BEC8 />} />
          <Route path='/majors/3057' element={<_3057 />} />
          <Route path='/majors/4142' element={<_4142 />} />
          <Route path='/majors/ad53' element={<_AD53 />} />
          <Route path='/majors/3779' element={<_3779 />} />
          <Route path='/majors/c35b' element={<_C35B />} />
          <Route path='/majors/5440' element={<_5440 />} />
          <Route path='/majors/bcae' element={<_BCAE />} />
          <Route path='/majors/d9e3' element={<_D9E3 />} />
          <Route path='/majors/2b93' element={<_2B93 />} />
          <Route path='/majors/28a3' element={<_28A3 />} />
          <Route path='/majors/d020' element={<_D020 />} />
          <Route path='/majors/da70' element={<_DA70 />} />
          <Route path='/majors/1c24' element={<_1C24 />} />
          <Route path='/majors/cbef' element={<_CBEF />} />
          <Route path='/majors/6728' element={<_6728 />} />
          <Route path='/majors/893a' element={<_893A />} />
          <Route path='/majors/2f2e' element={<_2F2E />} />
          <Route path='/majors/bddf' element={<_BDDF />} />
          <Route path='/majors/f333' element={<_F333 />} />
          <Route path='/majors/89d2' element={<_89D2 />} />
          <Route path='/majors/2c06' element={<_2C06 />} />
          <Route path='/majors/fd3f' element={<_FD3F />} />
          <Route path='/majors/cbc1' element={<_CBC1 />} />
          <Route path='/majors/b694' element={<_B694 />} />
          <Route path='/majors/813b' element={<_813B />} />
          <Route path='/majors/093c' element={<_093C />} />
          <Route path='/majors/c5c5' element={<_C5C5 />} />
          <Route path='/majors/4974' element={<_4974 />} />
          <Route path='/majors/cf1d' element={<_CF1D />} />
          <Route path='/majors/d1e9' element={<_D1E9 />} />
          <Route path='/majors/c4b6' element={<_C4B6 />} />
          <Route path='/majors/bca5' element={<_BCA5 />} />
          <Route path='/majors/78da' element={<_78DA />} />
          <Route path='/majors/c614' element={<_C614 />} />
          <Route path='/majors/676e' element={<_676E />} />
          <Route path='/majors/8a15' element={<_8A15 />} />
          <Route path='/majors/4e74' element={<_4E74 />} />
          <Route path='/majors/1375' element={<_1375 />} />
          <Route path='/majors/d951' element={<_D951 />} />
          <Route path='/majors/45ce' element={<_45CE />} />
          <Route path='/majors/215c' element={<_215C />} />
          <Route path='/majors/a1a8' element={<_A1A8 />} />
          <Route path='/majors/e390' element={<_E390 />} />
          <Route path='/majors/6c7b' element={<_6C7B />} />
          <Route path='/majors/f10e' element={<_F10E />} />
          <Route path='/majors/dcc2' element={<_DCC2 />} />
          <Route path='/majors/6fa4' element={<_6FA4 />} />
          <Route path='/majors/ef68' element={<_EF68 />} />
          <Route path='/majors/e02f' element={<_E02F />} />
          <Route path='/majors/02a2' element={<_02A2 />} />
          <Route path='/majors/dcea' element={<_DCEA />} />
          <Route path='/majors/2209' element={<_2209 />} />
          <Route path='/majors/330b' element={<_330B />} />
          <Route path='/majors/68df' element={<_68DF />} />
          <Route path='/majors/d19c' element={<_D19C />} />
          <Route path='/majors/3358' element={<_3358 />} />
          <Route path='/majors/fb00' element={<_FB00 />} />
          <Route path='/majors/449a' element={<_449A />} />
          <Route path='/majors/3a0d' element={<_3A0D />} />



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