import './App.css';
import HomePage from './components/Home';
import Login from "./components/Login";
import Services from "./components/Services";
import Education from "./components/Education";
import Events from "./components/Events";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import LiveStreamCard from "./components/LiveStreamCard";
import SignUp from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path='/edu' element={<Education/> }/>
          <Route path='/events' element={<Events/>} />
          <Route path="/contact" element={<ContactUs/> }/>
          <Route path="/mission" element={<AboutUs/> }/>
          <Route path="/live" element={<LiveStreamCard />} />
          <Route path="/signup" element={<SignUp/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
