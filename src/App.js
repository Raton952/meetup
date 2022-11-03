import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import JoinMeeting from "./Components/JoinMeeting/JoinMeeting";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/join-meeting' element={<JoinMeeting />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
