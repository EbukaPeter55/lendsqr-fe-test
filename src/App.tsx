import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login.component.tsx";

function App() {

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
