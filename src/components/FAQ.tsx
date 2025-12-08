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
        <section className="relative bg-black py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Quick answers to help you understand crypto cards and find the support you need.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-0">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden transition-all duration-300 ${openIndex === index
                                ? 'bg-[#111] rounded-2xl my-4'
                                : 'border-b border-white/10'
                                }`}
                            style={openIndex === index ? {
                                backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 8px)'
                            } : {}}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full flex items-center justify-between text-left transition-all duration-300 ${openIndex === index ? 'p-8 pb-4' : 'py-6 px-4'
                                    }`}
                            >
                                <span className="text-lg md:text-xl font-semibold text-white">
                                    {faq.question}
                                </span>

                                <div className="flex-shrink-0 ml-6">
                                    {openIndex === index ? (
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                                        </svg>
                                    )}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-8 pb-8 pt-0">
                                    <p className="text-slate-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
