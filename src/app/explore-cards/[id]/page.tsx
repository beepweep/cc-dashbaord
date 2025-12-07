import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CryptoCard {
    id: string;
    name: string;
    provider: string;
    image: string;
    type: "metal" | "plastic";
    cashback: string;
    stakingRequired: boolean;
    stakingAmount?: string;
    annualFee: string;
    fxFee: string;
    features: string[];
    rating: number;
    color: string;
    verificationStatus: "verified" | "verification-ongoing" | "unverified";
    description: string;
    network: string;
    atmLimit: string;
    dailyLimit: string;
    pros: string[];
    cons: string[];
}

const cryptoCards: CryptoCard[] = [
    {
        id: "1",
        name: "K Card",
        provider: "KAST",
        image: "/cards/687e25222224cbfa18ce4933_k-card-core.webp",
        type: "plastic",
        cashback: "2%",
        stakingRequired: false,
        annualFee: "$0",
        fxFee: "0%",
        features: ["Rewards Points", "Instant Access", "0.25x KAST Points Boost", "Virtual Card", "Free to Get"],
        rating: 4.3,
        color: "from-gray-400 to-gray-300",
        verificationStatus: "verified",
        description: "The KAST K Card is the perfect entry point into the KAST ecosystem. Get started for free with instant access to a virtual card, earn 2% rewards points on all purchases, and get 0.25x KAST points boost on your staked SOL. Standard plastic card to get you started.",
        network: "Visa",
        atmLimit: "$300/month free",
        dailyLimit: "$5,000",
        pros: ["Free to get", "Instant virtual card access", "No staking required", "Earn rewards from day one"],
        cons: ["Plastic card only", "Lower points boost", "Basic tier benefits"]
    },
    {
        id: "2",
        name: "X Card",
        provider: "KAST",
        image: "/cards/687e5334d5169f3f67a3a83e_x-card-premium.webp",
        type: "metal",
        cashback: "5%",
        stakingRequired: true,
        stakingAmount: "$1,000/year",
        annualFee: "$1,000/year",
        fxFee: "0%",
        features: ["5% Rewards Points", "Instant Access", "0.5x KAST Points Boost", "Premium Metal Card", "Priority Support"],
        rating: 4.6,
        color: "from-slate-800 to-slate-600",
        verificationStatus: "verified",
        description: "The KAST X Card is the metal card for elevated living. With 5% rewards on all purchases and 0.5x KAST points boost, it's designed for those who want premium benefits. The sleek metal design makes a statement wherever you go.",
        network: "Visa",
        atmLimit: "$1,000/month free",
        dailyLimit: "$15,000",
        pros: ["Premium metal design", "5% rewards", "Higher points boost", "Elevated benefits"],
        cons: ["$1,000/year fee", "Staking required for max benefits"]
    },
    {
        id: "3",
        name: "Founders Edition",
        provider: "KAST",
        image: "/cards/687e201c95962451497c3dcd_card-founders-edition.webp",
        type: "metal",
        cashback: "5%",
        stakingRequired: true,
        stakingAmount: "$5,000",
        annualFee: "$0",
        fxFee: "0%",
        features: ["5% Rewards Points", "VIP Concierge", "0.5x KAST Points Boost", "No Annual Fee Forever", "Limited Edition", "Exclusive Access"],
        rating: 4.8,
        color: "from-slate-900 to-slate-700",
        verificationStatus: "verified",
        description: "The KAST Founders Edition is a strictly-limited metal card for early supporters. One-off payment of $5,000 gets you lifetime benefits with no annual fee forever, VIP concierge access to KAST's senior team, and 0.5x KAST points boost. A true collector's item.",
        network: "Visa",
        atmLimit: "$2,000/month free",
        dailyLimit: "$25,000",
        pros: ["No annual fee forever", "VIP concierge access", "Limited edition collectible", "Lifetime benefits"],
        cons: ["$5,000 one-time payment", "Very limited availability"]
    },
    {
        id: "4",
        name: "Solana Gold Card",
        provider: "KAST",
        image: "/cards/687e57178f4d9881bbe2494f_solana-gold-card.webp",
        type: "metal",
        cashback: "8%",
        stakingRequired: true,
        stakingAmount: "$10,000/year",
        annualFee: "$10,000/year",
        fxFee: "0%",
        features: ["8% Rewards Points", "VIP Concierge", "1x KAST Points Boost", "24K Gold Plated", "Ultimate Flex"],
        rating: 4.9,
        color: "from-yellow-500 to-yellow-300",
        verificationStatus: "verified",
        description: "The KAST Solana Gold Card is the ultimate flex - a 24K gold plated card for those who want the absolute best. With 8% rewards on all purchases and 1x full KAST points boost on staked SOL, this is the pinnacle of crypto card luxury.",
        network: "Visa",
        atmLimit: "Unlimited",
        dailyLimit: "Unlimited",
        pros: ["Highest 8% rewards", "24K gold plated", "Full 1x points boost", "Ultimate status symbol"],
        cons: ["$10,000/year fee", "High commitment level"]
    },
    {
        id: "5",
        name: "Bybit Card",
        provider: "Bybit",
        image: "/cards/BybitCard-2.png",
        type: "plastic",
        cashback: "2%",
        stakingRequired: false,
        annualFee: "$0",
        fxFee: "0%",
        features: ["Crypto Rewards", "Global Acceptance", "Instant Card Issuance", "No Annual Fee"],
        rating: 4.3,
        color: "from-gray-200 to-gray-100",
        verificationStatus: "verification-ongoing",
        description: "The Bybit Card offers a straightforward way to spend your crypto with 2% cashback and no staking requirements. Backed by one of the largest crypto derivatives exchanges, it provides reliable service and global acceptance.",
        network: "Mastercard",
        atmLimit: "$300/month free",
        dailyLimit: "$5,000",
        pros: ["No staking required", "Fast issuance", "Bybit ecosystem", "No annual fee"],
        cons: ["Verification ongoing", "Plastic only", "Basic features"]
    },
    {
        id: "6",
        name: "Obsidian Card",
        provider: "Crypto.com",
        image: "/site-bg-blue.png",
        type: "metal",
        cashback: "8%",
        stakingRequired: true,
        stakingAmount: "$400,000",
        annualFee: "$0",
        fxFee: "0%",
        features: ["Airport Lounge Access", "Private Jet Partnership", "Concierge Service", "Netflix & Spotify Rebate", "Amazon Prime Rebate", "Exclusive Events Access"],
        rating: 4.8,
        color: "from-slate-900 to-slate-700",
        verificationStatus: "verified",
        description: "The Crypto.com Obsidian Card is the ultimate crypto card for high-net-worth individuals. With industry-leading 8% cashback on all purchases and exclusive lifestyle benefits, it represents the pinnacle of crypto card offerings.",
        network: "Visa",
        atmLimit: "Unlimited",
        dailyLimit: "Unlimited",
        pros: ["Highest cashback rate at 8%", "Premium metal design", "No annual fee", "Comprehensive travel benefits"],
        cons: ["Requires $400K CRO stake", "180-day lock-up period"]
    },
    {
        id: "7",
        name: "Icy White Card",
        provider: "Crypto.com",
        image: "/site-bg-final.jpg",
        type: "metal",
        cashback: "5%",
        stakingRequired: true,
        stakingAmount: "$40,000",
        annualFee: "$0",
        fxFee: "0%",
        features: ["Airport Lounge Access", "Netflix & Spotify Rebate", "10% Staking Rewards", "Amazon Prime Rebate"],
        rating: 4.7,
        color: "from-blue-100 to-blue-50",
        verificationStatus: "verified",
        description: "The Icy White Card offers premium benefits at a more accessible staking tier. With 5% cashback, airport lounge access, and multiple subscription rebates, it's perfect for serious crypto enthusiasts.",
        network: "Visa",
        atmLimit: "$1,000/month free",
        dailyLimit: "$25,000",
        pros: ["5% cashback is excellent", "Beautiful frosted design", "Airport lounge access"],
        cons: ["$40K stake required", "180-day lock-up period"]
    },
    {
        id: "8",
        name: "Royal Indigo Card",
        provider: "Crypto.com",
        image: "/hero-bg.jpg",
        type: "metal",
        cashback: "3%",
        stakingRequired: true,
        stakingAmount: "$4,000",
        annualFee: "$0",
        fxFee: "0%",
        features: ["Netflix & Spotify Rebate", "Airport Lounge Access", "Free ATM Withdrawals"],
        rating: 4.6,
        color: "from-indigo-600 to-purple-600",
        verificationStatus: "verified",
        description: "The Royal Indigo Card is the sweet spot for most crypto users. It offers a solid 3% cashback, streaming rebates, and lounge access at a reasonable staking requirement.",
        network: "Visa",
        atmLimit: "$800/month free",
        dailyLimit: "$15,000",
        pros: ["Good balance of benefits vs stake", "Metal card", "Lounge access included"],
        cons: ["Lower cashback than higher tiers", "Stake required"]
    },
    {
        id: "9",
        name: "Nexo Card",
        provider: "Nexo",
        image: "/site-bg-blue.png",
        type: "metal",
        cashback: "2%",
        stakingRequired: false,
        annualFee: "$0",
        fxFee: "0%",
        features: ["No Staking Required", "Crypto-backed Credit", "Instant Approval", "Premium Support"],
        rating: 4.5,
        color: "from-blue-600 to-blue-800",
        verificationStatus: "verified",
        description: "The Nexo Card stands out by offering crypto-backed credit without requiring any staking. Simply use your crypto as collateral and spend without selling.",
        network: "Mastercard",
        atmLimit: "$500/month free",
        dailyLimit: "$10,000",
        pros: ["No staking requirement", "Crypto-backed credit line", "Instant approval"],
        cons: ["Lower base cashback", "Interest on credit line"]
    },
    {
        id: "10",
        name: "Coinbase Card",
        provider: "Coinbase",
        image: "/site-bg-final.jpg",
        type: "plastic",
        cashback: "4%",
        stakingRequired: false,
        annualFee: "$0",
        fxFee: "2.49%",
        features: ["Choose Your Crypto Rewards", "No Annual Fee", "Google Pay & Apple Pay", "Instant Spending"],
        rating: 4.2,
        color: "from-blue-500 to-indigo-600",
        verificationStatus: "verification-ongoing",
        description: "The Coinbase Card lets you spend any crypto and choose which crypto you want as rewards. Backed by one of the most trusted names in crypto.",
        network: "Visa",
        atmLimit: "$500/month free",
        dailyLimit: "$7,500",
        pros: ["Choose your reward crypto", "Spend any crypto", "Trusted platform"],
        cons: ["FX fees apply", "Plastic only"]
    }
];

// Required for static export - generates all possible card IDs at build time
export async function generateStaticParams() {
    return cryptoCards.map((card) => ({
        id: card.id,
    }));
}

export default async function CardDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const card = cryptoCards.find(c => c.id === id);

    if (!card) {
        notFound();
    }

    const similarCards = cryptoCards.filter(c => c.id !== id && c.provider === card.provider).slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                    <div className="absolute inset-0 opacity-10">
                        <Image
                            src={card.image}
                            alt={card.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Card Image - Clean Design */}
                        <div className={`relative w-80 h-48 lg:w-96 lg:h-60 bg-gradient-to-br ${card.color} rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500`}>
                            {/* Card Background */}
                            <Image
                                src={card.image}
                                alt={card.name}
                                fill
                                className="object-cover opacity-50"
                            />

                            {/* Verification Status Badge */}
                            <div className="absolute top-4 right-4">
                                <span className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${card.verificationStatus === "verified"
                                    ? "bg-emerald-500 text-white"
                                    : card.verificationStatus === "verification-ongoing"
                                        ? "bg-amber-500 text-white"
                                        : "bg-slate-500 text-white"
                                    }`}>
                                    {card.verificationStatus === "verified" && "✓ Verified"}
                                    {card.verificationStatus === "verification-ongoing" && "⏳ Pending"}
                                    {card.verificationStatus === "unverified" && "Unverified"}
                                </span>
                            </div>
                        </div>

                        {/* Card Info */}
                        <div className="text-center lg:text-left flex-1">
                            {/* Badges */}
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                                <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30 capitalize">
                                    {card.type} Card
                                </span>
                                <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30">
                                    {card.network}
                                </span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2">
                                {card.name}
                            </h1>
                            <p className="text-xl text-white/80 mb-6">
                                by {card.provider}
                            </p>

                            {/* Cashback Highlight */}
                            <div className="inline-flex items-center gap-3 bg-emerald-500/20 border border-emerald-400/30 rounded-2xl px-6 py-4 mb-6">
                                <div className="text-4xl font-bold text-emerald-400">{card.cashback}</div>
                                <div className="text-left">
                                    <div className="text-white font-medium">Cashback</div>
                                    <div className="text-white/60 text-sm">on all purchases</div>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2 justify-center lg:justify-start mb-8">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`w-6 h-6 ${i < Math.floor(card.rating) ? 'text-yellow-400' : 'text-white/30'}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-xl font-semibold text-white">{card.rating}</span>
                            </div>

                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <a href="#" className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-white/90 hover:scale-105 transition-all shadow-lg">
                                    Apply Now
                                </a>
                                <Link href="/compare-cards" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all">
                                    Compare Cards
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Description */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Card</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>

                            {/* Features */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {card.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="font-medium text-slate-900">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pros & Cons */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</span>
                                        Pros
                                    </h3>
                                    <ul className="space-y-3">
                                        {card.pros.map((pro, index) => (
                                            <li key={index} className="flex items-start gap-3 text-slate-600">
                                                <span className="text-green-500 mt-1">•</span>
                                                {pro}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">✗</span>
                                        Cons
                                    </h3>
                                    <ul className="space-y-3">
                                        {card.cons.map((con, index) => (
                                            <li key={index} className="flex items-start gap-3 text-slate-600">
                                                <span className="text-red-500 mt-1">•</span>
                                                {con}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Quick Stats */}
                            <div className="bg-slate-50 rounded-3xl p-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Stats</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-slate-200">
                                        <span className="text-slate-600">Cashback</span>
                                        <span className="text-2xl font-bold text-blue-600">{card.cashback}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-slate-200">
                                        <span className="text-slate-600">Annual Fee</span>
                                        <span className="font-semibold text-slate-900">{card.annualFee}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-slate-200">
                                        <span className="text-slate-600">FX Fee</span>
                                        <span className="font-semibold text-slate-900">{card.fxFee}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-slate-200">
                                        <span className="text-slate-600">Staking Required</span>
                                        <span className="font-semibold text-slate-900">{card.stakingRequired ? card.stakingAmount : "None"}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-slate-200">
                                        <span className="text-slate-600">ATM Limit</span>
                                        <span className="font-semibold text-slate-900">{card.atmLimit}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-slate-600">Daily Limit</span>
                                        <span className="font-semibold text-slate-900">{card.dailyLimit}</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className={`rounded-3xl p-8 bg-gradient-to-br ${card.color}`}>
                                <h3 className="text-xl font-bold text-white mb-4">Ready to Apply?</h3>
                                <p className="text-white/80 mb-6">Get started with {card.name} today and start earning {card.cashback} cashback on all purchases.</p>
                                <a href="#" className="block w-full py-4 bg-white text-slate-900 font-semibold rounded-full text-center hover:bg-white/90 transition-all hover:scale-105">
                                    Apply Now →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Similar Cards */}
            {
                similarCards.length > 0 && (
                    <section className="py-20 bg-slate-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Other Cards from {card.provider}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {similarCards.map((similarCard) => (
                                    <Link key={similarCard.id} href={`/explore-cards/${similarCard.id}`} className="group">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                            <div className={`relative h-40 bg-gradient-to-br ${similarCard.color}`}>
                                                <Image
                                                    src={similarCard.image}
                                                    alt={similarCard.name}
                                                    fill
                                                    className="object-cover opacity-30"
                                                />
                                                <div className="absolute bottom-4 left-4 text-white">
                                                    <div className="text-2xl font-bold">{similarCard.cashback}</div>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{similarCard.name}</h3>
                                                <p className="text-slate-600">{similarCard.provider}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            }
        </main >
    );
}
