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
  "relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(145deg,rgba(15,23,42,0.94),rgba(2,6,23,0.98)_48%,rgba(30,41,59,0.70))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_50px_rgba(0,0,0,0.42)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_30%),linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.055)_18%,transparent_38%)] before:pointer-events-none";

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
              <div className="rounded-2xl bg-white/10 p-3">
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
            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-xs text-slate-400">Expansion Pipeline</p>
              <p className="mt-2 text-2xl font-bold">$335K</p>
            </div>
            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-xs text-slate-400">Validated Workflows</p>
              <p className="mt-2 text-2xl font-bold">42</p>
            </div>
            <div className="rounded-2xl bg-black/20 p-4">
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
            <div className="rounded-2xl bg-black/20 p-4">✅ Executive sponsor aligned</div>
            <div className="rounded-2xl bg-black/20 p-4">✅ Champion network identified</div>
            <div className="rounded-2xl bg-black/20 p-4">✅ KPI baseline established</div>
            <div className="rounded-2xl bg-amber-500/10 p-4 text-amber-300">⚠ Security review pending</div>
            <div className="rounded-2xl bg-black/20 p-4">✅ Expansion use cases approved</div>
          </div>
        </div>

      </div>

      {/* LOWER GRID */}
      <div className="mt-8 grid gap-6 xl:grid-cols-2">

        <div className={`${metalPanel} p-7`}>
          <h2 className="text-2xl font-bold text-white">Executive AI Success Recommendations</h2>
          <div className="mt-6 space-y-4 text-lg font-semibold text-slate-100">
            <div className="rounded-2xl bg-black/20 p-5">🚀 Expand Finance deployment into document workflows</div>
            <div className="rounded-2xl bg-black/20 p-5">⚠ Resolve legal security gating before production activation</div>
            <div className="rounded-2xl bg-black/20 p-5">📈 Scale Logistics assistant to support teams</div>
            <div className="rounded-2xl bg-black/20 p-5">🧠 Prompt optimization opportunity identified</div>
          </div>
        </div>

        <div className={`${metalPanel} p-7`}>
          <h2 className="text-2xl font-bold text-white">AI Success Assistant</h2>
          <div className="mt-6 rounded-3xl bg-slate-700/50 p-6 text-base font-medium text-slate-200 leading-8">
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
  const accountInsights = [
    {
      name: "Enterprise Logistics Co.",
      segment: "Strategic Enterprise",
      owner: "Customer Success",
      health: "Strong",
      adoption: 84,
      stage: "Expansion Ready",
      blocker: "None",
      arr: "$420K",
      nextAction: "Scale logistics automation playbook",
    },
    {
      name: "Regional Finance Group",
      segment: "Financial Services",
      owner: "Solutions",
      health: "Moderate",
      adoption: 61,
      stage: "Security Review",
      blocker: "Policy approval",
      arr: "$310K",
      nextAction: "Run finance enablement sprint",
    },
    {
      name: "Healthcare Ops Team",
      segment: "Regulated Enterprise",
      owner: "Technical Success",
      health: "Strong",
      adoption: 79,
      stage: "Pilot Expansion",
      blocker: "Workflow validation",
      arr: "$380K",
      nextAction: "Validate clinical support workflows",
    },
    {
      name: "National Legal Services",
      segment: "Legal Operations",
      owner: "Deployment",
      health: "At Risk",
      adoption: 43,
      stage: "Blocked",
      blocker: "Compliance review",
      arr: "$250K",
      nextAction: "Escalate security/compliance alignment",
    },
  ];

  return (
    <div className="grid gap-6 xl:grid-cols-12">
      <div className={`${metalPanel} xl:col-span-8 p-7`}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Strategic Account Health Intelligence
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Portfolio-level visibility into adoption, deployment stage, ARR exposure,
              blockers, and next executive actions.
            </p>
          </div>

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-bold text-cyan-300">
            LIVE PORTFOLIO SIGNALS
          </span>
        </div>

        <div className="mt-7 space-y-4">
          {accountInsights.map((account) => (
            <div
              key={account.name}
              className="rounded-3xl border border-white/10 bg-black/20 p-5 shadow-inner"
            >
              <div className="grid gap-5 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    {account.segment}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">{account.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">Owner: {account.owner}</p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-xs text-slate-500">Health</p>
                  <div className="mt-2">
                    <Pill value={account.health} />
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-xs text-slate-500">Adoption</p>
                  <p className="mt-1 text-2xl font-bold text-cyan-300">
                    {account.adoption}%
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-xs text-slate-500">ARR Exposure</p>
                  <p className="mt-1 text-2xl font-bold text-white">{account.arr}</p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-xs text-slate-500">Stage</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-300">
                    {account.stage}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl bg-black/20 p-4">
                  <p className="text-xs text-slate-500">Primary Blocker</p>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    {account.blocker}
                  </p>
                </div>

                <div className="rounded-2xl bg-black/20 p-4">
                  <p className="text-xs text-slate-500">Next Executive Action</p>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    {account.nextAction}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${metalPanel} xl:col-span-4 p-7`}>
        <h2 className="text-2xl font-bold text-white">Account Command Signals</h2>
        <p className="mt-2 text-sm text-slate-400">
          AI-generated portfolio recommendations for customer success leadership.
        </p>

        <div className="mt-7 space-y-4">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              Expansion Opportunity
            </p>
            <p className="mt-2 text-2xl font-bold text-white">$800K+</p>
            <p className="mt-2 text-sm text-slate-300">
              Three accounts show strong adoption velocity and low blocker exposure.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-500/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              Executive Attention
            </p>
            <p className="mt-2 text-2xl font-bold text-white">1 Account</p>
            <p className="mt-2 text-sm text-slate-300">
              National Legal Services requires compliance alignment before production rollout.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
              Recommended Motion
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Prioritize finance security review, then move logistics and healthcare accounts
              into expansion sequencing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIPerformance() {
  const readinessSignals = [
    { label: "Model Response Stability", value: 92, risk: "Low" },
    { label: "Retrieval Accuracy", value: 84, risk: "Medium" },
    { label: "Prompt Reliability", value: 88, risk: "Low" },
    { label: "Security Review Completion", value: 73, risk: "Medium" },
    { label: "Workflow Validation", value: 79, risk: "Medium" },
  ];

  const productionBlockers = [
    {
      blocker: "Finance document workflow awaiting security approval",
      severity: "Medium",
      owner: "Solutions + Security",
      action: "Complete policy review before production expansion",
    },
    {
      blocker: "Legal services pilot blocked by compliance interpretation",
      severity: "High",
      owner: "Deployment Lead",
      action: "Escalate executive sponsor alignment",
    },
    {
      blocker: "Retrieval latency elevated during high-volume support windows",
      severity: "Medium",
      owner: "AI Platform",
      action: "Tune retrieval timeout and cache priority intents",
    },
  ];

  return (
    <div className="grid gap-6 xl:grid-cols-12">
      <div className={`${metalPanel} xl:col-span-8 p-7`}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              AI Production Readiness Intelligence
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Technical signals used to evaluate deployment stability, model behavior,
              workflow readiness, and customer-facing production confidence.
            </p>
          </div>

          <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-300">
            87% DEPLOYMENT CONFIDENCE
          </span>
        </div>

        <div className="mt-8 space-y-6">
          {readinessSignals.map((signal) => (
            <div key={signal.label}>
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">{signal.label}</p>
                  <p className="text-xs text-slate-500">Risk posture: {signal.risk}</p>
                </div>
                <p className="text-lg font-bold text-cyan-300">{signal.value}%</p>
              </div>

              <div className="h-3 rounded-full bg-slate-700/70">
                <div
                  className="h-3 rounded-full bg-[linear-gradient(90deg,#22d3ee,#a3e635,#22d3ee)] shadow-[0_0_18px_rgba(34,211,238,0.45)]"
                  style={{ width: `${signal.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${metalPanel} xl:col-span-4 p-7`}>
        <h2 className="text-2xl font-bold text-white">Technical Risk Summary</h2>
        <p className="mt-2 text-sm text-slate-400">
          Current readiness posture across active customer deployments.
        </p>

        <div className="mt-7 space-y-4">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              Stable Signals
            </p>
            <p className="mt-2 text-3xl font-bold text-white">3</p>
            <p className="mt-2 text-sm text-slate-300">
              Model stability, prompt reliability, and baseline response quality are within target.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-500/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              Watch Areas
            </p>
            <p className="mt-2 text-3xl font-bold text-white">2</p>
            <p className="mt-2 text-sm text-slate-300">
              Retrieval performance and security review completion require active monitoring.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
              Recommended Next Step
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Prioritize retrieval tuning before expanding into document-heavy customer workflows.
            </p>
          </div>
        </div>
      </div>

      <div className={`${metalPanel} xl:col-span-12 p-7`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Production Blocker Matrix</h2>
            <p className="mt-2 text-sm text-slate-400">
              Active deployment constraints requiring technical, security, or executive intervention.
            </p>
          </div>

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-bold text-cyan-300">
            ACTIVE DEPLOYMENT REVIEW
          </span>
        </div>

        <div className="mt-7 grid gap-4">
          {productionBlockers.map((item) => (
            <div
              key={item.blocker}
              className="grid gap-5 rounded-3xl border border-white/10 bg-black/20 p-5 lg:grid-cols-12 lg:items-center"
            >
              <div className="lg:col-span-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Blocker
                </p>
                <h3 className="mt-2 font-bold text-white">{item.blocker}</h3>
              </div>

              <div className="lg:col-span-2">
                <p className="text-xs text-slate-500">Severity</p>
                <div className="mt-2">
                  <Pill value={item.severity} />
                </div>
              </div>

              <div className="lg:col-span-2">
                <p className="text-xs text-slate-500">Owner</p>
                <p className="mt-1 text-sm font-semibold text-slate-200">{item.owner}</p>
              </div>

              <div className="lg:col-span-3">
                <p className="text-xs text-slate-500">Required Action</p>
                <p className="mt-1 text-sm font-semibold text-slate-200">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkflowPipeline() {
  const automationPrograms = [
    {
      workflow: "Support Ticket Triage",
      stage: "Production",
      owner: "Customer Success",
      value: "340 hrs/mo",
      roi: "High",
      blocker: "None",
      nextMilestone: "Scale to Tier-2 support queues",
      confidence: 91,
    },
    {
      workflow: "Knowledge Assistant",
      stage: "Pilot",
      owner: "Solutions",
      value: "180 hrs/mo",
      roi: "Medium",
      blocker: "Champion enablement",
      nextMilestone: "Train department champions",
      confidence: 78,
    },
    {
      workflow: "Document Review",
      stage: "Security Review",
      owner: "AI Platform",
      value: "420 hrs/mo",
      roi: "High",
      blocker: "Data handling review",
      nextMilestone: "Complete security approval",
      confidence: 72,
    },
    {
      workflow: "Sales Call Summaries",
      stage: "Production",
      owner: "Revenue Ops",
      value: "210 hrs/mo",
      roi: "Medium",
      blocker: "None",
      nextMilestone: "Expand to enterprise account teams",
      confidence: 86,
    },
  ];

  return (
    <div className="grid gap-6 xl:grid-cols-12">
      <div className={`${metalPanel} xl:col-span-8 p-7`}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              AI Workflow Automation Pipeline
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Tracks enterprise AI use cases from discovery through pilot, security review,
              production deployment, and scaled customer adoption.
            </p>
          </div>

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-bold text-cyan-300">
            42 VALIDATED WORKFLOWS
          </span>
        </div>

        <div className="mt-7 space-y-4">
          {automationPrograms.map((program) => (
            <div
              key={program.workflow}
              className="rounded-3xl border border-white/10 bg-black/20 p-5 shadow-inner"
            >
              <div className="grid gap-5 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Workflow
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white">
                    {program.workflow}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">Owner: {program.owner}</p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-xs text-slate-500">Stage</p>
                  <div className="mt-2">
                    <Pill value={program.stage} />
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-xs text-slate-500">Value</p>
                  <p className="mt-1 text-xl font-bold text-cyan-300">
                    {program.value}
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-xs text-slate-500">ROI</p>
                  <p className="mt-1 text-sm font-bold text-emerald-300">
                    {program.roi}
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-xs text-slate-500">Confidence</p>
                  <p className="mt-1 text-xl font-bold text-white">
                    {program.confidence}%
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs text-slate-500">Primary Blocker</p>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    {program.blocker}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs text-slate-500">Next Milestone</p>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    {program.nextMilestone}
                  </p>
                </div>
              </div>

              <div className="mt-5 h-3 rounded-full bg-slate-700/70">
                <div
                  className="h-3 rounded-full bg-[linear-gradient(90deg,#22d3ee,#a3e635,#22d3ee)] shadow-[0_0_18px_rgba(34,211,238,0.45)]"
                  style={{ width: `${program.confidence}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${metalPanel} xl:col-span-4 p-7`}>
        <h2 className="text-2xl font-bold text-white">Automation Value Summary</h2>
        <p className="mt-2 text-sm text-slate-400">
          Estimated operational leverage from validated AI workflow deployment.
        </p>

        <div className="mt-7 space-y-4">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              Monthly Capacity Returned
            </p>
            <p className="mt-2 text-3xl font-bold text-white">1,150 hrs</p>
            <p className="mt-2 text-sm text-slate-300">
              Estimated aggregate time savings from production and near-production workflows.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
              Production-Ready Workflows
            </p>
            <p className="mt-2 text-3xl font-bold text-white">18</p>
            <p className="mt-2 text-sm text-slate-300">
              Validated workflows with adoption support and measurable KPI baselines.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-500/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              Current Deployment Constraint
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Security review remains the primary blocker for document-heavy automation
              expansion across regulated teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionCenter() {
  const executiveInterventions = [
    {
      priority: "P0",
      title: "Legal pilot blocked by compliance interpretation",
      account: "National Legal Services",
      owner: "Deployment Lead",
      urgency: "High",
      businessRisk: "$250K ARR at risk",
      recommendation:
        "Escalate compliance alignment with executive sponsor and produce deployment decision memo within 48 hours.",
    },
    {
      priority: "P1",
      title: "Finance workflow adoption below threshold",
      account: "Regional Finance Group",
      owner: "Solutions",
      urgency: "Medium",
      businessRisk: "$80K upsell delayed",
      recommendation:
        "Run a 14-day enablement sprint focused on document workflows, prompt training, and champion activation.",
    },
    {
      priority: "P1",
      title: "Retrieval latency elevated during peak support windows",
      account: "Enterprise Logistics Co.",
      owner: "AI Platform",
      urgency: "Medium",
      businessRisk: "Expansion confidence reduced",
      recommendation:
        "Tune retrieval timeout thresholds, cache high-priority intents, and monitor latency for 72 hours.",
    },
    {
      priority: "P2",
      title: "Healthcare pilot requires workflow validation evidence",
      account: "Healthcare Ops Team",
      owner: "Technical Success",
      urgency: "Low",
      businessRisk: "$95K expansion pending",
      recommendation:
        "Validate top clinical support workflows and convert pilot results into executive value summary.",
    },
  ];

  const urgencyStyle = {
    High: "border-red-400/20 bg-red-500/10 text-red-300",
    Medium: "border-amber-400/20 bg-amber-500/10 text-amber-300",
    Low: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
  };

  return (
    <div className="grid gap-6 xl:grid-cols-12">
      <div className={`${metalPanel} xl:col-span-8 p-7`}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Executive Intervention Queue
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Prioritized customer success actions generated from deployment health,
              technical blockers, account risk, and expansion opportunity signals.
            </p>
          </div>

          <span className="rounded-full bg-red-500/10 px-4 py-2 text-xs font-bold text-red-300">
            1 HIGH PRIORITY
          </span>
        </div>

        <div className="mt-7 space-y-4">
          {executiveInterventions.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-black/20 p-5 shadow-inner"
            >
              <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-1">
                  <span className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-xs font-bold text-cyan-300">
                    {item.priority}
                  </span>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Intervention
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.account}</p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-xs text-slate-500">Owner</p>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    {item.owner}
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-xs text-slate-500">Urgency</p>
                  <span
                    className={`mt-2 inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
                      urgencyStyle[item.urgency]
                    }`}
                  >
                    {item.urgency}
                  </span>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-xs text-slate-500">Business Risk</p>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    {item.businessRisk}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Recommended Action
                </p>
                <p className="mt-2 text-sm font-semibold leading-7 text-slate-200">
                  {item.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${metalPanel} xl:col-span-4 p-7`}>
        <h2 className="text-2xl font-bold text-white">AI Action Summary</h2>
        <p className="mt-2 text-sm text-slate-400">
          Portfolio-level intervention posture for customer leadership.
        </p>

        <div className="mt-7 space-y-4">
          <div className="rounded-3xl border border-red-400/20 bg-red-500/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-300">
              Immediate Escalation
            </p>
            <p className="mt-2 text-3xl font-bold text-white">1</p>
            <p className="mt-2 text-sm text-slate-300">
              Legal compliance blocker requires executive alignment within 48 hours.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-500/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              Enablement Motion
            </p>
            <p className="mt-2 text-3xl font-bold text-white">2</p>
            <p className="mt-2 text-sm text-slate-300">
              Finance and logistics accounts require targeted adoption and technical optimization.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              Expansion Protected
            </p>
            <p className="mt-2 text-3xl font-bold text-white">$515K</p>
            <p className="mt-2 text-sm text-slate-300">
              Estimated opportunity protected through prioritized intervention execution.
            </p>
          </div>
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