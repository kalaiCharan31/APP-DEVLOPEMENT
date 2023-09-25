import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Home from './pages/Homepage';
import AboutUs from './pages/aboutus';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import WeddingRegistrationForm from '../src/pages/wedding';
import ConfirmationPage from '../src/pages/confirmation';
import FAQ from '../src/pages/faq';
import TermsAndConditions from'../src/pages/terms';
import  PrivacyPolicy from "../src/pages/privacy";
import ContactUs from"../src/pages/contactus";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path='/wedding'element={<WeddingRegistrationForm/>}/>
            <Route path='/confirmation' element={<ConfirmationPage/>}/>
            <Route path='/faq' element={<FAQ/>}/>
            <Route path='/terms' element={<TermsAndConditions/>}/>
            <Route path='/privacy' element={<PrivacyPolicy />}/>
            <Route path='/contactus' element={<ContactUs />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
