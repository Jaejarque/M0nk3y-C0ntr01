import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  type TooltipProps,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ChartContainer } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

// ---------------------------------------------
// 📊 Datos del gráfico
// ---------------------------------------------
const chartData = [
  { descripcion: "Sueldo", monto: 1035000 },
  { descripcion: "Ticket", monto: 120000 },
  { descripcion: "Horas extras", monto: 70000 },
  { descripcion: "Uber", monto: 25000 },
]

// ---------------------------------------------
// 🎨 Configuración de colores y temas
// ---------------------------------------------
const chartConfig = {
  monto: {
    label: "Monto",
    theme: {
      light: "hsl(200, 80%, 45%)",
      dark: "var(--chart-2)",
    },
  },
  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig

// ---------------------------------------------
// 🧩 Tooltip personalizado
// ---------------------------------------------
const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null

  const { name, value } = payload[0]
  return (
    <div className="bg-zinc-900/95 border border-zinc-700 rounded-xl px-3 py-2 shadow-lg backdrop-blur-sm">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="text-white font-medium">
        {name}: ${value?.toLocaleString("es-AR")}
      </p>
    </div>
  )
}

// ---------------------------------------------
// 📈 Componente principal
// ---------------------------------------------
export function ChartIngresos() {
  return (
    <Card className="bg-zinc-950 text-zinc-100 border-none w-full">
      <CardHeader>
        <CardTitle>Todos los ingresos</CardTitle>
        <CardDescription>Enero - Junio 2024</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ right: 20, left: 20, top: 10, bottom: 10 }}
            >
              <CartesianGrid horizontal={false} stroke="#27272a" />

              <YAxis
                dataKey="descripcion"
                type="category"
                tickLine={false}
                tickMargin={12}
                axisLine={false}
                width={50}
              />
              <XAxis dataKey="monto" type="number" hide />

              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.05)" }}
                content={<CustomTooltip />}
              />

              <Bar
                dataKey="monto"
                layout="vertical"
                fill="var(--color-monto)"
                radius={[4, 4, 4, 4]}
                barSize={75}
                isAnimationActive={true}
                animationDuration={800}
                animationEasing="ease-out"
              >
                <LabelList
                  dataKey="monto"
                  position="right"
                  className="fill-white"
                  fontSize={12}
                  formatter={(value: number) =>
                    `$${value.toLocaleString("es-AR")}`
                  }
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
