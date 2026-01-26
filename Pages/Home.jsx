import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, ExternalLink, Code2, Brain, Rocket, Coffee } from 'lucide-react';

const roles = ["Software Engineer", "AI Enthusiast", "Problem Solver", "Builder"];

export default function Home() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [activeSkillCategory, setActiveSkillCategory] = useState('all');

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const experiences = [
        {
            title: "AI Intern",
            company: "GameRun",
            period: "June 2025 - August 2025",
            description: "Built object detection pipelines for sports analytics",
            highlights: ["YOLO pipeline for tennis & fencing", "50% reduction in false positives", "Processed 100+ hours of footage"],
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "AI Fellow",
            company: "NJIT Biomedical Engineering",
            period: "August 2024 - Present",
            description: "Developing AI-driven simulation pipelines",
            highlights: ["90% reduction in preprocessing time", "Automated simulation workflows", "High-throughput processing"],
            color: "from-cyan-500 to-blue-500"
        }
    ];

    const projects = [
        {
            title: "Salon Management System",
            description: "Full-stack booking platform with payments, messaging, and analytics",
            tech: ["React", "Flask", "Firebase", "SQL"],
            link: "https://jadeinc.net",
            color: "from-violet-600 to-purple-600"
        },
        {
            title: "Syllabus Summaries",
            description: "AI-powered tool that extracts key info from university syllabi",
            tech: ["React", "Flask", "Gemini AI"],
            link: "https://github.com/sj236code/SyllySummy",
            color: "from-cyan-600 to-teal-600"
        }
    ];

    const skillCategories = {
        all: "All",
        languages: "Languages",
        ai: "AI & ML",
        web: "Web Dev",
        devops: "DevOps"
    };

    const skills = [
        { name: "Python", category: "languages", level: 95 },
        { name: "Java", category: "languages", level: 90 },
        { name: "JavaScript", category: "languages", level: 85 },
        { name: "C++", category: "languages", level: 75 },
        { name: "YOLO", category: "ai", level: 85 },
        { name: "Gemini AI", category: "ai", level: 80 },
        { name: "Pandas", category: "ai", level: 90 },
        { name: "Scikit-learn", category: "ai", level: 75 },
        { name: "React", category: "web", level: 90 },
        { name: "Flask", category: "web", level: 85 },
        { name: "SQL", category: "web", level: 85 },
        { name: "REST APIs", category: "web", level: 90 },
        { name: "Docker", category: "devops", level: 70 },
        { name: "AWS S3", category: "devops", level: 75 },
        { name: "CI/CD", category: "devops", level: 80 },
        { name: "Git", category: "devops", level: 90 },
    ];

    const filteredSkills = activeSkillCategory === 'all'
        ? skills
        : skills.filter(s => s.category === activeSkillCategory);

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
                {/* Animated background gradient */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center z-10"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-cyan-400 font-mono text-sm md:text-base mb-4"
                    >
                        Hey there! I'm
                    </motion.p>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                            Saanya Jauhri
                        </span>
                    </h1>

                    <div className="h-12 md:h-16 flex items-center justify-center mb-8">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={roleIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-xl md:text-3xl text-slate-400"
                            >
                                {roles[roleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    <p className="text-slate-400 max-w-md mx-auto mb-10 text-sm md:text-base">
                        CS student @ NJIT passionate about building AI-powered solutions
                        that make a real impact. Currently seeking new grad / intern roles.
                    </p>

                    <div className="flex gap-4 justify-center mb-12">
                        <a
                            href="https://linkedin.com/in/saanyajauhri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://github.com/sj236code"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:saanyajauhri@gmail.com"
                            className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>

                <motion.button
                    onClick={() => scrollToSection('about')}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 animate-bounce"
                >
                    <ChevronDown className="w-8 h-8 text-slate-500" />
                </motion.button>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            A bit about me
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { icon: Code2, title: "Builder at Heart", text: "I love turning ideas into working products. Whether it's a full-stack app or an AI pipeline, I'm happiest when I'm creating." },
                            { icon: Brain, title: "AI Curious", text: "From YOLO object detection to LLM integrations, I'm fascinated by how AI can solve real-world problems in creative ways." },
                            { icon: Rocket, title: "Always Learning", text: "Tech moves fast and I love keeping up. Currently diving deeper into cloud architecture and ML ops." },
                            { icon: Coffee, title: "Beyond Code", text: "When I'm not coding, you'll find me exploring NYC, trying new coffee shops, or working on side projects." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300"
                            >
                                <item.icon className="w-8 h-8 text-purple-400 mb-4" />
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 bg-slate-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Where I've Worked
                        </span>
                    </h2>

                    <div className="space-y-8">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${exp.color} rounded-full`} />
                                <div className="ml-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="text-xl font-bold">{exp.title}</h3>
                                        <span className="text-slate-500">@</span>
                                        <span className="text-purple-400 font-medium">{exp.company}</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-4 font-mono">{exp.period}</p>
                                    <p className="text-slate-300 mb-4">{exp.description}</p>
                                    <ul className="space-y-2">
                                        {exp.highlights.map((h, j) => (
                                            <li key={j} className="text-slate-400 text-sm flex items-start gap-2">
                                                <span className="text-cyan-400 mt-1">▹</span>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Things I've Built
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
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
                                className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                                <div className="p-6 relative">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-purple-400 transition-colors" />
                                    </div>
                                    <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, j) => (
                                            <span key={j} className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-slate-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            My Toolkit
                        </span>
                    </h2>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {Object.entries(skillCategories).map(([key, label]) => (
                            <button
                                key={key}
                                onClick={() => setActiveSkillCategory(key)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSkillCategory === key
                                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                                        : 'bg-slate-800 text-slate-400 hover:text-white'
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <AnimatePresence mode="popLayout">
                            {filteredSkills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="relative p-4 rounded-xl bg-slate-900/50 border border-slate-800 overflow-hidden group hover:border-slate-700 transition-all"
                                >
                                    <div
                                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-500"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                    <p className="font-medium text-sm">{skill.name}</p>
                                    <p className="text-xs text-slate-500 mt-1">{skill.level}%</p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Let's Connect
                            </span>
                        </h2>
                        <p className="text-slate-400 mb-10">
                            I'm currently looking for new grad and internship opportunities in software engineering.
                            If you think I'd be a good fit for your team, I'd love to hear from you!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                            <a
                                href="mailto:saanyajauhri@gmail.com"
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 font-medium hover:opacity-90 transition-opacity"
                            >
                                <Mail className="w-5 h-5" />
                                saanyajauhri@gmail.com
                            </a>
                            <a
                                href="tel:7328220870"
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                (732) 822-0870
                            </a>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                            <MapPin className="w-4 h-4" />
                            NYC Area
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-slate-800">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        Built with ☕ by Saanya Jauhri
                    </p>
                    <div className="flex gap-4">
                        <a href="https://linkedin.com/in/saanyajauhri" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://github.com/saanyajauhri" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}