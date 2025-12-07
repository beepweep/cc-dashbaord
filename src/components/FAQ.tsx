"use client";

import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What is Cardforyou?",
        answer: "Cardforyou is a comprehensive comparison platform for crypto cards. We help you find the perfect crypto card by comparing rewards, fees, benefits, and features from leading providers worldwide. Make informed decisions and maximize your crypto spending benefits."
    },
    {
        question: "How do I choose the right crypto card?",
        answer: "Consider your spending habits, preferred rewards (cashback, crypto rewards, or points), annual fees, staking requirements, and supported regions. Use our comparison tool to filter cards based on your priorities and find the best match for your lifestyle."
    },
    {
        question: "Are crypto cards safe to use?",
        answer: "Crypto cards from reputable providers are generally safe and regulated. They operate similarly to traditional debit or credit cards but are funded with cryptocurrency. Always verify the provider's licensing, security measures, and user reviews before applying."
    },
    {
        question: "Do I need to stake tokens to get a crypto card?",
        answer: "It depends on the card. Some premium crypto cards require you to stake a certain amount of their native token to unlock higher reward tiers and benefits. However, many providers also offer entry-level cards with no staking requirements."
    },
    {
        question: "How can I get my card listed on Cardforyou?",
        answer: "If you're a crypto card provider, simply visit our 'Get Listed' page and fill out the application form with your card details, fees, rewards, and features. Our team will review your submission and get back to you within 5-7 business days."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative bg-gradient-to-b from-black via-slate-950 to-black py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Mesh gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                        <span className="text-lg">💬</span>
                        <span className="text-sm text-white/70">Got Questions?</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
                            Frequently Asked Questions
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-xl mx-auto">
                        Quick answers to help you understand crypto cards and find the support you need.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${openIndex === index
                                    ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10'
                                    : 'bg-white/[0.03] hover:bg-white/[0.05]'
                                }`}
                        >
                            {/* Border gradient */}
                            <div className={`absolute inset-0 rounded-2xl border transition-all duration-500 ${openIndex === index
                                    ? 'border-white/20'
                                    : 'border-white/5 group-hover:border-white/10'
                                }`} />

                            <button
                                onClick={() => toggleFAQ(index)}
                                className="relative w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span className={`text-lg font-semibold pr-8 transition-all duration-300 ${openIndex === index
                                        ? 'text-white'
                                        : 'text-white/80 group-hover:text-white'
                                    }`}>
                                    {faq.question}
                                </span>

                                {/* Animated icon */}
                                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${openIndex === index
                                        ? 'bg-gradient-to-br from-blue-500 to-purple-500 rotate-45 scale-110'
                                        : 'bg-white/5 group-hover:bg-white/10'
                                    }`}>
                                    <svg
                                        className={`w-5 h-5 transition-all duration-300 ${openIndex === index ? 'text-white' : 'text-white/60'
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                                    </svg>
                                </div>
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-6">
                                    <div className="pt-2 border-t border-white/10">
                                        <p className="text-slate-400 leading-relaxed pt-4">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm">
                        <p className="text-lg text-white/60 mb-4">Still have questions?</p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10"
                        >
                            <span>Contact Support</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
