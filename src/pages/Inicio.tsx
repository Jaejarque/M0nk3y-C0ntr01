import { format, addMonths } from "date-fns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, LogOut, User } from "lucide-react";
import ChartPie from "@/components/ChartPie";
import ButtonAdd from "@/components/ButtonAdd";
import ButtonRem from "@/components/ButtonRem";
import Historial from "@/components/Historial";
import TotalIngresado from "@/components/TotalIngresado";
import TotalEgresado from "@/components/TotalEgresado";
import CantIngresado from "@/components/CantIngresado";
import CantEgresado from "@/components/CantEgresado";
import ChartBar from "@/components/ChartBar";
import { ChartIngresos } from "@/components/ChartIngresos";
import { ChartEgresos } from "@/components/ChartEgresos";

function Inicio() {
  const [fechaActual, setFechaActual] = useState(
    format(new Date(), "yyyy-MMMM")
  );

  const handleChangeMonth = (offset: number) => {
    const nuevaFecha = addMonths(new Date(fechaActual), offset);
    setFechaActual(format(nuevaFecha, "yyyy-MMMM"));
  };

  return (
    <main className="w-full min-h-screen bg-stone-950 flex flex-col">
      <section className="w-[95%] md:w-3/4 mx-auto flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-4">
          <h1 className="text-stone-100 text-2xl font-semibold">
            M0nk3yC0ntr01
          </h1>

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
        <div className="flex flex-col lg:flex-row gap-4 w-full justify-between pb-6">
          {/** Total ingresado */}
          <TotalIngresado />
          {/** Total egresado */}
          <TotalEgresado />
          {/** cantidad de veces ingresado */}
          <CantIngresado />
          {/** cantidad de veces ingresado */}
          <CantEgresado />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 w-full justify-between pb-6">
          <ChartBar />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 w-full justify-between pb-6">
          {/* Chart Mayores ingresos */}
          <div className="flex-1 border border-zinc-700 rounded-2xl shadow-sm flex flex-col">
            <ChartIngresos/>
          </div>
          {/* Chart Mayores gastos */}
          <div className="flex-1 border border-zinc-700 rounded-2xl shadow-sm flex flex-col">
            <ChartEgresos/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Inicio;
