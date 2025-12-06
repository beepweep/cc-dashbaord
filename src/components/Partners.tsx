import Image from "next/image";

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
        <section className="bg-gray-50 py-20 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">Partners</h2>
                    <p className="text-sm text-slate-600">Trusted by leading entities in the crypto space.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-gray-200">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="relative h-24 flex items-center justify-center p-4 border-r border-b border-gray-200 bg-white"
                        >
                            <div className="relative w-24 h-12">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
