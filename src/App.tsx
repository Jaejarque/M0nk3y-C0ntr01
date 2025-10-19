import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Registrarse from "./pages/Registrarse"
import OlvidePassword from "./pages/OlvidePassword"
import Inicio from "./pages/Inicio"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/registrarse" element={ <Registrarse/> } />
        <Route path="/olvidemipassword" element={ <OlvidePassword/> } />
        <Route path="/inicio" element={ <Inicio/> } />
      </Routes>
    </>
  )
}

export default App
