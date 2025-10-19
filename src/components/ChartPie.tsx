import { ResponsivePie } from "@nivo/pie"

const data = [
  { id: "rust", label: "Rust", value: 346, color: "hsl(174, 70%, 50%)" },
  { id: "javascript", label: "JavaScript", value: 475, color: "hsl(227, 70%, 50%)" },
  { id: "go", label: "Go", value: 106, color: "hsl(63, 70%, 50%)" },
  { id: "css", label: "CSS", value: 346, color: "hsl(179, 70%, 50%)" },
  { id: "lisp", label: "Lisp", value: 11, color: "hsl(268, 70%, 50%)" },
]

export default function ChartPie() {
  const total = 12345678.9 // número de ejemplo

  return (
    <div style={{ height: 400 }}>
      <ResponsivePie
        data={data}
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        innerRadius={0.7}
        padAngle={0.6}
        cornerRadius={10}
        activeOuterRadiusOffset={8}
        enableArcLinkLabels={false}
        colors={{ datum: "data.color" }}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        theme={{
          textColor: "#e5e7eb",
          tooltip: { container: { background: "#18181b", color: "#fff" } },
        }}
        layers={[
          "arcs",
          "arcLabels",
          "legends",
          // 👇 Capa personalizada para el texto central
          (props) => {
            return (
              <text
                x={props.centerX}
                y={props.centerY}
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  fill: "#e5e7eb",
                }}
              >
                ${total.toLocaleString("es-AR", { minimumFractionDigits: 0 })}
              </text>
            )
          },
        ]}
      />
    </div>
  )
}

