"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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
    featured?: boolean;
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
        features: ["Rewards Points", "Instant Access", "0.25x KAST Points Boost", "Virtual Card"],
        rating: 4.3,
        color: "from-gray-400 to-gray-300",
        verificationStatus: "verified"
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
        features: ["Rewards Points", "Instant Access", "0.5x KAST Points Boost", "Premium Metal Card"],
        rating: 4.6,
        color: "from-slate-800 to-slate-600",
        verificationStatus: "verified",
        featured: true
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
        features: ["Rewards Points", "VIP Concierge", "0.5x KAST Points Boost", "No Annual Fee", "Limited Edition"],
        rating: 4.8,
        color: "from-slate-900 to-slate-700",
        verificationStatus: "verified",
        featured: true
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
        features: ["8% Rewards Points", "VIP Concierge", "1x KAST Points Boost", "24K Gold Plated"],
        rating: 4.9,
        color: "from-yellow-500 to-yellow-300",
        verificationStatus: "verified",
        featured: true
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
        verificationStatus: "verification-ongoing"
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
        features: ["Airport Lounge Access", "Private Jet Partnership", "Concierge Service", "Netflix & Spotify Rebate"],
        rating: 4.8,
        color: "from-slate-900 to-slate-700",
        verificationStatus: "verified"
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
        features: ["Airport Lounge Access", "Netflix & Spotify Rebate", "10% Staking Rewards"],
        rating: 4.7,
        color: "from-blue-100 to-blue-50",
        verificationStatus: "verified"
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
        verificationStatus: "verified"
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
        verificationStatus: "verified"
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
        verificationStatus: "verification-ongoing"
    }
];

function CompareCardsContent() {
    const searchParams = useSearchParams();
    const [selectedCards, setSelectedCards] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [showAllCards, setShowAllCards] = useState(false);

    // Load cards from URL on mount
    useEffect(() => {
        const cardsParam = searchParams.get('cards');
        if (cardsParam) {
            const cardIds = cardsParam.split(',').filter((id: string) =>
                cryptoCards.some(card => card.id === id)
            ).slice(0, 3);
            if (cardIds.length > 0) {
                setSelectedCards(cardIds);
            }
        }
    }, [searchParams]);

    // Filter cards based on search
    const filteredCards = useMemo(() => {
        if (!searchQuery) return cryptoCards;
        const query = searchQuery.toLowerCase();
        return cryptoCards.filter(card =>
            card.name.toLowerCase().includes(query) ||
            card.provider.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    // Get featured cards
    const featuredCards = cryptoCards.filter(card => card.featured);

    // Cards to display in selection grid
    const displayCards = showAllCards ? filteredCards : filteredCards.slice(0, 10);

    const toggleCard = (cardId: string) => {
        if (selectedCards.includes(cardId)) {
            setSelectedCards(selectedCards.filter(id => id !== cardId));
        } else if (selectedCards.length < 3) {
            setSelectedCards([...selectedCards, cardId]);
        }
    };

    const comparisonCards = cryptoCards.filter(card => selectedCards.includes(card.id));

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-slate-50 to-white pt-28 pb-16 px-3 sm:px-5 lg:px-7 border-b border-gray-200">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Compare Crypto Cards
                    </h1>
                    <p className="text-base text-slate-600 max-w-xl mx-auto">
                        Select up to 3 cards to compare their features, fees, and rewards side by side.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-7 py-10">
                {/* Selected Cards Preview */}
                {selectedCards.length > 0 && (
                    <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-slate-200">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-slate-900">
                                Selected for Comparison ({selectedCards.length}/3)
                            </h3>
                            <button
                                onClick={() => setSelectedCards([])}
                                className="text-sm text-slate-500 hover:text-slate-700"
                            >
                                Clear all
                            </button>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            {comparisonCards.map((card) => (
                                <div key={card.id} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-2">
                                    <div className={`w-12 h-8 bg-gradient-to-br ${card.color} rounded-lg`}></div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-900">{card.name}</p>
                                        <p className="text-xs text-slate-500">{card.provider}</p>
                                    </div>
                                    <button
                                        onClick={() => toggleCard(card.id)}
                                        className="ml-2 text-slate-400 hover:text-slate-600"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Featured Cards Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">Featured</span>
                        <h2 className="text-xl font-bold text-slate-900">Popular Cards</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {featuredCards.map((card) => (
                            <button
                                key={card.id}
                                onClick={() => toggleCard(card.id)}
                                disabled={!selectedCards.includes(card.id) && selectedCards.length >= 3}
                                className={`relative p-5 rounded-2xl border-2 transition-all text-left ${selectedCards.includes(card.id)
                                    ? "border-blue-600 bg-blue-50 shadow-lg"
                                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                                    } ${!selectedCards.includes(card.id) && selectedCards.length >= 3 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-20 h-12 rounded-lg relative overflow-hidden bg-slate-100">
                                        <Image src={card.image} alt={card.name} fill className="object-contain" />
                                    </div>
                                    {selectedCards.includes(card.id) && (
                                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <p className="font-semibold text-slate-900 mb-1">{card.name}</p>
                                <p className="text-sm text-slate-500 mb-3">{card.provider}</p>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="font-bold text-blue-600">{card.cashback} cashback</span>
                                    <span className="text-slate-400">•</span>
                                    <span className="text-slate-600">{card.annualFee} fee</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* All Cards Section with Search */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <h2 className="text-xl font-bold text-slate-900">All Cards</h2>

                        {/* Search Input */}
                        <div className="relative max-w-md w-full">
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search cards by name or provider..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Search results count */}
                    {searchQuery && (
                        <p className="text-sm text-slate-500 mb-4">
                            Found {filteredCards.length} card{filteredCards.length !== 1 ? 's' : ''} matching "{searchQuery}"
                        </p>
                    )}

                    {/* Cards Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {displayCards.map((card) => (
                            <button
                                key={card.id}
                                onClick={() => toggleCard(card.id)}
                                disabled={!selectedCards.includes(card.id) && selectedCards.length >= 3}
                                className={`relative p-4 rounded-xl border-2 transition-all text-left ${selectedCards.includes(card.id)
                                    ? "border-blue-600 bg-blue-50"
                                    : "border-slate-200 bg-white hover:border-slate-300"
                                    } ${!selectedCards.includes(card.id) && selectedCards.length >= 3 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                            >
                                <div className="w-full aspect-[1.6/1] rounded-lg mb-3 relative overflow-hidden bg-slate-100">
                                    <Image src={card.image} alt={card.name} fill className="object-contain p-1" />
                                </div>
                                <p className="text-sm font-semibold text-slate-900 truncate">{card.name}</p>
                                <p className="text-xs text-slate-500">{card.provider}</p>
                                <p className="text-xs font-medium text-blue-600 mt-1">{card.cashback}</p>
                                {selectedCards.includes(card.id) && (
                                    <div className="absolute top-2 right-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Show More Button */}
                    {!showAllCards && filteredCards.length > 10 && (
                        <div className="text-center mt-6">
                            <button
                                onClick={() => setShowAllCards(true)}
                                className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                Show all {filteredCards.length} cards
                            </button>
                        </div>
                    )}

                    {/* No Results */}
                    {filteredCards.length === 0 && (
                        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
                            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <p className="text-slate-700 font-medium mb-2">No cards found matching "{searchQuery}"</p>
                            <p className="text-slate-500 text-sm mb-4">Can't find the card you're looking for?</p>
                            <Link
                                href="/request-card"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Request a Card Listing
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    )}

                    {/* Can't find your card? CTA */}
                    {filteredCards.length > 0 && (
                        <div className="mt-8 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-1">Can't find a card?</h3>
                                <p className="text-sm text-slate-600">Let us know which card you'd like to see listed on Cardforyou.</p>
                            </div>
                            <Link
                                href="/request-card"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap"
                            >
                                Request a Listing
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Comparison Table */}
                {comparisonCards.length > 0 && (
                    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-slate-200 bg-slate-50">
                            <h2 className="text-xl font-bold text-slate-900">Comparison</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 sticky left-0 bg-slate-50 z-10 min-w-[140px]">
                                            Feature
                                        </th>
                                        {comparisonCards.map((card) => (
                                            <th key={card.id} className="px-6 py-4 text-center min-w-[220px]">
                                                <div className={`w-full h-28 bg-gradient-to-br ${card.color} rounded-xl mb-3 relative overflow-hidden`}>
                                                    <Image src={card.image} alt={card.name} fill className="object-cover opacity-30" />
                                                    <div className="absolute bottom-3 left-3 text-white">
                                                        <p className="text-lg font-bold">{card.cashback}</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm font-semibold text-slate-900">{card.name}</p>
                                                <p className="text-xs text-slate-500">{card.provider}</p>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white">Cashback</td>
                                        {comparisonCards.map((card) => (
                                            <td key={card.id} className="px-6 py-4 text-center">
                                                <span className="text-xl font-bold text-blue-600">{card.cashback}</span>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white">Material</td>
                                        {comparisonCards.map((card) => (
                                            <td key={card.id} className="px-6 py-4 text-center">
                                                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg capitalize">{card.type}</span>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white">Annual Fee</td>
                                        {comparisonCards.map((card) => (
                                            <td key={card.id} className="px-6 py-4 text-center text-sm font-medium text-slate-900">{card.annualFee}</td>
                                        ))}
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white">FX Fee</td>
                                        {comparisonCards.map((card) => (
                                            <td key={card.id} className="px-6 py-4 text-center text-sm text-slate-900">{card.fxFee}</td>
                                        ))}
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white">Staking</td>
                                        {comparisonCards.map((card) => (
                                            <td key={card.id} className="px-6 py-4 text-center">
                                                {card.stakingRequired ? (
                                                    <div>
                                                        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-lg">Required</span>
                                                        <p className="text-xs text-slate-500 mt-1">{card.stakingAmount}</p>
                                                    </div>
                                                ) : (
                                                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-lg">Not Required</span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white">Rating</td>
                                        {comparisonCards.map((card) => (
                                            <td key={card.id} className="px-6 py-4 text-center">
                                                <div className="flex items-center justify-center gap-1">
                                                    <span className="font-semibold text-slate-900">{card.rating}</span>
                                                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white">Status</td>
                                        {comparisonCards.map((card) => (
                                            <td key={card.id} className="px-6 py-4 text-center">
                                                <span className={`px-3 py-1 text-xs font-medium rounded-lg ${card.verificationStatus === "verified"
                                                    ? "bg-emerald-100 text-emerald-700"
                                                    : card.verificationStatus === "verification-ongoing"
                                                        ? "bg-amber-100 text-amber-700"
                                                        : "bg-slate-100 text-slate-600"
                                                    }`}>
                                                    {card.verificationStatus === "verified" && "Verified"}
                                                    {card.verificationStatus === "verification-ongoing" && "Pending"}
                                                    {card.verificationStatus === "unverified" && "Unverified"}
                                                </span>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white">Features</td>
                                        {comparisonCards.map((card) => (
                                            <td key={card.id} className="px-6 py-4">
                                                <ul className="text-xs text-slate-600 space-y-1.5">
                                                    {card.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                                {/* Action Row */}
                                <tfoot>
                                    <tr className="bg-slate-50">
                                        <td className="px-6 py-4 sticky left-0 bg-slate-50"></td>
                                        {comparisonCards.map((card) => (
                                            <td key={card.id} className="px-6 py-4 text-center">
                                                <Link
                                                    href={`/explore-cards/${card.id}`}
                                                    className="inline-block px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
                                                >
                                                    View {card.name}
                                                </Link>
                                            </td>
                                        ))}
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {comparisonCards.length === 0 && (
                    <div className="bg-white rounded-2xl border border-slate-200 text-center py-16 px-8">
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                            Select cards to compare
                        </h3>
                        <p className="text-slate-500 max-w-md mx-auto">
                            Choose up to 3 cards from the selection above to see a detailed side-by-side comparison of their features, fees, and rewards.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}

export default function CompareCardsPage() {
    return (
        <Suspense fallback={
            <main className="min-h-screen bg-white">
                <div className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Compare Crypto Cards
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Loading...
                        </p>
                    </div>
                </div>
            </main>
        }>
            <CompareCardsContent />
        </Suspense>
    );
}
