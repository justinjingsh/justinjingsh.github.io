import { ShieldCheck, Users, Layers, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'About',
  description:
    'Independent solution architect and full-stack engineer with 20+ years of experience across .NET, React/Angular, Flutter mobile, AWS/Azure cloud, and generative AI. Based in Sydney, remote-friendly.',
  openGraph: {
    title: 'About — Lyranova',
    description:
      'Independent solution architect and full-stack engineer with 20+ years of experience. Based in Sydney, remote-friendly.',
  },
}

export const DIFFERENTIATORS = [
  {
    icon: <ShieldCheck size={22} />,
    title: 'Production-Grade Habits',
    body: 'I have owned systems in fintech and payroll where downtime and data errors have real consequences. That instinct carries into every project — robustness and security are designed in, not bolted on after.',
  },
  {
    icon: <Users size={22} />,
    title: 'Experience Leading Teams',
    body: "As a Technical Engineering Manager I've led a distributed team of 7 onshore and offshore engineers. I know how to scope and communicate work clearly, whether I'm coding solo or coordinating with your team.",
  },
  {
    icon: <Layers size={22} />,
    title: 'Full-Stack, Mobile, and Cloud',
    body: 'Comfortable across .NET Core/C#, React/Angular, Flutter mobile, and AWS/Azure. One person who can take a project from database to deployment.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Generative AI & Agentic Systems',
    body: 'Hands-on experience with LLM integration, retrieval-augmented generation, agentic tool-use systems, and custom MCP servers — building AI features that hold up in production, not just a demo.',
  },
]

export const CERTIFICATIONS = [
  'AWS Certified Solutions Architect — Associate',
  'Microsoft Certified Solutions Associate: Cloud Platform',
  'PMI Agile Certified Practitioner (PMI-ACP)',
]
