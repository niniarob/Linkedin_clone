import "./App.css";
import "./Login.css";
import "./Register.css";
import LoginPage from "./Components/pages/Loginpage/LoginPage";
import NewsFeedPage from "./Components/pages/NewsFeedPage";
import ProfilePage from "./Components/pages/ProfilePage";
import RegisterPage from "./Components/pages/Register/RegisterPage";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Context/Context";

function App() {
  return (
    <>
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
