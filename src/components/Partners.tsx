import Image from "next/image";
import Link from "next/link";

export default function Partners() {
    const partners = [
        { name: "Ether.fi", logo: "/logos/logo-etherfi.png" },
        { name: "Gnosis", logo: "/logos/logo-gnosis.png" },
        { name: "Binance", logo: "/logos/logo-binance.png" },
        { name: "BitPay", logo: "/logos/logo-bitpay.png" },
        { name: "Coinbase", logo: "/logos/logo-coinbase.png" },
        { name: "Crypto.com", logo: "/logos/logo-crypto.png" },
        { name: "Nexo", logo: "/logos/logo-nexo.png" },
        { name: "Revolut", logo: "/logos/logo-revolut.png" },
        { name: "MetaMask", logo: "/logos/metamask.webp" },
        { name: "Bybit", logo: "/logos/bybit.png" },
        { name: "Gemini", logo: "/logos/gemini.png" },
        { name: "KuCoin", logo: "/logos/kucoin.png" },
        { name: "OKX", logo: "/logos/okx.png" },
        { name: "Wirex", logo: "/logos/wirex.png" },
        { name: "Bitrefill", logo: "/logos/bitrefill.webp" },
        { name: "Ledger", logo: "/logos/ledger.png" },
        { name: "RedotPay", logo: "/logos/redotpay.png" },
        { name: "Partner", logo: "/logos/partner-generic.png" },
    ];

    return (
        <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-50" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-[120px] opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-blue-600">Featured Partners</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Current Listed Cards
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Explore crypto cards from leading providers worldwide. All verified and reviewed.
                    </p>
                </div>

                {/* Logo Grid with hover effects */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="group relative h-28 flex items-center justify-center p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Subtle gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative w-28 h-14">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                                    unoptimized
                                />
                            </div>

                            {/* Tooltip */}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-300 pointer-events-none">
                                <div className="px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg whitespace-nowrap shadow-lg">
                                    {partner.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/explore-cards"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        View All Cards
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
