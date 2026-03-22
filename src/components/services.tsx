"use client";

import React, { useState, useEffect } from "react";
import "./service.css";


const ServiceCard = ({ icon, title, description, color, onLearnMore }: { icon: React.ReactNode, title: string, description: string, color: string, onLearnMore: () => void }) => {
    return (
        <div className="glass group p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-8px] hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 flex flex-col items-start text-left">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 bg-slate-800/50 group-hover:scale-110`}>
                <div className={`text-${color}`}>
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-slate-400 leading-relaxed mb-6 line-clamp-3">
                {description}
            </p>
            <button
                onClick={onLearnMore}
                className="flex items-center text-primary font-bold text-xs tracking-[0.2em] group/link cursor-pointer hover:opacity-80 transition-opacity"
            >
                LEARN MORE
                <svg
                    className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
        </div>
    );
};

interface Service {
    title: string;
    description: string;
    color: string;
    icon: React.ReactNode;
    capabilities: string[];
    impact: string;
}

const ServiceDetailModal = ({ isOpen, onClose, service }: { isOpen: boolean, onClose: () => void, service: Service | null }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    if (!isOpen || !service) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/60 transition-all duration-300">
            <div className="glass w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] relative animate-in fade-in zoom-in duration-300 shadow-2xl border-white/10">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-8 sm:p-12 md:p-16">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Left Column: Icon & Title */}
                        <div className="w-full md:w-1/3">
                            <div className={`w-20 h-20 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-8 text-${service.color} shadow-xl shadow-${service.color}/10`}>
                                {service.icon}
                            </div>
                            <h2 className="text-4xl font-black text-white mb-4 leading-tight">{service.title}</h2>
                            <div className="h-1.5 w-12 bg-primary rounded-full mb-8"></div>
                            <p className="text-slate-400 font-medium leading-relaxed mb-8">
                                {service.description}
                            </p>
                        </div>

                        {/* Right Column: Key Details */}
                        <div className="w-full md:w-2/3 space-y-10">
                            <section>
                                <h3 className="text-xs font-black tracking-[0.3em] uppercase text-primary mb-6">Core Capabilities</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.capabilities.map((cap: string, i: number) => (
                                        <div key={i} className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/5">
                                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-slate-200 font-semibold text-sm">{cap}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xs font-black tracking-[0.3em] uppercase text-secondary mb-6">Strategic Impact</h3>
                                <p className="text-slate-300 leading-relaxed font-medium bg-slate-800/20 p-6 rounded-2xl border-l-4 border-secondary">
                                    {service.impact}
                                </p>
                            </section>

                            <div className="pt-6">
                                <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-5 rounded-2xl font-black text-lg hover:scale-[1.02] transition-all shadow-xl shadow-primary/20">
                                    Book a Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Services() {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services: Service[] = [
        {
            title: "Web Development",
            description: "Crafting high-performance, responsive digital experiences using bleeding-edge frameworks for modern browser compatibility.",
            color: "primary",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                </svg>
            ),
            capabilities: ["Technology-Agnostic Development", "Responsive SEO Architecture", "Performance Optimization", "Web3 Integration"],
            impact: "We deliver lightning-fast digital storefronts that convert visitors into loyal customers through seamless user flows and robust infrastructure."
        },
        {
            title: "Full Stack Applications",
            description: "End-to-end architecture development combining robust back-end logic with intuitive, high-velocity front-end systems.",
            color: "secondary",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            capabilities: ["Microservices Design", "Cloud Native Back-Ends", "Real-time Data Systems", "Legacy Modernization"],
            impact: "Eliminate technical debt and scale effortlessly with architectures designed for the modern cloud landscape."
        },
        {
            title: "POS Systems",
            description: "Bespoke point-of-sale solutions designed for retail fluidity, real-time inventory tracking, and secure payment processing.",
            color: "accent",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            ),
            capabilities: ["Omnichannel Integration", "Biometric Authentication", "IoT Sensor Connectivity", "Real-time Inventory"],
            impact: "Transform your retail experience with hardware-software synergy that simplifies complex business operations."
        },
        {
            title: "SaaS Solutions",
            description: "Scalable multi-tenant architectures designed for high availability, automated deployments, and global user reach.",
            color: "primary",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
            capabilities: ["Multi-tenant Security", "Global CDN Distribution", "Automated DevOps CI/CD", "Subscription Economics"],
            impact: "Launch your product globally within weeks, backed by infrastructure that scales from 10 to 10 million users."
        },
        {
            title: "UI/UX Design",
            description: "Human-centric interface design that marries geometric precision with fluid motion for unparalleled user engagement.",
            color: "emerald-400",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            capabilities: ["Neuromorphic Interfaces", "Motion Design Systems", "Accessibility Compliance", "Design-to-Code Parity"],
            impact: "Emotional engineering meets functional excellence to create products that users don&apos;t just use, but love."
        },
        {
            title: "Cyber Security",
            description: "Hardened infrastructure protocols and threat intelligence integration to shield your digital assets from emergent risks.",
            color: "rose-400",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            capabilities: ["Zero-Trust Integration", "AI Threat Detection", "End-to-End Encryption", "Incident Remediation"],
            impact: "Sleep soundly knowing your digital ecosystem is protected by pro-active, military-grade security protocols."
        }
    ];

    const handleLearnMore = (service: any) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-background selection:bg-primary/30">

            {/* Hero Section */}
            <section className="relative pt-48 pb-24 px-4 overflow-hidden">
                {/* Background glow effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-10 animate-float shadow-xl shadow-primary/5">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        <span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase">Neural Systems Architecture</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
                        Digital <span className="text-primary italic">Ecosystems</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
                        Engineering next-generation interfaces and scalable architectures that push
                        the boundaries of technical possibility. Experience the fluid integration
                        of logic and aesthetics.
                    </p>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-24 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                color={service.color}
                                onLearnMore={() => handleLearnMore(service)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative glass p-12 md:p-24 rounded-[2rem] text-center overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-3xl -ml-32 -mt-32"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 blur-3xl -mr-32 -mb-32"></div>

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready to build the future?</h2>
                        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-medium">
                            Our consultants are standing by to audit your current stack and
                            propose a migration to ZynraTech&apos;s neural architecture.
                        </p>
                        <button className="bg-gradient-to-r from-primary to-secondary text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-primary/30 active:scale-95 cursor-pointer">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* Service Detail Modal */}
            <ServiceDetailModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                service={selectedService}
            />
        </div>
    );
}
