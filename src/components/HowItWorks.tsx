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
        <section className="relative bg-slate-950 py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-sm font-medium text-slate-500 tracking-wider uppercase mb-4">
                        Simple Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        How It Works
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Find and compare the best crypto cards in three simple steps.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative group">
                            {/* Connector line for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700" />
                            )}

                            <div className="relative">
                                {/* Step Number */}
                                <div className="relative z-10 w-16 h-16 mx-auto mb-8 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-slate-800 rounded-2xl rotate-45 transition-transform group-hover:rotate-[55deg] group-hover:scale-110 duration-300" />
                                    <span className="relative text-xl font-bold text-white">{step.number}</span>
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-white mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                        <Link
                            href="/explore-cards"
                            className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-all hover:scale-105"
                        >
                            Start Exploring Cards
                        </Link>
                        <Link
                            href="/blog"
                            className="px-8 py-4 text-white font-medium hover:text-slate-300 transition-colors"
                        >
                            Learn More →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
