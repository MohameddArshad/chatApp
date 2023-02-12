import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Chat from "./pages/chat/chat";
import {} from "./pages/login/loginStyle";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/"      element={<Login />}  />
        <Route path="/chat"  element={<Chat  />}  />
      </Routes>
    </div>
  );
}

export default App;
