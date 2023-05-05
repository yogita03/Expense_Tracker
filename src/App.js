// import SignUpForm from "./components/LoginSignUp/SignUpForm";
import SignUpForm from './components/loginSignUp/signUpForm'
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
function App() {
  return (
    <div>
      <Routes>
       <Route path="/" element={<SignUpForm/>}></Route>
       <Route path="/home/:idToken" element={<Home/>}></Route>

       </Routes>
    </div>
  );
}

export default App;