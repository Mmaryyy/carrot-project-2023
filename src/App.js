import './styles/variable.css';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { Fragment, useState } from 'react';
import Index from './components/Index'
import Join from './components/Join'
import userJson from './datas/userData.json'
import dummyJson from './datas/dummyData.json'
import Login from './components/Login';
import Mypage from './components/Mypage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  const [userData, setUserData] = useState(userJson)
  const [dummyData, setDummyData] = useState(dummyJson)

  {/*Login.js, Mypage.js에서 사용할 state -> mypage에 아이디 띄워야 해서 가져옴 */ }
  const [nickname, setNickname] = useState('');

  return (
    <BrowserRouter>
      <Header/>
      <Fragment>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/join" element={<Join userData={userData} setUserData={setUserData} />} />
          <Route path="/login" element={<Login setNickname={setNickname} userData={userData}/>} />
          <Route path="/mypage" element={<Mypage/>} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
