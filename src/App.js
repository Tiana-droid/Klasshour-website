import './App.css';
import { Home, About, FAQ, Contact, Tutor } from './Pages';
import {Route, Routes } from 'react-router-dom'
import styled from 'styled-components';

// import  {AppProps} from "next/app"

const Cover = styled.div`
background: rgba(255, 252, 251, 0.9);
width: 100%;
height: fit-content;

& * {
  font-family: 'Roboto';
  box-sizing: border-box;
}
`

function App() {
  return (
    <Cover>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/faq' element={<FAQ/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/become a tutor' element={<Tutor/>}></Route>
      </Routes>
    </Cover>
  );
}

export default App;
