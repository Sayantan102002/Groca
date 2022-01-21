import './App.css';

import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
// import Dashboard from './Components/Dashboard/Dashboard';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Cart from './Components/Cart/Cart';
import Orders from './Components/Dashboard/Orders/Orders';
import AccountSettings from './Components/Dashboard/AccountSettings/AccountSettings';
import FAQs from './Components/Dashboard/FAQs/FAQs';
// import PageNotFound from './Components/PageNotFound/PageNotFound';
// import Preloader from './Components/Preloader';
function App() {
  return (
    <div className="App">
      {/* <Preloader/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/SignUp" element={<SignUp />}></Route>
        </Routes>
        {/* <Routes>
          <Route exact path="/Dashboard" element={<Dashboard/>}></Route>
        </Routes> */}
        <Routes>
          <Route exact path="/Dashboard/Orders" element={<Orders/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Dashboard/AccountSettings" element={<AccountSettings/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Dashboard/FAQs" element={<FAQs/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/LogIn" element={<Login/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Cart" element={<Cart/>}></Route>
        </Routes>
        <Routes>
          {/* <Route path="*" element={<PageNotFound/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
