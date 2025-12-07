export default function MediaKit() {
    return (
        <main className="min-h-screen bg-white pt-28 pb-16 px-3 sm:px-5 lg:px-7">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Media Kit</h1>
                <p className="text-sm text-slate-600 mb-10">
                    Download our brand assets, logos, and guidelines for media and partnership use.
                </p>

                {/* Brand Overview */}
                <section className="mb-14">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-4">About Cardforyou</h2>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        Cardforyou is the leading crypto card comparison platform, helping users find the perfect crypto card by comparing rewards, fees, and benefits from top providers worldwide.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-slate-900 mb-2">Mission</h3>
                            <p className="text-sm text-slate-600">Simplify crypto card discovery and empower informed financial decisions.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-slate-900 mb-2">Vision</h3>
                            <p className="text-sm text-slate-600">Be the most trusted resource for crypto card comparisons globally.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-slate-900 mb-2">Founded</h3>
                            <p className="text-sm text-slate-600">2025 • Crypto Finance</p>
                        </div>
                    </div>
                </section>

                {/* Logo Downloads */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">Brand Assets</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Primary Logo */}
                        <div className="border border-gray-200 rounded-lg p-8 bg-white">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="relative w-10 h-10 flex items-center justify-center">
                                    <div className="absolute w-6 h-6 bg-slate-900/20 rounded-lg transform -rotate-12 translate-x-1 translate-y-1 border border-slate-900/20"></div>
                                    <div className="absolute w-6 h-6 bg-slate-900 rounded-lg transform rotate-6 border border-slate-900/50 shadow-lg"></div>
                                </div>
                                <span className="text-2xl font-bold text-slate-900">Cardforyou</span>
                            </div>
                            <p className="text-sm text-slate-600 mb-4">Primary Logo (Light Background)</p>
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-500">Download PNG</button>
                        </div>

                        {/* Dark Logo */}
                        <div className="border border-gray-800 rounded-lg p-8 bg-slate-900">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="relative w-10 h-10 flex items-center justify-center">
                                    <div className="absolute w-6 h-6 bg-white/20 rounded-lg transform -rotate-12 translate-x-1 translate-y-1 border border-white/20"></div>
                                    <div className="absolute w-6 h-6 bg-white rounded-lg transform rotate-6 border border-white/50 shadow-lg"></div>
                                </div>
                                <span className="text-2xl font-bold text-white">Cardforyou</span>
                            </div>
                            <p className="text-sm text-slate-400 mb-4">Primary Logo (Dark Background)</p>
                            <button className="text-sm font-medium text-blue-400 hover:text-blue-300">Download PNG</button>
                        </div>
                    </div>
                </section>

                {/* Brand Colors */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">Brand Colors</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <div className="w-full h-24 rounded-lg bg-slate-900 border border-gray-200 mb-2"></div>
                            <p className="text-sm font-medium text-slate-900">Primary</p>
                            <p className="text-xs text-slate-600">#0F172A</p>
                        </div>
                        <div>
                            <div className="w-full h-24 rounded-lg bg-blue-600 border border-gray-200 mb-2"></div>
                            <p className="text-sm font-medium text-slate-900">Accent</p>
                            <p className="text-xs text-slate-600">#2563EB</p>
                        </div>
                        <div>
                            <div className="w-full h-24 rounded-lg bg-white border border-gray-300 mb-2"></div>
                            <p className="text-sm font-medium text-slate-900">Background</p>
                            <p className="text-xs text-slate-600">#FFFFFF</p>
                        </div>
                        <div>
                            <div className="w-full h-24 rounded-lg bg-gray-50 border border-gray-200 mb-2"></div>
                            <p className="text-sm font-medium text-slate-900">Surface</p>
                            <p className="text-xs text-slate-600">#F9FAFB</p>
                        </div>
                    </div>
                </section>

                {/* Typography */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">Typography</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <p className="text-sm text-slate-600 mb-4">Primary Font</p>
                        <p className="text-4xl font-bold text-slate-900 mb-2">Sora</p>
                        <p className="text-slate-600">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p className="text-slate-600">abcdefghijklmnopqrstuvwxyz</p>
                        <p className="text-slate-600">0123456789</p>
                    </div>
                </section>

                {/* Usage Guidelines */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">Usage Guidelines</h2>
                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-slate-900">Do</p>
                                <p className="text-sm text-slate-600">Use the logo with adequate clear space around it</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-slate-900">Do</p>
                                <p className="text-sm text-slate-600">Maintain the original aspect ratio when resizing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-slate-900">Don't</p>
                                <p className="text-sm text-slate-600">Alter the logo colors or add effects</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-slate-900">Don't</p>
                                <p className="text-sm text-slate-600">Rotate, skew, or distort the logo</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                    <h2 className="text-xl font-semibold text-slate-900 mb-2">Need More Assets?</h2>
                    <p className="text-slate-700 mb-4">
                        For additional brand assets, custom requests, or partnership inquiries, please contact our team.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 font-medium">
                        Contact Us
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </section>
            </div>
        </main>
    );
}
