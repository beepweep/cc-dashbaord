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
        <section className="relative bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/50"></div>

            <div className="max-w-3xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-400 text-sm max-w-xl mx-auto">
                        Quick answers to help you understand crypto cards and find the support you need.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group border border-slate-800/50 rounded-xl overflow-hidden bg-slate-900/30 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/50 hover:bg-slate-900/50"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left transition-colors"
                            >
                                <span className="text-base font-semibold text-white pr-8 group-hover:text-blue-400 transition-colors">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full border border-slate-700 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-blue-500 border-blue-500 rotate-45' : 'bg-slate-800/50 group-hover:border-slate-600'
                                    }`}>
                                    <span className={`text-lg leading-none transition-colors ${openIndex === index ? 'text-white' : 'text-slate-400'
                                        }`}>
                                        +
                                    </span>
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-5 pb-4 pt-0">
                                    <div className="border-t border-slate-800/50 pt-3">
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-slate-500 mb-3">Still have questions?</p>
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                        Contact our support team
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
