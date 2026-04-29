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
  DollarSign,
  Target,
  Server,
  Workflow,
} from "lucide-react";

const executivePortfolioKPIs = [
  { title: "Portfolio Health", value: "86%", change: "+12%", icon: Gauge },
  { title: "Active AI Users", value: "12.4K", change: "+31%", icon: Users },
  { title: "Live AI Use Cases", value: "27", change: "+9", icon: Rocket },
  { title: "Efficiency Gain", value: "31%", change: "+18%", icon: TrendingUp },
];

const adoptionVelocity = [
  { label: "Jan", value: 28 },
  { label: "Feb", value: 42 },
  { label: "Mar", value: 55 },
  { label: "Apr", value: 68 },
  { label: "May", value: 76 },
  { label: "Jun", value: 84 },
];

const enterpriseAccounts = [
  {
    name: "Enterprise Logistics Co.",
    owner: "Customer Success",
    health: "Strong",
    adoption: 84,
    risk: "Low",
    arr: "$420K",
    opportunity: "$120K Expansion",
    lastTouch: "2 days ago",
  },
  {
    name: "Regional Finance Group",
    owner: "Solutions",
    health: "Moderate",
    adoption: 61,
    risk: "Medium",
    arr: "$310K",
    opportunity: "$80K Upsell",
    lastTouch: "6 days ago",
  },
  {
    name: "Healthcare Ops Team",
    owner: "Technical Success",
    health: "Strong",
    adoption: 79,
    risk: "Low",
    arr: "$380K",
    opportunity: "$95K Expansion",
    lastTouch: "1 day ago",
  },
  {
    name: "National Legal Services",
    owner: "Deployment",
    health: "At Risk",
    adoption: 43,
    risk: "High",
    arr: "$250K",
    opportunity: "$40K Retention",
    lastTouch: "12 days ago",
  },
];

const deploymentPrograms = [
  { name: "Support Ticket Triage", status: "Production", savings: "340 hrs/mo", roi: "High" },
  { name: "Knowledge Assistant", status: "Pilot", savings: "180 hrs/mo", roi: "Medium" },
  { name: "Document Review", status: "Security Review", savings: "420 hrs/mo", roi: "High" },
  { name: "Sales Call Summaries", status: "Production", savings: "210 hrs/mo", roi: "Medium" },
];

const metalPanel =
  "relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(145deg,rgba(30,41,59,0.88),rgba(15,23,42,0.96)_45%,rgba(51,65,85,0.72))] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_18px_50px_rgba(0,0,0,0.35)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.13),transparent_32%),linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_18%,transparent_38%)] before:pointer-events-none";

const interventionQueue = [
  {
    severity: "High",
    title: "Finance team adoption below threshold",
    detail: "Run a 14-day enablement sprint focused on prompt workflows and champion support.",
  },
  {
    severity: "Medium",
    title: "Legal workflow blocked by policy review",
    detail: "Schedule security and compliance review before production activation.",
  },
  {
    severity: "Low",
    title: "Logistics account ready for expansion",
    detail: "Scale successful automation playbook into dispatch and customer support teams.",
  },
];

function Pill({ value }) {
  const styles = {
    Strong: "bg-emerald-100 text-emerald-700",
    Moderate: "bg-amber-100 text-amber-700",
    "At Risk": "bg-red-100 text-red-700",
    Low: "bg-emerald-100 text-emerald-700",
    Medium: "bg-amber-100 text-amber-700",
    High: "bg-red-100 text-red-700",
    Production: "bg-emerald-100 text-emerald-700",
    Pilot: "bg-blue-100 text-blue-700",
    "Security Review": "bg-amber-100 text-amber-700",
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold ${styles[value] || "bg-slate-100 text-slate-700"}`}>
      {value}
    </span>
  );
}

function Sidebar({ activePage, setActivePage }) {
  const links = [
    { name: "Portfolio Command", icon: LayoutDashboard },
    { name: "Enterprise Accounts", icon: Building2 },
    { name: "Deployment Intelligence", icon: Brain },
    { name: "Automation Pipeline", icon: Workflow },
    { name: "Intervention Queue", icon: ShieldCheck },
];

  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-700 bg-slate-950 p-6 text-white lg:block">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-slate-950 p-3 text-slate-950">
          <Brain size={26} />
        </div>
        <div>
          <h1 className="text-xl font-bold">AI Success Command</h1>
          <p className="text-sm text-slate-400">Enterprise Deployment Ops</p>
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
                active ? "bg-slate-950 text-slate-950" : "text-slate-300 hover:bg-slate-950"
              }`}
            >
              <Icon size={19} />
              {link.name}
            </button>
          );
        })}
      </nav>

      <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-950 p-4">
        <p className="text-xs font-semibold uppercase text-slate-400">Strategic Platform Build</p>
        <p className="mt-2 text-sm text-slate-300">
              Enterprise customer success intelligence environment for monitoring deployment maturity,
              account intervention signals, workflow scalability, and executive AI value realization.
        </p>
      </div>
    </aside>
  );
}

function MetricCard({ title, value, change, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-700 p-6 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-slate-700 p-3">
          <Icon size={23} />
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
          {change}
        </span>
      </div>
      <p className="mt-5 text-sm text-slate-400">{title}</p>
      <p className="mt-1 text-3xl font-bold text-white">{value}</p>
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
        <div className="h-4 rounded-full bg-slate-950" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function ExecutiveOverview() {
  return (
    <>
      {/* TOP KPI COMMAND STRIP */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {executivePortfolioKPIs.map((item) => (
          <div
            key={item.title}
            className={`${metalPanel} p-5`}
          >
            <div className="flex items-center justify-between">
              <div className="rounded-2xl bg-slate-700 p-3">
                <item.icon size={22} />
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                {item.change}
              </span>
            </div>
            <p className="mt-5 text-sm text-slate-400">{item.title}</p>
            <p className="mt-1 text-3xl font-bold text-white">{item.value}</p>
          </div>
        ))}
      </div>

      {/* MAIN COMMAND GRID */}
      <div className="mt-8 grid gap-6 xl:grid-cols-12">

        {/* LEFT LARGE INTELLIGENCE PANEL */}
        <div className={`${metalPanel} xl:col-span-7 p-7`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Enterprise Adoption Intelligence</h2>
              <p className="text-sm text-slate-400">AI enablement velocity across strategic business units</p>
            </div>
            <div className="rounded-2xl bg-cyan-500/10 px-4 py-2 text-cyan-300 text-xs font-semibold">
              LIVE TRACKING
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {adoptionVelocity.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex justify-between text-sm">
                  <span>{item.label}</span>
                  <span className="text-cyan-300">{item.value}%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-700">
                  <div
                    className="h-3 rounded-full bg-cyan-400 shadow-md shadow-cyan-500/30"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-700/60 p-4">
              <p className="text-xs text-slate-400">Expansion Pipeline</p>
              <p className="mt-2 text-2xl font-bold">$335K</p>
            </div>
            <div className="rounded-2xl bg-slate-700/60 p-4">
              <p className="text-xs text-slate-400">Validated Workflows</p>
              <p className="mt-2 text-2xl font-bold">42</p>
            </div>
            <div className="rounded-2xl bg-slate-700/60 p-4">
              <p className="text-xs text-slate-400">Production Systems</p>
              <p className="mt-2 text-2xl font-bold">18</p>
            </div>
          </div>
        </div>

        {/* RIGHT DEPLOYMENT PANEL */}
        <div className={`${metalPanel} xl:col-span-5 p-7`}>
          <div className="flex items-center gap-3">
            <Activity className="text-emerald-300" size={24} />
            <h2 className="text-2xl font-bold text-white">Deployment Readiness Matrix</h2>
          </div>

          <p className="mt-3 text-sm text-slate-400">
            Portfolio rollout confidence and enterprise activation readiness.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl bg-slate-700/60 p-4">✅ Executive sponsor aligned</div>
            <div className="rounded-2xl bg-slate-700/60 p-4">✅ Champion network identified</div>
            <div className="rounded-2xl bg-slate-700/60 p-4">✅ KPI baseline established</div>
            <div className="rounded-2xl bg-amber-500/10 p-4 text-amber-300">⚠ Security review pending</div>
            <div className="rounded-2xl bg-slate-700/60 p-4">✅ Expansion use cases approved</div>
          </div>
        </div>

      </div>

      {/* LOWER GRID */}
      <div className="mt-8 grid gap-6 xl:grid-cols-12">

        <div className={`${metalPanel} xl:col-span-7 p-7`}>
          <h2 className="text-2xl font-bold text-white">Executive AI Success Recommendations</h2>
          <div className="mt-6 space-y-4 text-sm">
            <div className="rounded-2xl bg-slate-700/60 p-4">🚀 Expand Finance deployment into document workflows</div>
            <div className="rounded-2xl bg-slate-700/60 p-4">⚠ Resolve legal security gating before production activation</div>
            <div className="rounded-2xl bg-slate-700/60 p-4">📈 Scale Logistics assistant to support teams</div>
            <div className="rounded-2xl bg-slate-700/60 p-4">🧠 Prompt optimization opportunity identified</div>
          </div>
        </div>

        <div className={`${metalPanel} xl:col-span-7 p-7`}>
          <h2 className="text-2xl font-bold text-white">AI Success Assistant</h2>
          <div className="mt-6 rounded-3xl bg-slate-700/50 p-5 text-sm text-slate-300 leading-7">
            <p>• 3 enterprise accounts are expansion-ready this quarter</p>
            <p>• 1 deployment requires security intervention</p>
            <p>• projected retained ARR confidence: high</p>
            <p>• recommended executive action: approve finance pilot acceleration</p>
          </div>
        </div>

      </div>
    </>
  );
}

function CustomerHealth() {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-sm overflow-x-auto">
      <h2 className="text-2xl font-bold">Customer Health Intelligence</h2>
      <p className="mt-2 text-slate-300">
        Portfolio-level account intelligence for adoption, retention risk, expansion, and technical success ownership.
      </p>

      <table className="mt-6 w-full min-w-[900px] text-left">
        <thead>
          <tr className="border-b text-sm text-slate-500">
            <th className="py-3">Customer</th>
            <th>Owner</th>
            <th>Health</th>
            <th>Adoption</th>
            <th>Risk</th>
            <th>ARR</th>
            <th>Opportunity</th>
            <th>Last Touch</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {enterpriseAccounts.map((customer) => (
            <tr key={customer.name} className="border-b last:border-0">
              <td className="py-4 font-semibold">{customer.name}</td>
              <td>{customer.owner}</td>
              <td><Pill value={customer.health} /></td>
              <td>{customer.adoption}%</td>
              <td><Pill value={customer.risk} /></td>
              <td className="font-semibold">{customer.arr}</td>
              <td>{customer.opportunity}</td>
              <td>{customer.lastTouch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AIPerformance() {
  const modelMetrics = [
    { title: "LLM Accuracy", value: "92%", change: "+7%", icon: CheckCircle },
    { title: "Hallucination Rate", value: "4%", change: "-3%", icon: AlertTriangle },
    { title: "Response Time", value: "1.2s", change: "-0.4s", icon: Clock },
    { title: "Prompt Gain", value: "+18%", change: "Optimized", icon: Zap },
  ];

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {modelMetrics.map((item) => (
          <MetricCard key={item.title} {...item} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-sm">
          <h2 className="text-2xl font-bold">AI System Observability</h2>
          <p className="mt-2 text-slate-300">
            Operational signals for enterprise AI deployment monitoring.
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
              <p className="text-sm text-slate-500">Hours Saved</p>
              <p className="text-3xl font-bold">740</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Model Improvement Notes</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p>✅ Prompt templates improved response consistency across support workflows.</p>
            <p>✅ Retrieval quality improved after narrowing knowledge-base scope.</p>
            <p>⚠️ Finance workflows require compliance review before broad rollout.</p>
            <p>📈 Reduced manual escalation load by routing repetitive questions to AI assistant.</p>
          </div>
        </div>
      </div>
    </>
  );
}

function WorkflowPipeline() {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-sm">
      <h2 className="text-2xl font-bold">Workflow Automation Pipeline</h2>
      <p className="mt-2 text-slate-300">
        Tracks AI workflow candidates from discovery through production deployment.
      </p>

      <div className="mt-6 grid gap-4">
        {deploymentPrograms.map((workflow) => (
          <div
            key={workflow.name}
            className="grid gap-4 rounded-xl border border-slate-700 p-5 md:grid-cols-4 md:items-center"
          >
            <div className="font-semibold">{workflow.name}</div>
            <div><Pill value={workflow.status} /></div>
            <div className="text-sm text-slate-300">Savings: <strong>{workflow.savings}</strong></div>
            <div className="text-sm text-slate-300">ROI: <strong>{workflow.roi}</strong></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActionCenter() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-sm">
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

      <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <ShieldCheck />
          <h2 className="text-2xl font-bold">Intervention Queue</h2>
        </div>

        <div className="mt-5 space-y-4">
          {interventionQueue.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-700 bg-slate-50 p-4">
              <div className="mb-2">
                <Pill value={item.severity} />
              </div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("Executive Overview");

  const renderPage = () => {
    if (activePage === "Enterprise Accounts") return <CustomerHealth />;
    if (activePage === "Deployment Intelligence") return <AIPerformance />;
    if (activePage === "Automation Pipeline") return <WorkflowPipeline />;
    if (activePage === "Intervention Queue") return <ActionCenter />;
  return <ExecutiveOverview />;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white lg:flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-1 p-6 md:p-10 bg-slate-950">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                ENTERPRISE AI SUCCESS COMMAND PLATFORM
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">{activePage}</h1>

          <p className="mt-4 max-w-5xl text-slate-300 leading-8">
              Monitoring enterprise customer deployment maturity, AI workflow scalability,
              executive intervention signals, production readiness, and measurable portfolio value realization
              across strategic customer accounts.
          </p>
        </div>

        {renderPage()}

        <footer className="mt-10 text-sm text-slate-600">
          Built with React, Vite, Tailwind CSS, GitHub, and Vercel.
        </footer>
      </main>
    </div>
  );
}