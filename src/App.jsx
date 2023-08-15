import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

  }, [isLoggedIn]);
  return (
    <>
      <Header />
      {!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Dashboard />}
    </>
  );
}
export default App;
