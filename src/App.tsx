import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
export default function App() {
  return (
    <div className="App h-screen bg-gradient-to-tr from-green-800 to-green-200">
      <Login />
      {/* <Register /> */}
    </div>
  );
}
