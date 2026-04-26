import { Brain, Gauge, Users, Rocket, TrendingUp } from "lucide-react";

const metrics = [
  { title: "Account Health", value: "86%", icon: Gauge },
  { title: "Active Users", value: "12.4K", icon: Users },
  { title: "AI Use Cases", value: "27", icon: Rocket },
  { title: "Efficiency Gain", value: "31%", icon: TrendingUp },
];

const adoption = [
  { label: "Jan", value: 28 },
  { label: "Feb", value: 42 },
  { label: "Mar", value: 55 },
  { label: "Apr", value: 68 },
  { label: "May", value: 76 },
  { label: "Jun", value: 84 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8 text-slate-900">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-2xl bg-slate-900 p-3 text-white">
          <Brain size={28} />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Enterprise AI Analytics Dashboard</h1>
          <p className="text-slate-600">
            Portfolio project for AI adoption, account health, and value realization.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        {metrics.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-2xl bg-white p-6 shadow border">
              <Icon size={26} />
              <p className="mt-4 text-sm text-slate-500">{item.title}</p>
              <p className="text-3xl font-bold">{item.value}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow border">
        <h2 className="text-2xl font-bold">Adoption Velocity</h2>
        <p className="text-slate-600">Monthly AI platform adoption across enterprise teams.</p>

        <div className="mt-6 space-y-4">
          {adoption.map((item) => (
            <div key={item.label}>
              <div className="mb-1 flex justify-between text-sm">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="h-4 rounded-full bg-slate-200">
                <div
                  className="h-4 rounded-full bg-slate-900"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow border">
          <h2 className="text-2xl font-bold">AI Success Recommendations</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>Expand AI champion network across customer teams.</li>
            <li>Prioritize workflows with measurable cycle-time reduction.</li>
            <li>Define KPIs before each deployment milestone.</li>
            <li>Use enablement sessions to improve adoption quality.</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow border">
          <h2 className="text-2xl font-bold">Customer Portfolio Snapshot</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p><strong>Enterprise Logistics Co.</strong> — Strong health, 84% adoption</p>
            <p><strong>Regional Finance Group</strong> — Moderate health, 61% adoption</p>
            <p><strong>Healthcare Operations Team</strong> — Strong health, 79% adoption</p>
          </div>
        </div>
      </div>
    </div>
  );
}