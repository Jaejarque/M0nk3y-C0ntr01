import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, LogOut, User } from "lucide-react";

type Movimiento = "ingreso" | "egreso";

interface Registro {
  fecha: string;
  importe: number;
  movimiento: Movimiento;
  descripcion: string;
}

const registros: Registro[] = [
  // ENERO
  { fecha: "2025-01-02", importe: 80000, movimiento: "ingreso", descripcion: "Venta del día" },
  { fecha: "2025-01-03", importe: 75000, movimiento: "ingreso", descripcion: "Venta del día" },
  { fecha: "2025-01-05", importe: 15000, movimiento: "egreso", descripcion: "Compra de harina y carne" },
  { fecha: "2025-01-08", importe: 12000, movimiento: "egreso", descripcion: "Compra de harina y carne" },
  { fecha: "2025-01-12", importe: 60000, movimiento: "ingreso", descripcion: "Pedido por catering" },
  { fecha: "2025-01-15", importe: 20000, movimiento: "egreso", descripcion: "Pago de servicios" },
  { fecha: "2025-01-28", importe: 18000, movimiento: "egreso", descripcion: "Pago de servicios" },

  // FEBRERO
  { fecha: "2025-02-01", importe: 90000, movimiento: "ingreso", descripcion: "Venta del día" },
  { fecha: "2025-02-03", importe: 88000, movimiento: "ingreso", descripcion: "Venta del día" },
  { fecha: "2025-02-06", importe: 25000, movimiento: "egreso", descripcion: "Compra de harina y carne" },
  { fecha: "2025-02-08", importe: 22000, movimiento: "egreso", descripcion: "Compra de harina y carne" },
  { fecha: "2025-02-14", importe: 85000, movimiento: "ingreso", descripcion: "Venta especial" },
  { fecha: "2025-02-20", importe: 25000, movimiento: "egreso", descripcion: "Pago de servicios" },
  { fecha: "2025-02-25", importe: 26000, movimiento: "egreso", descripcion: "Pago de servicios" },

  // MARZO
  { fecha: "2025-03-01", importe: 95000, movimiento: "ingreso", descripcion: "Venta del día" },
  { fecha: "2025-03-04", importe: 92000, movimiento: "ingreso", descripcion: "Venta del día" },
  { fecha: "2025-03-07", importe: 40000, movimiento: "egreso", descripcion: "Compra de harina y carne" },
  { fecha: "2025-03-09", importe: 36000, movimiento: "egreso", descripcion: "Compra de harina y carne" },
  { fecha: "2025-03-15", importe: 95000, movimiento: "ingreso", descripcion: "Pedido por catering" },
  { fecha: "2025-03-18", importe: 98000, movimiento: "ingreso", descripcion: "Pedido por catering" },
  { fecha: "2025-03-25", importe: 30000, movimiento: "egreso", descripcion: "Pago de servicios" },
  { fecha: "2025-03-28", importe: 27000, movimiento: "egreso", descripcion: "Pago de servicios" },

  // ABRIL
  { fecha: "2025-04-02", importe: 105000, movimiento: "ingreso", descripcion: "Venta del día" },
  { fecha: "2025-04-03", importe: 97000, movimiento: "ingreso", descripcion: "Venta del día" },
  { fecha: "2025-04-06", importe: 35000, movimiento: "egreso", descripcion: "Compra de harina y carne" },
  { fecha: "2025-04-10", importe: 32000, movimiento: "egreso", descripcion: "Compra de harina y carne" },
  { fecha: "2025-04-15", importe: 115000, movimiento: "ingreso", descripcion: "Venta especial" },
  { fecha: "2025-04-18", importe: 110000, movimiento: "ingreso", descripcion: "Venta especial" },
  { fecha: "2025-04-21", importe: 28000, movimiento: "egreso", descripcion: "Pago de servicios" },
  { fecha: "2025-04-27", importe: 26000, movimiento: "egreso", descripcion: "Pago de servicios" },

  // MAYO
  { fecha: "2025-05-02", importe: 95000, movimiento: "ingreso", descripcion: "Venta del día" },
  { fecha: "2025-05-04", importe: 98000, movimiento: "ingreso", descripcion: "Venta del día" },
  { fecha: "2025-05-07", importe: 26000, movimiento: "egreso", descripcion: "Compra de harina y carne" },
  { fecha: "2025-05-09", importe: 24000, movimiento: "egreso", descripcion: "Compra de harina y carne" },
  { fecha: "2025-05-18", importe: 102000, movimiento: "ingreso", descripcion: "Pedido por catering" },
  { fecha: "2025-05-20", importe: 99000, movimiento: "ingreso", descripcion: "Pedido por catering" },
  { fecha: "2025-05-22", importe: 25000, movimiento: "egreso", descripcion: "Pago de servicios" },
  { fecha: "2025-05-28", importe: 23000, movimiento: "egreso", descripcion: "Pago de servicios" },

  // JUNIO
  { fecha: "2025-06-02", importe: 97000, movimiento: "ingreso", descripcion: "Venta del día" },
  { fecha: "2025-06-05", importe: 94000, movimiento: "ingreso", descripcion: "Venta del día" },
  { fecha: "2025-06-10", importe: 40000, movimiento: "egreso", descripcion: "Compra de harina y carne" },
  { fecha: "2025-06-13", importe: 35000, movimiento: "egreso", descripcion: "Compra de harina y carne" },
  { fecha: "2025-06-15", importe: 120000, movimiento: "ingreso", descripcion: "Venta especial" },
  { fecha: "2025-06-18", importe: 118000, movimiento: "ingreso", descripcion: "Venta especial" },
  { fecha: "2025-06-22", importe: 27000, movimiento: "egreso", descripcion: "Pago de servicios" },
  { fecha: "2025-06-25", importe: 26000, movimiento: "egreso", descripcion: "Pago de servicios" }
];


function Inicio() {
    
    

  return (
    <main className="w-full h-screen bg-stone-950 flex flex-col">
      <section className="w-3/4 h-screen mx-auto">
        {/** Logout e inicio */}
        <div className="flex justify-between p-4">
          {/** Inicio */}
          <div>
            <h1
            className="text-stone-100 text-2xl font-semibold"
            >M0nk3yC0ntr01</h1>
          </div>

          {/** Logout */}
          <div
          className="flex items-center gap-6"
          >
            {/** Usuario */}
            <div
            className="flex gap-2"
            >
              <User className="text-stone-100" />
              <p className="text-stone-100">andresleiva99@gmail.com</p>
            </div>
            {/** Button */}
            <Button variant={"destructive"}>
              <LogOut />
              Salir
            </Button>
          </div>
        </div>

        {/** Grafico e historial */}
        <div
        className="flex items-center gap-4"
        >
            {/** Grafico */}
            <div
            className="flex-1 border"
            >
                <div
                className="text-zinc-100 flex w-full p-4 justify-between"
                >
                    <ChevronLeft 
                    /> 
                    {/*<span>{`${mesActual} - ${anioActual}`}</span>*/} 
                    <ChevronRight />
                </div>
            </div>
            {/** Historial */}
            <div
            className="flex-1 border"
            ></div>
        </div>
      </section>
    </main>
  );
}

export default Inicio;
