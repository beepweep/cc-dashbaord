"use client";

import Link from "next/link";

const steps = [
    {
        number: "01",
        title: "Browse Cards",
        description: "Explore our comprehensive database of crypto cards. Compare cashback rates, staking requirements, fees, and exclusive benefits."
    },
    {
        number: "02",
        title: "Compare Features",
        description: "Use our advanced filters to narrow down options. Sort by rewards, fees, material, and staking requirements."
    },
    {
        number: "03",
        title: "Make Your Choice",
        description: "Found the perfect card? Click to learn more, read reviews, and apply directly through our partner links."
    }
];

export default function HowItWorks() {
    return (
        <section className="relative bg-black py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:56px_56px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 tracking-wider uppercase mb-4">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        How It Works
                    </h2>
                    <p className="text-base text-slate-400 max-w-xl mx-auto">
                        Find and compare the best crypto cards in three simple steps.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connector line for desktop */}
                    <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {steps.map((step, index) => (
                        <div key={step.number} className="relative group text-center">
                            <div className="relative inline-flex mb-8">
                                {/* Number Circle */}
                                <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-500">
                                    <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">
                                {step.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed px-4">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                        <Link
                            href="/explore-cards"
                            className="px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all hover:scale-105 text-sm shadow-lg shadow-white/5"
                        >
                            Start Exploring Cards
                        </Link>
                        <Link
                            href="/blog"
                            className="px-8 py-3.5 text-slate-400 font-medium hover:text-white transition-colors text-sm flex items-center gap-2"
                        >
                            Learn More
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
