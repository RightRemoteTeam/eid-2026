import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { I18nextProvider } from 'react-i18next';
import i18n from "./Components/Locale/i18n";
import Home from './Views/Home';
import Greetings from './Views/Greetings';
import Preview from './Views/Preview';
import Local from "./Components/Locale/Locale";
import { ThemeProvider } from "./Components/ThemeContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider>
  <BrowserRouter>
    <ParallaxProvider>
      
    <Routes>
      <Route path="/" element={ <Local/> } /> 
      <Route path="/:lang/*" element={<App/>}>
        <Route path="" element={ <Home/> }/>
        <Route path="greetings" element={ <Greetings/> }/>
        <Route path="preview" element={ <Preview/> }/>
      </Route>
  </Routes>
    </ParallaxProvider>
  </BrowserRouter>
  </ThemeProvider>
</I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
