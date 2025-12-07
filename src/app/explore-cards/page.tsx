"use client";

import { useState } from "react";
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
        verificationStatus: "verified"
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
        verificationStatus: "verified"
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
        verificationStatus: "verified"
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

export default function ExploreCardsPage() {
    const [selectedType, setSelectedType] = useState<"all" | "metal" | "plastic">("all");
    const [selectedStaking, setSelectedStaking] = useState<"all" | "required" | "none">("all");
    const [selectedCashback, setSelectedCashback] = useState<"all" | "low" | "medium" | "high">("all");
    const [selectedFee, setSelectedFee] = useState<"all" | "free" | "paid">("all");
    const [selectedProvider, setSelectedProvider] = useState<string>("all");
    const [sortBy, setSortBy] = useState<"rating" | "cashback" | "name">("rating");
    const [compareCards, setCompareCards] = useState<string[]>([]);

    // Toggle compare card selection
    const toggleCompare = (cardId: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (compareCards.includes(cardId)) {
            setCompareCards(compareCards.filter(id => id !== cardId));
        } else if (compareCards.length < 3) {
            setCompareCards([...compareCards, cardId]);
        }
    };

    // Get compared card objects
    const comparedCardObjects = cryptoCards.filter(card => compareCards.includes(card.id));

    // Get unique providers
    const providers = Array.from(new Set(cryptoCards.map(card => card.provider)));

    // Filter cards
    const filteredCards = cryptoCards.filter(card => {
        // Material filter
        if (selectedType !== "all" && card.type !== selectedType) return false;

        // Staking filter
        if (selectedStaking === "required" && !card.stakingRequired) return false;
        if (selectedStaking === "none" && card.stakingRequired) return false;

        // Cashback filter
        const cashbackValue = parseFloat(card.cashback);
        if (selectedCashback === "low" && cashbackValue >= 3) return false;
        if (selectedCashback === "medium" && (cashbackValue < 3 || cashbackValue >= 6)) return false;
        if (selectedCashback === "high" && cashbackValue < 6) return false;

        // Annual fee filter
        if (selectedFee === "free" && card.annualFee !== "$0") return false;
        if (selectedFee === "paid" && card.annualFee === "$0") return false;

        // Provider filter
        if (selectedProvider !== "all" && card.provider !== selectedProvider) return false;

        return true;
    });

    // Sort cards
    const sortedCards = [...filteredCards].sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "cashback") return parseFloat(b.cashback) - parseFloat(a.cashback);
        if (sortBy === "name") return a.name.localeCompare(b.name);
        return 0;
    });

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-slate-50 to-white pt-28 pb-16 px-3 sm:px-5 lg:px-7 border-b border-gray-200">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Explore Crypto Cards
                    </h1>
                    <p className="text-base text-slate-600 max-w-xl mx-auto">
                        Compare and discover the perfect crypto card for your lifestyle. Filter by type, rewards, and features.
                    </p>
                </div>
            </div>

            {/* Filters Section */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-7 py-5">
                    <div className="space-y-3">
                        {/* Row 1: Material, Staking, Cashback */}
                        <div className="flex flex-wrap gap-3 items-center">
                            {/* Material Filter */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-slate-700">Material:</span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setSelectedType("all")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedType === "all"
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            }`}
                                    >
                                        All
                                    </button>
                                    <button
                                        onClick={() => setSelectedType("metal")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedType === "metal"
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            }`}
                                    >
                                        Metal
                                    </button>
                                    <button
                                        onClick={() => setSelectedType("plastic")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedType === "plastic"
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            }`}
                                    >
                                        Plastic
                                    </button>
                                </div>
                            </div>

                            {/* Staking Filter */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-slate-700">Staking:</span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setSelectedStaking("all")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedStaking === "all"
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            }`}
                                    >
                                        All
                                    </button>
                                    <button
                                        onClick={() => setSelectedStaking("required")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedStaking === "required"
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            }`}
                                    >
                                        Required
                                    </button>
                                    <button
                                        onClick={() => setSelectedStaking("none")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedStaking === "none"
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            }`}
                                    >
                                        No Staking
                                    </button>
                                </div>
                            </div>

                            {/* Cashback Filter */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-slate-700">Cashback:</span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setSelectedCashback("all")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedCashback === "all"
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            }`}
                                    >
                                        All
                                    </button>
                                    <button
                                        onClick={() => setSelectedCashback("low")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedCashback === "low"
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            }`}
                                    >
                                        &lt;3%
                                    </button>
                                    <button
                                        onClick={() => setSelectedCashback("medium")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedCashback === "medium"
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            }`}
                                    >
                                        3-6%
                                    </button>
                                    <button
                                        onClick={() => setSelectedCashback("high")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedCashback === "high"
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            }`}
                                    >
                                        6%+
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Annual Fee, Provider, Sort */}
                        <div className="flex flex-wrap gap-4 items-center">
                            {/* Annual Fee Filter */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-slate-700">Annual Fee:</span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setSelectedFee("all")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedFee === "all"
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            }`}
                                    >
                                        All
                                    </button>
                                    <button
                                        onClick={() => setSelectedFee("free")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedFee === "free"
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            }`}
                                    >
                                        Free
                                    </button>
                                    <button
                                        onClick={() => setSelectedFee("paid")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedFee === "paid"
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            }`}
                                    >
                                        Paid
                                    </button>
                                </div>
                            </div>

                            {/* Provider Filter */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-slate-700">Provider:</span>
                                <select
                                    value={selectedProvider}
                                    onChange={(e) => setSelectedProvider(e.target.value)}
                                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border-0 focus:ring-2 focus:ring-slate-900 cursor-pointer"
                                >
                                    <option value="all">All Providers</option>
                                    {providers.map(provider => (
                                        <option key={provider} value={provider}>{provider}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort By */}
                            <div className="flex items-center gap-2 ml-auto">
                                <span className="text-sm font-medium text-slate-700">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as any)}
                                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border-0 focus:ring-2 focus:ring-slate-900 cursor-pointer"
                                >
                                    <option value="rating">Rating</option>
                                    <option value="cashback">Cashback</option>
                                    <option value="name">Name</option>
                                </select>
                            </div>
                        </div>

                        {/* Results Count & Clear Filters */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-slate-600">
                                    Showing {sortedCards.length} of {cryptoCards.length} cards
                                </span>
                                {selectedProvider !== "all" && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                                        <span>Provider: {selectedProvider}</span>
                                        <button
                                            onClick={() => setSelectedProvider("all")}
                                            className="hover:text-blue-900"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </span>
                                )}
                            </div>
                            {(selectedType !== "all" || selectedStaking !== "all" || selectedCashback !== "all" || selectedFee !== "all" || selectedProvider !== "all") && (
                                <button
                                    onClick={() => {
                                        setSelectedType("all");
                                        setSelectedStaking("all");
                                        setSelectedCashback("all");
                                        setSelectedFee("all");
                                        setSelectedProvider("all");
                                    }}
                                    className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    Clear all filters
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Active Filter Banner */}
            {selectedProvider !== "all" && (
                <div className="bg-blue-50 border-y border-blue-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-blue-900">
                                        Filtering by {selectedProvider}
                                    </p>
                                    <p className="text-xs text-blue-700">
                                        Showing {sortedCards.length} card{sortedCards.length !== 1 ? 's' : ''} from this provider
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedProvider("all")}
                                className="px-4 py-2 bg-white text-blue-700 text-sm font-medium rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                            >
                                Show All Cards
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Cards Grid */}
            <div className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-7 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sortedCards.map((card) => (
                        <Link
                            key={card.id}
                            href={`/explore-cards/${card.id}`}
                            className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Card Header - Clean Card Visual */}
                            <div className="relative h-48 bg-slate-100 overflow-hidden">
                                {/* Floating Card Visual */}
                                <div className="absolute inset-4 flex items-center justify-center">
                                    <div className={`relative w-full max-w-[280px] h-[160px] bg-gradient-to-br ${card.color} rounded-xl shadow-xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500`}>
                                        {/* Card Background Pattern */}
                                        <div className="absolute inset-0 opacity-50">
                                            <Image
                                                src={card.image}
                                                alt={card.name}
                                                fill
                                                className="object-cover rounded-xl"
                                            />
                                        </div>

                                        {/* Verification Status Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-2 py-1 text-[10px] font-semibold rounded ${card.verificationStatus === "verified"
                                                ? "bg-emerald-500 text-white"
                                                : card.verificationStatus === "verification-ongoing"
                                                    ? "bg-amber-500 text-white"
                                                    : "bg-slate-500 text-white"
                                                }`}>
                                                {card.verificationStatus === "verified" && "✓ Verified"}
                                                {card.verificationStatus === "verification-ongoing" && "Pending"}
                                                {card.verificationStatus === "unverified" && "Unverified"}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Compare Button - Top Right */}
                                <div className="absolute top-3 right-3 z-10">
                                    <button
                                        onClick={(e) => toggleCompare(card.id, e)}
                                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all shadow-sm ${compareCards.includes(card.id)
                                            ? "bg-blue-600 text-white"
                                            : "bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                                            } ${compareCards.length >= 3 && !compareCards.includes(card.id) ? "opacity-50 cursor-not-allowed" : ""}`}
                                        disabled={compareCards.length >= 3 && !compareCards.includes(card.id)}
                                        title={compareCards.includes(card.id) ? "Remove from compare" : "Add to compare"}
                                    >
                                        {compareCards.includes(card.id) ? (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5">
                                {/* Title Row with Cashback */}
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                {card.name}
                                            </h3>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    setSelectedProvider(card.provider);
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded hover:bg-blue-100 hover:text-blue-700 transition-colors"
                                            >
                                                {card.provider}
                                            </button>
                                        </div>
                                        {/* Rating & Type */}
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1.5">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className={`w-3.5 h-3.5 ${i < Math.floor(card.rating) ? "text-amber-400" : "text-slate-200"}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className="text-xs font-medium text-slate-500">{card.rating}</span>
                                            </div>
                                            <span className="text-slate-300">•</span>
                                            <span className="text-xs text-slate-500 capitalize">{card.type} Card</span>
                                        </div>
                                    </div>
                                    {/* Cashback Badge */}
                                    <div className="text-right ml-3">
                                        <div className="text-2xl font-bold text-emerald-600">{card.cashback}</div>
                                        <div className="text-xs text-slate-500">Cashback</div>
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="bg-slate-50 rounded-lg p-3">
                                        <div className="text-xs text-slate-500 mb-0.5">Annual Fee</div>
                                        <div className="text-sm font-semibold text-slate-900">{card.annualFee}</div>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-3">
                                        <div className="text-xs text-slate-500 mb-0.5">FX Fee</div>
                                        <div className="text-sm font-semibold text-slate-900">{card.fxFee}</div>
                                    </div>
                                </div>

                                {/* Staking Info */}
                                {card.stakingRequired ? (
                                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                                        </svg>
                                        <span>Stake {card.stakingAmount} required</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 text-sm text-emerald-600 mb-4">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>No staking required</span>
                                    </div>
                                )}

                                {/* Features */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {card.features.slice(0, 2).map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                    {card.features.length > 2 && (
                                        <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-500 rounded-md">
                                            +{card.features.length - 2} more
                                        </span>
                                    )}
                                </div>

                                {/* CTA */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                                        View Details
                                    </span>
                                    <svg className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* No Results */}
                {sortedCards.length === 0 && (
                    <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-slate-700 font-medium mb-2">No cards match your filters</p>
                        <p className="text-slate-500 text-sm mb-4">Try adjusting your selection or request a new card listing.</p>
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
                {sortedCards.length > 0 && (
                    <div className="mt-12 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
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

            {/* Floating Comparison Bar */}
            {compareCards.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-2xl z-50 transform transition-transform duration-300">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between gap-4">
                            {/* Selected Cards */}
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-slate-600 hidden sm:block">
                                    Compare ({compareCards.length}/3):
                                </span>
                                <div className="flex gap-2">
                                    {comparedCardObjects.map((card) => (
                                        <div
                                            key={card.id}
                                            className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2"
                                        >
                                            <div className={`w-8 h-5 rounded bg-gradient-to-br ${card.color}`}></div>
                                            <span className="text-sm font-medium text-slate-800 hidden sm:block">{card.name}</span>
                                            <button
                                                onClick={(e) => toggleCompare(card.id, e)}
                                                className="text-slate-400 hover:text-slate-600"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                    {/* Empty slots */}
                                    {[...Array(3 - compareCards.length)].map((_, i) => (
                                        <div
                                            key={`empty-${i}`}
                                            className="w-24 h-9 rounded-lg border-2 border-dashed border-slate-200 hidden sm:flex items-center justify-center"
                                        >
                                            <span className="text-xs text-slate-400">+ Add</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setCompareCards([])}
                                    className="text-sm text-slate-500 hover:text-slate-700"
                                >
                                    Clear
                                </button>
                                <Link
                                    href={`/compare-cards?cards=${compareCards.join(',')}`}
                                    className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${compareCards.length >= 2
                                        ? "bg-blue-600 text-white hover:bg-blue-700"
                                        : "bg-slate-200 text-slate-500 cursor-not-allowed"
                                        }`}
                                    onClick={(e) => compareCards.length < 2 && e.preventDefault()}
                                >
                                    Compare {compareCards.length >= 2 ? `(${compareCards.length})` : '(min 2)'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
