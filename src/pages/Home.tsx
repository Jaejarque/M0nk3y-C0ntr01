import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
function Home() {
    const navigate = useNavigate();
  return (
    <main
    className="w-full h-screen bg-stone-950 flex flex-col justify-center items-center"
    >
        <h1
        className="text-4xl text-stone-100 py-4"
        >M0nk3y C0ntr01</h1>
        <h3
        className="text-xl text-stone-400 py-2"
        >Ingresa y gestiona tu dinero de forma interactiva y segura. </h3>

        <div
        className="flex space-x-2 mt-4"
        >
            <Button
            onClick={() => navigate("/login")}
            >Ingresar</Button>
            <Button
            onClick={() => navigate("/registrarse")}
            >Registrarse</Button>
        </div>
    </main>
  )
}

export default Home