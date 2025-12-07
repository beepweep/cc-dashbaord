"use client";

import Link from "next/link";

export default function AffiliateProgramPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Join Our Affiliate Program
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                        Earn competitive commissions by promoting the best crypto cards to your audience.
                        Partner with Cardforyou and monetize your content today.
                    </p>
                    <button className="px-8 py-4 rounded-full bg-slate-900 text-white text-base font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl">
                        Apply Now
                    </button>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Why Partner With Us?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Join hundreds of content creators earning passive income through our affiliate program
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            Competitive Commissions
                        </h3>
                        <p className="text-slate-600">
                            Earn up to 30% commission on every successful referral. The more you refer, the more you earn.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            Real-Time Analytics
                        </h3>
                        <p className="text-slate-600">
                            Track your clicks, conversions, and earnings with our comprehensive dashboard and reporting tools.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            Marketing Resources
                        </h3>
                        <p className="text-slate-600">
                            Access banners, landing pages, and promotional materials to help you succeed.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            Fast Payouts
                        </h3>
                        <p className="text-slate-600">
                            Get paid monthly via bank transfer, PayPal, or crypto. Minimum payout threshold of just $100.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">🤝</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            Dedicated Support
                        </h3>
                        <p className="text-slate-600">
                            Our affiliate team is here to help you maximize your earnings with personalized support.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">🔗</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            90-Day Cookie
                        </h3>
                        <p className="text-slate-600">
                            Extended cookie duration means you earn commissions even if users convert weeks later.
                        </p>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-lg text-slate-600">
                            Start earning in three simple steps
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Sign Up</h3>
                                <p className="text-slate-600">
                                    Fill out our simple application form. We'll review and approve qualified applicants within 24-48 hours.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Promote</h3>
                                <p className="text-slate-600">
                                    Share your unique affiliate links on your website, blog, social media, or newsletter. Use our marketing materials to boost conversions.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Earn</h3>
                                <p className="text-slate-600">
                                    Earn commissions for every user who signs up through your link. Track your earnings in real-time and get paid monthly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Commission Tiers */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Commission Structure
                    </h2>
                    <p className="text-lg text-slate-600">
                        The more you refer, the more you earn
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
                        <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">Starter</div>
                        <div className="text-4xl font-bold text-slate-900 mb-2">15%</div>
                        <div className="text-slate-600 mb-6">0-10 referrals/month</div>
                        <ul className="text-sm text-slate-600 space-y-2 text-left">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span>Basic marketing materials</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span>Monthly payouts</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span>Email support</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 border-2 border-slate-900 rounded-xl p-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            POPULAR
                        </div>
                        <div className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-2">Pro</div>
                        <div className="text-4xl font-bold text-white mb-2">25%</div>
                        <div className="text-slate-300 mb-6">11-50 referrals/month</div>
                        <ul className="text-sm text-slate-300 space-y-2 text-left">
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-0.5">✓</span>
                                <span>Premium marketing materials</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-0.5">✓</span>
                                <span>Priority payouts</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-0.5">✓</span>
                                <span>Priority support</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-0.5">✓</span>
                                <span>Custom landing pages</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
                        <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">Elite</div>
                        <div className="text-4xl font-bold text-slate-900 mb-2">30%</div>
                        <div className="text-slate-600 mb-6">50+ referrals/month</div>
                        <ul className="text-sm text-slate-600 space-y-2 text-left">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span>All Pro features</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span>Dedicated account manager</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span>Custom commission deals</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span>Early access to new features</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Start Earning?
                    </h2>
                    <p className="text-lg text-slate-300 mb-8">
                        Join our affiliate program today and start monetizing your crypto card content
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 rounded-full bg-white text-slate-900 text-base font-semibold hover:bg-slate-100 transition-colors shadow-lg">
                            Apply Now
                        </button>
                        <Link
                            href="/blog"
                            className="px-8 py-4 rounded-full border-2 border-white text-white text-base font-semibold hover:bg-white/10 transition-colors"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            Who can join the affiliate program?
                        </h3>
                        <p className="text-slate-600">
                            Anyone with a website, blog, social media following, or newsletter focused on crypto, finance, or lifestyle content can apply. We look for partners who can provide value to their audience.
                        </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            How do I get paid?
                        </h3>
                        <p className="text-slate-600">
                            We offer monthly payouts via bank transfer, PayPal, or cryptocurrency. The minimum payout threshold is $100. Payments are processed within 5 business days of the month's end.
                        </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            What marketing materials do you provide?
                        </h3>
                        <p className="text-slate-600">
                            We provide banners, text links, landing pages, email templates, and social media content. Pro and Elite affiliates get access to custom materials and dedicated landing pages.
                        </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            How long does the cookie last?
                        </h3>
                        <p className="text-slate-600">
                            Our affiliate cookies last for 90 days. This means if someone clicks your link and signs up within 90 days, you'll earn the commission.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
