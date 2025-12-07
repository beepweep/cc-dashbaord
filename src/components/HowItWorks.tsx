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
        <section className="relative bg-slate-950 py-28 px-3 sm:px-5 lg:px-7 overflow-hidden">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:56px_56px]" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-xs font-medium text-slate-500 tracking-wider uppercase mb-3">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                        How It Works
                    </h2>
                    <p className="text-base text-slate-400 max-w-xl mx-auto">
                        Find and compare the best crypto cards in three simple steps.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-7">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative group">
                            {/* Connector line for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-7 left-1/2 w-full h-px bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700" />
                            )}

                            <div className="relative">
                                {/* Step Number */}
                                <div className="relative z-10 w-14 h-14 mx-auto mb-7 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-slate-800 rounded-xl rotate-45 transition-transform group-hover:rotate-[55deg] group-hover:scale-110 duration-300" />
                                    <span className="relative text-lg font-bold text-white">{step.number}</span>
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row gap-3 items-center">
                        <Link
                            href="/explore-cards"
                            className="px-7 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-all hover:scale-105 text-sm"
                        >
                            Start Exploring Cards
                        </Link>
                        <Link
                            href="/blog"
                            className="px-7 py-3 text-white font-medium hover:text-slate-300 transition-colors text-sm"
                        >
                            Learn More →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
