"use client";

import { useState } from "react";
import Link from "next/link";

export default function RequestCardPage() {
    const [formData, setFormData] = useState({
        cardName: "",
        provider: "",
        website: "",
        email: "",
        additionalInfo: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log("Request submitted:", formData);
        setIsSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-white">
                <div className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">
                            Request Submitted!
                        </h1>
                        <p className="text-lg text-slate-600 mb-8">
                            Thank you for your request. We'll review the card and add it to our database soon.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/explore-cards"
                                className="px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
                            >
                                Explore Cards
                            </Link>
                            <Link
                                href="/compare-cards"
                                className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                Compare Cards
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Request a Card
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Can't Find a Card?
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Let us know which crypto card you'd like to see on Cardforyou. We'll review your request and add it to our database.
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Card Name */}
                    <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-slate-900 mb-2">
                            Card Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            required
                            value={formData.cardName}
                            onChange={handleChange}
                            placeholder="e.g., Obsidian Card, Ruby Steel Card"
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                        />
                    </div>

                    {/* Provider */}
                    <div>
                        <label htmlFor="provider" className="block text-sm font-medium text-slate-900 mb-2">
                            Card Provider <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="provider"
                            name="provider"
                            required
                            value={formData.provider}
                            onChange={handleChange}
                            placeholder="e.g., Crypto.com, Binance, Nexo"
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                        />
                    </div>

                    {/* Website */}
                    <div>
                        <label htmlFor="website" className="block text-sm font-medium text-slate-900 mb-2">
                            Provider Website
                        </label>
                        <input
                            type="url"
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="https://example.com"
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                            Your Email <span className="text-slate-400 font-normal">(optional - to notify when added)</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                        />
                    </div>

                    {/* Additional Info */}
                    <div>
                        <label htmlFor="additionalInfo" className="block text-sm font-medium text-slate-900 mb-2">
                            Additional Information
                        </label>
                        <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            rows={4}
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            placeholder="Any additional details about the card (cashback rates, features, etc.)"
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400 resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full px-6 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                        >
                            Submit Request
                        </button>
                    </div>

                    {/* Info Note */}
                    <p className="text-sm text-slate-500 text-center">
                        We typically review and add new cards within 3-5 business days.
                    </p>
                </form>

                {/* Alternative CTA */}
                <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Are you a card provider?</h3>
                    <p className="text-sm text-slate-600 mb-4">
                        If you're a crypto card company looking to get listed, please use our official listing form.
                    </p>
                    <Link
                        href="/get-listed"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                        Go to Get Listed
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </main>
    );
}
