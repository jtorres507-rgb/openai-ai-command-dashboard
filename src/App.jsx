import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  Brain,
  Building2,
  CheckCircle,
  Clock,
  Gauge,
  LayoutDashboard,
  Lightbulb,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const metrics = [
  { title: "Account Health", value: "86%", change: "+12%", icon: Gauge },
  { title: "Active Users", value: "12.4K", change: "+31%", icon: Users },
  { title: "AI Use Cases", value: "27", change: "+9", icon: Rocket },
  { title: "Efficiency Gain", value: "31%", change: "+18%", icon: TrendingUp },
];

const adoption = [
  { label: "Jan", value: 28 },
  { label: "Feb", value: 42 },
  { label: "Mar", value: 55 },
  { label: "Apr", value: 68 },
  { label: "May", value: 76 },
  { label: "Jun", value: 84 },
];

function Sidebar({ activePage, setActivePage }) {
  const links = [
    { name: "Executive Overview", icon: LayoutDashboard },
    { name: "Customer Health", icon: Building2 },
    { name: "AI Performance", icon: Brain },
    { name: "Action Center", icon: Lightbulb },
  ];

  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-800 bg-slate-950 p-6 text-white lg:block">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-white p-3 text-slate-950">
          <Brain size={26} />
        </div>
        <div>
          <h1 className="text-xl font-bold">AI Command Center</h1>
          <p className="text-sm text-slate-400">Enterprise AI Success</p>
        </div>
      </div>

      <nav className="mt-10 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const active = activePage === link.name;

          return (
            <button
              key={link.name}
              onClick={() => setActivePage(link.name)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                active
                  ? "bg-white text-slate-950"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Icon size={19} />
              {link.name}
            </button>
          );
        })}
      </nav>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-4">
        <p className="text-xs font-semibold uppercase text-slate-400">
          Portfolio Demo
        </p>
        <p className="mt-2 text-sm text-slate-300">
          Built to demonstrate AI adoption strategy, customer health analytics,
          model performance tracking, and enterprise deployment readiness.
        </p>
      </div>
    </aside>
  );
}

function MetricCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-slate-100 p-3">
          <Icon size={23} />
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
          {item.change}
        </span>
      </div>
      <p className="mt-5 text-sm text-slate-500">{item.title}</p>
      <p className="mt-1 text-3xl font-bold text-slate-950">{item.value}</p>
    </div>
  );
}

function ProgressBar({ label, value }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm font-medium">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-4 rounded-full bg-slate-200">
        <div
          className="h-4 rounded-full bg-slate-950 transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function ExecutiveOverview() {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((item) => (
          <MetricCard key={item.title} item={item} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <h2 className="text-2xl font-bold">Adoption Velocity</h2>
          <p className="text-slate-600">
            Monthly AI platform adoption across enterprise teams.
          </p>

          <div className="mt-6 space-y-5">
            {adoption.map((item) => (
              <ProgressBar key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
          <Activity size={30} />
          <h2 className="mt-4 text-2xl font-bold">Deployment Readiness</h2>
          <p className="mt-2 text-slate-300">
            Current portfolio is ready for expanded rollout across three
            validated workflow categories.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <p>✅ Executive sponsor aligned</p>
            <p>✅ Champion group identified</p>
            <p>✅ KPI baseline established</p>
            <p>⚠️ Security review pending for finance team</p>
          </div>
        </div>
      </div>
    </>
  );
}

function CustomerHealth() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Customer Health Intelligence</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-sm text-slate-500">
            <th className="py-2">Customer</th>
            <th>Health</th>
            <th>Adoption</th>
            <th>Risk</th>
            <th>Opportunity</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          <tr className="border-b">
            <td className="py-3 font-medium">Enterprise Logistics Co.</td>
            <td className="text-green-600 font-semibold">Strong</td>
            <td>84%</td>
            <td>Low</td>
            <td>$120K Expansion</td>
          </tr>

          <tr className="border-b">
            <td className="py-3 font-medium">Regional Finance Group</td>
            <td className="text-yellow-600 font-semibold">Moderate</td>
            <td>61%</td>
            <td>Medium</td>
            <td>$80K Upsell</td>
          </tr>

          <tr>
            <td className="py-3 font-medium">Healthcare Ops Team</td>
            <td className="text-green-600 font-semibold">Strong</td>
            <td>79%</td>
            <td>Low</td>
            <td>$95K Expansion</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function AIPerformance() {
  const modelMetrics = [
    { label: "LLM Accuracy", value: "92%", icon: CheckCircle },
    { label: "Hallucination Rate", value: "4%", icon: AlertTriangle },
    { label: "Response Time", value: "1.2s", icon: Clock },
    { label: "Prompt Optimization Gain", value: "+18%", icon: Zap },
  ];

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {modelMetrics.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="rounded-xl bg-slate-100 p-3 w-fit">
              <item.icon size={23} />
            </div>
            <p className="mt-5 text-sm text-slate-500">{item.label}</p>
            <p className="mt-1 text-3xl font-bold text-slate-950">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Model Performance & Accuracy</h2>
        <p className="mt-2 text-slate-600">
          Simulated AI observability layer for monitoring quality, speed,
          prompt performance, and enterprise readiness.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl bg-slate-100 p-5">
            <p className="text-sm text-slate-500">Token Usage</p>
            <p className="text-3xl font-bold">1.8M</p>
          </div>

          <div className="rounded-xl bg-slate-100 p-5">
            <p className="text-sm text-slate-500">Escalations Avoided</p>
            <p className="text-3xl font-bold">312</p>
          </div>

          <div className="rounded-xl bg-slate-100 p-5">
            <p className="text-sm text-slate-500">Workflow Hours Saved</p>
            <p className="text-3xl font-bold">740</p>
          </div>
        </div>
      </div>
    </>
  );
}

function ActionCenter() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Lightbulb />
          <h2 className="text-2xl font-bold">AI Success Recommendations</h2>
        </div>

        <ul className="mt-5 space-y-3 text-slate-700">
          <li>🚀 Expand AI deployment to Finance workflows with high ROI potential.</li>
          <li>⚠️ Address adoption gaps in Regional Finance Group.</li>
          <li>📈 Scale successful Logistics automation playbook.</li>
          <li>🧠 Optimize prompts to reduce hallucination rate further.</li>
          <li>🔐 Complete security review for enterprise rollout.</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <ShieldCheck />
          <h2 className="text-2xl font-bold">Intervention Queue</h2>
        </div>

        <div className="mt-5 space-y-4">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            Finance team adoption is below target. Recommend enablement sprint.
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            Legal use case requires additional policy review before production.
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            Logistics account ready for expanded workflow automation rollout.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("Executive Overview");

  const renderPage = () => {
    if (activePage === "Customer Health") return <CustomerHealth />;
    if (activePage === "AI Performance") return <AIPerformance />;
    if (activePage === "Action Center") return <ActionCenter />;

    return <ExecutiveOverview />;
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950 lg:flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-1 p-6 md:p-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
            OpenAI AI Success Engineer Portfolio Project
          </p>

          <h1 className="mt-2 text-4xl font-bold md:text-5xl">{activePage}</h1>

          <p className="mt-3 max-w-4xl text-slate-600">
            Enterprise AI command center for monitoring account health, adoption
            velocity, model performance, workflow opportunities, and measurable
            business value.
          </p>
        </div>

        {renderPage()}
      </main>
    </div>
  );
}