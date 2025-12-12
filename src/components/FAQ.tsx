"use client";

import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What is Space?",
        answer: "Space is a decentralized prediction market platform on Solana where you trade real-world outcomes across: crypto, politics, sports, technology, economy, culture, and beyond. Buy YES or NO shares on what you think will happen. If you're right, you get paid. Cash out anytime or hold until resolution."
    },
    {
        question: "What makes Space different?",
        answer: "Space offers lightning-fast execution on Solana, a wide range of markets beyond just crypto, and a user-friendly interface designed for both beginners and pro traders. We prioritize transparency and community governance."
    },
    {
        question: "When will Space launch?",
        answer: "Space is currently in its mainnet beta phase. We are rolling out features incrementally to ensure platform stability and security. Follow our social channels for the latest launch updates."
    },
    {
        question: "When will $SPACE go live?",
        answer: "$SPACE token generation event (TGE) details will be announced soon. Join our discord and follow us on X to be the first to know about airdrops and token launch dates."
    },
    {
        question: "Where can I get support?",
        answer: "You can get support 24/7 through our Discord server. Our community managers and support team are always ready to help you with any issues or questions you might have."
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
                                : 'border-b border-white/10 hover:bg-white/5'
                                }`}
                            style={openIndex === index ? {
                                backgroundImage: 'repeating-linear-gradient(135deg, #141414 0px, #141414 4px, transparent 4px, transparent 6px)'
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
