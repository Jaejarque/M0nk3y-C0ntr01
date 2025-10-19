import { format, addMonths } from "date-fns"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, LogOut, User } from "lucide-react"
import ChartPie from "@/components/ChartPie"
import ButtonAdd from "@/components/ButtonAdd"
import ButtonRem from "@/components/ButtonRem"
import Historial from "@/components/Historial"

function Inicio() {
  const [fechaActual, setFechaActual] = useState(format(new Date(), "yyyy-MMMM"))

  const handleChangeMonth = (offset: number) => {
    const nuevaFecha = addMonths(new Date(fechaActual), offset)
    setFechaActual(format(nuevaFecha, "yyyy-MMMM"))
  }

  return (
    <main className="w-full min-h-screen bg-stone-950 flex flex-col">
      <section className="w-[95%] md:w-3/4 mx-auto flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-4">
          <h1 className="text-stone-100 text-2xl font-semibold">M0nk3yC0ntr01</h1>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <User className="text-stone-100" />
              <p className="text-stone-100 text-sm md:text-base">
                andresleiva99@gmail.com
              </p>
            </div>
            <Button variant="destructive" className="flex items-center gap-1">
              <LogOut className="w-4 h-4" />
              Salir
            </Button>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row gap-4 flex-1 pb-6">
          {/* Gráfico */}
          <div className="flex-1 border border-zinc-700 rounded-2xl shadow-sm flex flex-col">
            {/* Encabezado */}
            <div className="text-zinc-100 flex w-full p-4 justify-between items-center border-b border-zinc-700">
              <Button
                variant="ghost"
                onClick={() => handleChangeMonth(-1)}
                className="text-zinc-300 hover:text-white"
              >
                <ChevronLeft />
              </Button>

              <span className="text-xl font-semibold">{fechaActual}</span>

              <Button
                variant="ghost"
                onClick={() => handleChangeMonth(+1)}
                className="text-zinc-300 hover:text-white"
              >
                <ChevronRight />
              </Button>
            </div>

            {/* Gráfico */}
            <div className="flex-1 min-h-[300px] p-2">
              <ChartPie />
            </div>

            {/* Botones */}
            <div className="w-full flex justify-center gap-4 py-4 border-t border-zinc-700">
              <ButtonAdd />
              <ButtonRem />
            </div>
          </div>

          {/* Historial */}
          <div className="flex-1 border border-zinc-700 rounded-2xl shadow-sm flex flex-col overflow-hidden">
            <div className="flex-1 overflow-auto p-2">
              <Historial />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Inicio
