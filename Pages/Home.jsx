import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, ExternalLink, Terminal, Sparkles, Code, Database, Cloud, Cpu, ArrowRight } from 'lucide-react';



const CodeBlock = ({ children, className = "" }) => (
  <span className={`font-mono text-purple-400 ${className}`}>{children}</span>
);

export default function Home() {
  
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const fullTerminalText = `> const saanya = {
  education: "CS @ NJIT",
  location: "NYC Area",
  passion: "Building solutions that make an impact"
};`;



  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= fullTerminalText.length) {
        setTerminalText(fullTerminalText.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);
    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // TechStack
  const techStack = {
    languages: {
      icon: Code,
      title: "Languages",
      items: [
        { name: "Python", level: 95, highlight: true },
        { name: "Java", level: 90, highlight: true },
        { name: "JavaScript", level: 85, highlight: true },
        { name: "C++", level: 75 },
        { name: "C", level: 70 },
      ]
    },
    ai: {
      icon: Cpu,
      title: "AI & ML",
      items: [
        { name: "YOLO", level: 85, highlight: true },
        { name: "Google Gemini", level: 80, highlight: true },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Scikit-learn", level: 75 },
      ]
    },
    web: {
      icon: Terminal,
      title: "Web Dev",
      items: [
        { name: "React", level: 90, highlight: true },
        { name: "Flask", level: 85, highlight: true },
        { name: "REST APIs", level: 90 },
        { name: "TailwindCSS", level: 85 },
        { name: "HTML/CSS", level: 90 },
      ]
    },
    data: {
      icon: Database,
      title: "Data & Backend",
      items: [
        { name: "SQL", level: 85, highlight: true },
        { name: "Firebase", level: 80 },
        { name: "Railway", level: 75 },
      ]
    },
    devops: {
      icon: Cloud,
      title: "DevOps & Cloud",
      items: [
        { name: "Git", level: 90, highlight: true },
        { name: "Docker", level: 70 },
        { name: "AWS S3", level: 75 },
        { name: "Vercel", level: 85 },
        { name: "CI/CD", level: 80 },
      ]
    }
  };

  const experiences = [
    {
      title: "AI Intern",
      company: "GameRun",
      period: "June 2025 - August 2025",
      tech: ["YOLO", "Python", "Computer Vision"],
      achievements: [
        { metric: "50%", label: "Reduction in false positives" },
        { metric: "100+", label: "Hours of footage processed" },
        { metric: "3,000+", label: "Key frames extracted" },
      ],
      description: "Built object detection pipelines for tennis and fencing using YOLO with velocity-based tracking."
    },
    {
      title: "AI Fellow",
      company: "NJIT Biomedical Engineering",
      period: "August 2024 - Present",
      tech: ["Python", "Automation", "Simulation"],
      achievements: [
        { metric: "90%", label: "Reduction in preprocessing" },
        { metric: "∞", label: "Scalable simulations" },
      ],
      description: "Developing AI-driven pipelines that convert human model data into simulation-ready formats."
    }
  ];

  const projects = [
    {
      title: "RoastCoach",
      subtitle: "Real Time Movement Analysis & AI Coaching Platform",
      description: "Developed a video analysis system to track and improve exercise form by processing footage to detect repetitions and ensure proper movement patterns. Implemented AI-driven real-time coaching using RAG, AWS S3, vector databases, and historical performance data to provide personalized feedback.",
      tech: ["Python", "MediaPipe/OpenCV", "NumPy", "AWS S3", "Signal Processing", "AI APIs", "Vector Database"],
      features: ["Hack@Brown Jan 2026", "Rep Detection & Form Analysis", "RAG-based AI Coaching"],
      link: "https://devpost.com/software/roastcoach?ref_content=user-portfolio&ref_feature=in_progress",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600"
    },
    {
      title: "jadeinc.net",
      subtitle: "Salon Management System",
      description: "Full-stack booking platform with user onboarding, scheduling, payments, messaging, reviews, and admin analytics.",
      tech: ["React", "Flask", "Firebase Auth", "SQL", "Vercel"],
      features: ["RESTful APIs", "CI/CD", "Three-tier Architecture"],
      link: "https://jadeinc.net",
      gradient: "from-purple-600 via-violet-600 to-indigo-600"
    },
    {
      title: "Syllabus Summaries",
      subtitle: "AI-Powered Course Intelligence",
      description: "Extracts and structures key information from university syllabi, reducing manual analysis time by ~80%.",
      tech: ["React", "Flask", "Gemini 2.5 Flash"],
      features: ["JSON Outputs", "Policy Extraction", "Heuristic Fallbacks"],
      link: "https://github.com/sj236code/SyllySummy",
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-purple-400 text-sm"
          >
            &lt;saanya /&gt;
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            {['about', 'stack', 'experience', 'projects', 'contact'].map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item)}
                className="text-sm text-slate-400 hover:text-purple-400 transition-colors font-mono"
              >
                <span className="text-purple-500">0{i + 1}.</span> {item}()
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 max-w-4xl"
        >
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-10 mx-auto max-w-lg"
          >
            <div className="bg-[#12121a] rounded-xl border border-purple-900/30 overflow-hidden shadow-2xl shadow-purple-900/20">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a24] border-b border-purple-900/20">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-slate-500 font-mono">saanya@portfolio ~ </span>
              </div>
              <div className="p-4 font-mono text-sm text-left">
                <pre className="text-purple-300/90 whitespace-pre-wrap">
                  {terminalText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-purple-400`}>▊</span>
                </pre>
              </div>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-purple-400 font-mono text-sm mb-4 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Hey, I'm
          </motion.p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent">
              Saanya Jauhri
            </span>
          </h1>



          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
            CS @ <span className="text-purple-400">NJIT</span> • Building AI-powered solutions with{' '}
            <CodeBlock>Python</CodeBlock>, <CodeBlock>React</CodeBlock>, and <CodeBlock>ML</CodeBlock>.
            Seeking new grad / intern roles where I can make an impact.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/saanyajauhri", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/sj236code", label: "GitHub" },
              { icon: Mail, href: "mailto:saanyajauhri@gmail.com", label: "Email" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="group relative p-4 rounded-xl bg-[#12121a] border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors relative z-10" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:saanyajauhri@gmail.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all"
          >
            Let's work together
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <motion.button
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 text-purple-400/50 hover:text-purple-400 transition-colors"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-mono">
              <span className="text-purple-500">01.</span> about<span className="text-purple-400">()</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-900/50 to-transparent" />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-4"
            >
              <p className="text-slate-300 leading-relaxed">
                I’m a computer science student at <span className="text-purple-400 font-medium">New Jersey Institute of Technology</span> 
                with experience building data-driven and AI-based systems.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I’ve worked on computer vision pipelines for sports analytics and on tools that structure and analyze real-world data. 
                I’m interested in roles where I can keep learning, contribute to solid engineering work, and build things that are actually used.
              </p>

              <div className="pt-4">
                <p className="text-sm text-slate-500 mb-3 font-mono">// technologies I work with</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'React', 'Flask', 'YOLO', 'SQL', 'Docker', 'AWS'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-purple-900/20 text-purple-300 border border-purple-900/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-[#12121a] rounded-xl border border-purple-900/30 p-6">
                  <div className="flex items-center gap-2 mb-4 text-purple-400 font-mono text-sm">
                    <Terminal className="w-4 h-4" />
                    quick_facts.json
                  </div>
                  <pre className="text-sm text-slate-300 font-mono">
{`{
  "education": "B.S. CS @ NJIT",
  "location": "NYC Area",
  "interests": [
    "AI/ML",
    "Full-Stack Dev",
    "Computer Vision"
  ],
  "seeking": "SWE Intern/New Grad"
}`}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-24 px-6 md:px-12 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-mono">
              <span className="text-purple-500">02.</span> techStack<span className="text-purple-400">()</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-900/50 to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([key, category], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#12121a] rounded-xl border border-purple-900/30 p-6 h-full hover:border-purple-700/50 transition-colors">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-purple-900/30">
                      <category.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.items.map((skill) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-sm ${skill.highlight ? 'text-purple-300' : 'text-slate-400'}`}>
                            {skill.name}
                            {skill.highlight && <span className="ml-1 text-purple-500">*</span>}
                          </span>
                          <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-purple-900/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full rounded-full ${
                              skill.highlight 
                                ? 'bg-gradient-to-r from-purple-500 to-violet-500' 
                                : 'bg-purple-800/50'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-12 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-mono">
              <span className="text-purple-500">03.</span> experience<span className="text-purple-400">()</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-900/50 to-transparent" />
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#12121a] rounded-xl border border-purple-900/30 p-6 md:p-8 hover:border-purple-700/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title} <span className="text-purple-400">@ {exp.company}</span>
                      </h3>
                      <p className="text-slate-500 font-mono text-sm">{exp.period}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs font-mono rounded bg-purple-900/30 text-purple-300 border border-purple-900/50">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6">{exp.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {exp.achievements.map((achievement, j) => (
                      <div key={j} className="text-center p-4 rounded-lg bg-purple-900/10 border border-purple-900/20">
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                          {achievement.metric}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-mono">
              <span className="text-purple-500">04.</span> projects<span className="text-purple-400">()</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-900/50 to-transparent" />
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group block relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="relative bg-[#12121a] rounded-xl border border-purple-900/30 p-6 md:p-8 hover:border-purple-600/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-purple-400 font-mono text-sm mb-1">{project.subtitle}</p>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-purple-400 transition-colors" />
                  </div>

                  <p className="text-slate-400 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-purple-900/30 text-purple-300 border border-purple-900/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.features.map((f) => (
                      <span key={f} className="text-xs text-slate-500">
                        <span className="text-purple-500">▹</span> {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-purple-400 font-mono text-sm mb-4">05. contact()</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent">
                Let's Build Something
              </span>
            </h2>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto">
              I'm actively looking for new grad and internship opportunities in software engineering. 
              If you have a role that matches my skills, I'd love to hear from you!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href="mailto:saanyajauhri@gmail.com"
                className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                <Mail className="w-5 h-5" />
                saanyajauhri@gmail.com
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-500 text-sm">
              <a href="tel:7328220870" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Phone className="w-4 h-4" />
                (732) 822-0870
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                NYC Area
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-900/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-mono">
            <span className="text-purple-400">&lt;</span>
            Designed & Built by Saanya Jauhri
            <span className="text-purple-400"> /&gt;</span>
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/saanyajauhri" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-purple-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/sj236code" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-purple-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}