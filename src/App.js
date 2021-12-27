import './App.css';

import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/SignUp" element={<SignUp />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Dashboard" element={<Dashboard/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/LogIn" element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
