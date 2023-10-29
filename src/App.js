import "./App.css";
import "./Login.css";
import "./Register.css";
import LogInFooter from "./Components/Footers/LogInFooter";
import LoginPage from "./Components/pages/Loginpage/LoginPage";
import NewsFeedFooter from "./Components/Footers/NewsFeedFooter";
import NewsFeedPage from "./Components/pages/NewsFeedPage";
import ProfileFooter from "./Components/Footers/ProfileFooter";
import ProfilePage from "./Components/pages/ProfilePage";
import RegisterPage from "./Components/pages/Register/RegisterPage";
import RegisterFooter from "./Components/Footers/RegisterFooter";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import { useNavigate } from "react-router-dom";
import { AuthContextProvider } from "./Context/Context";

function App() {
  const navigate = useNavigate();
  return (
    <>
      {/* <Navigation /> */}
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/NewsFeed" element={<NewsFeedPage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
