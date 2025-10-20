import { ResponsiveBar } from "@nivo/bar";

const data = [
  { mes: "Enero", ingresos: 120000, egresos: 45000 },
  { mes: "Febrero", ingresos: 135000, egresos: 52000 },
  { mes: "Marzo", ingresos: 150000, egresos: 48000 },
  { mes: "Abril", ingresos: 160000, egresos: 53000 },
  { mes: "Mayo", ingresos: 142000, egresos: 49000 },
  { mes: "Junio", ingresos: 155000, egresos: 57000 },
];

export default function ChartBar() {
  return (
    <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] border border-zinc-700 rounded-2xl p-4 shadow-md">
      <ResponsiveBar
        data={data}
        keys={["ingresos", "egresos"]} // ✅ esto crea 2 barras por mes
        indexBy="mes"
        margin={{ top: 20, right: 20, bottom: 30, left: 60 }}
        padding={0.3}
        groupMode="grouped" // ✅ agrupa (una al lado de otra)
        colors={({ id }) => (id === "ingresos" ? "#22c55e" : "#ef4444")}
        borderColor={{ from: "color", modifiers: [["darker", 1.2]] }}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Monto ($)",
          legendPosition: "middle",
          legendOffset: -50,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#f4f4f5"
        theme={{
          text: { fill: "#f4f4f5", fontSize: 12 },
          axis: {
            ticks: { text: { fill: "#f4f4f5" } },
            legend: { text: { fill: "#f4f4f5" } },
          },
          grid: { line: { stroke: "#27272a", strokeWidth: 1 } },
          legends: { text: { fill: "#f4f4f5" } },
        }}
        animate={true}
        motionConfig="gentle"
      />
    </div>
  );
}
