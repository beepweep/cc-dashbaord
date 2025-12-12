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
    network: "Visa" | "Mastercard";
    region: string[];
    baseCashback: string;
    maxCashback: string;
    stakingRequired: boolean;
    stakingAmount?: string;
    issuanceFee: string;
    monthlyFee: string;
    annualFee: string;
    fxFee: string;
    atmFee: string;
    features: string[];
    mobileWallet: boolean;
    loungeAccess: boolean;
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
        network: "Mastercard",
        region: ["Global"],
        baseCashback: "0.5%",
        maxCashback: "2%",
        stakingRequired: false,
        issuanceFee: "$10",
        monthlyFee: "$0",
        annualFee: "$0",
        fxFee: "0%",
        atmFee: "Free up to $200",
        features: ["Rewards Points", "Instant Access", "0.25x KAST Points Boost", "Virtual Card"],
        mobileWallet: true,
        loungeAccess: false,
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
        network: "Mastercard",
        region: ["Global"],
        baseCashback: "1%",
        maxCashback: "5%",
        stakingRequired: true,
        stakingAmount: "$1,000/year",
        issuanceFee: "$0",
        monthlyFee: "$0",
        annualFee: "$1,000/year",
        fxFee: "0%",
        atmFee: "Free up to $1000",
        features: ["Rewards Points", "Instant Access", "0.5x KAST Points Boost", "Premium Metal Card"],
        mobileWallet: true,
        loungeAccess: true,
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
        network: "Mastercard",
        region: ["Global"],
        baseCashback: "2%",
        maxCashback: "5%",
        stakingRequired: true,
        stakingAmount: "$5,000",
        issuanceFee: "$0",
        monthlyFee: "$0",
        annualFee: "$0",
        fxFee: "0%",
        atmFee: "Free unlimited",
        features: ["Rewards Points", "VIP Concierge", "0.5x KAST Points Boost", "No Annual Fee", "Limited Edition"],
        mobileWallet: true,
        loungeAccess: true,
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
        network: "Mastercard",
        region: ["Global"],
        baseCashback: "2%",
        maxCashback: "8%",
        stakingRequired: true,
        stakingAmount: "$10,000/year",
        issuanceFee: "$0",
        monthlyFee: "$0",
        annualFee: "$10,000/year",
        fxFee: "0%",
        atmFee: "Free unlimited",
        features: ["8% Rewards Points", "VIP Concierge", "1x KAST Points Boost", "24K Gold Plated"],
        mobileWallet: true,
        loungeAccess: true,
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
        network: "Mastercard",
        region: ["EU", "UK"],
        baseCashback: "2%",
        maxCashback: "2%",
        stakingRequired: false,
        issuanceFee: "$0",
        monthlyFee: "$0",
        annualFee: "$0",
        fxFee: "0.5%",
        atmFee: "Free up to €200",
        features: ["Crypto Rewards", "Global Acceptance", "Instant Card Issuance", "No Annual Fee"],
        mobileWallet: true,
        loungeAccess: false,
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
        network: "Visa",
        region: ["Global", "US", "EU", "UK", "APAC"],
        baseCashback: "5%",
        maxCashback: "8%",
        stakingRequired: true,
        stakingAmount: "$400,000",
        issuanceFee: "$0",
        monthlyFee: "$0",
        annualFee: "$0",
        fxFee: "0%",
        atmFee: "Free up to $1,000",
        features: ["Airport Lounge Access", "Private Jet Partnership", "Concierge Service", "Netflix & Spotify Rebate"],
        mobileWallet: true,
        loungeAccess: true,
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
        network: "Visa",
        region: ["Global", "US", "EU", "UK", "APAC"],
        baseCashback: "3%",
        maxCashback: "5%",
        stakingRequired: true,
        stakingAmount: "$40,000",
        issuanceFee: "$0",
        monthlyFee: "$0",
        annualFee: "$0",
        fxFee: "0%",
        atmFee: "Free up to $1,000",
        features: ["Airport Lounge Access", "Netflix & Spotify Rebate", "10% Staking Rewards"],
        mobileWallet: true,
        loungeAccess: true,
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
        network: "Visa",
        region: ["Global", "US", "EU", "UK", "APAC"],
        baseCashback: "2%",
        maxCashback: "3%",
        stakingRequired: true,
        stakingAmount: "$4,000",
        issuanceFee: "$0",
        monthlyFee: "$0",
        annualFee: "$0",
        fxFee: "0%",
        atmFee: "Free up to $800",
        features: ["Netflix & Spotify Rebate", "Airport Lounge Access", "Free ATM Withdrawals"],
        mobileWallet: true,
        loungeAccess: true,
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
        network: "Mastercard",
        region: ["EU", "UK"],
        baseCashback: "0.5%",
        maxCashback: "2%",
        stakingRequired: false,
        issuanceFee: "$0",
        monthlyFee: "$0",
        annualFee: "$0",
        fxFee: "0%",
        atmFee: "Free up to €10,000",
        features: ["No Staking Required", "Crypto-backed Credit", "Instant Approval", "Premium Support"],
        mobileWallet: true,
        loungeAccess: false,
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
        network: "Visa",
        region: ["US"],
        baseCashback: "1%",
        maxCashback: "4%",
        stakingRequired: false,
        issuanceFee: "$0",
        monthlyFee: "$0",
        annualFee: "$0",
        fxFee: "2.49%",
        atmFee: "Free at Coinbase ATMs",
        features: ["Choose Your Crypto Rewards", "No Annual Fee", "Google Pay & Apple Pay", "Instant Spending"],
        mobileWallet: true,
        loungeAccess: false,
        rating: 4.2,
        color: "from-blue-500 to-indigo-600",
        verificationStatus: "verification-ongoing"
    }
];

export default function ExploreCardsPage() {
    const [selectedType, setSelectedType] = useState<"all" | "metal" | "plastic">("all");
    const [selectedNetwork, setSelectedNetwork] = useState<"all" | "Visa" | "Mastercard">("all");
    const [selectedRegion, setSelectedRegion] = useState<string>("all");
    const [selectedStaking, setSelectedStaking] = useState<"all" | "required" | "none">("all");
    const [selectedCashback, setSelectedCashback] = useState<"all" | "low" | "medium" | "high">("all");
    const [selectedFee, setSelectedFee] = useState<"all" | "free" | "paid">("all");
    const [showMobileWallet, setShowMobileWallet] = useState(false);
    const [showLoungeAccess, setShowLoungeAccess] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<string>("all");
    const [sortBy, setSortBy] = useState<"rating" | "cashback" | "name">("rating");
    const [compareCards, setCompareCards] = useState<string[]>([]);
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

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

    // Get unique regions
    const regions = Array.from(new Set(cryptoCards.flatMap(card => card.region))).sort();

    // Filter cards
    const filteredCards = cryptoCards.filter(card => {
        // Material filter
        if (selectedType !== "all" && card.type !== selectedType) return false;

        // Network filter
        if (selectedNetwork !== "all" && card.network !== selectedNetwork) return false;

        // Region filter
        if (selectedRegion !== "all" && !card.region.includes(selectedRegion) && !card.region.includes("Global")) return false;

        // Staking filter
        if (selectedStaking === "required" && !card.stakingRequired) return false;
        if (selectedStaking === "none" && card.stakingRequired) return false;

        // Cashback filter (using maxCashback)
        const cashbackValue = parseFloat(card.maxCashback);
        if (selectedCashback === "low" && cashbackValue >= 3) return false;
        if (selectedCashback === "medium" && (cashbackValue < 3 || cashbackValue >= 6)) return false;
        if (selectedCashback === "high" && cashbackValue < 6) return false;

        // Annual fee filter
        if (selectedFee === "free" && card.annualFee !== "$0") return false;
        if (selectedFee === "paid" && card.annualFee === "$0") return false;

        // Feature filters
        if (showMobileWallet && !card.mobileWallet) return false;
        if (showLoungeAccess && !card.loungeAccess) return false;

        // Provider filter
        if (selectedProvider !== "all" && card.provider !== selectedProvider) return false;

        return true;
    });

    // Sort cards
    const sortedCards = [...filteredCards].sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "cashback") return parseFloat(b.maxCashback) - parseFloat(a.maxCashback);
        if (sortBy === "name") return a.name.localeCompare(b.name);
        return 0;
    });

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-slate-50 to-white pt-28 pb-16 px-3 sm:px-5 lg:px-7 border-b border-gray-200">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Find the Perfect Crypto Card
                    </h1>
                    <p className="text-base text-slate-600 max-w-xl mx-auto">
                        Compare fees, rewards, and staking requirements to find the best crypto debit or credit card for your lifestyle.
                    </p>
                </div>
            </div>

            {/* Main Content Area with Sidebar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8 relative">
                    {/* Mobile Filter Overlay */}
                    {isMobileFiltersOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
                            onClick={() => setIsMobileFiltersOpen(false)}
                        />
                    )}

                    {/* Sidebar Filters - Desktop Sticky & Mobile Drawer */}
                    <aside className={`
                        fixed inset-y-0 left-0 z-50 w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-64 lg:shadow-none lg:transform-none lg:bg-transparent h-full lg:h-auto overflow-y-auto lg:overflow-visible
                        ${isMobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'}
                    `}>
                        <div className="p-5 lg:p-0 lg:sticky lg:top-24 space-y-8">
                            <div className="flex items-center justify-between lg:hidden mb-6">
                                <h2 className="text-xl font-bold text-slate-900">Filters</h2>
                                <button
                                    onClick={() => setIsMobileFiltersOpen(false)}
                                    className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex items-center justify-between lg:hidden mb-4">
                                <h2 className="text-lg font-bold text-slate-900">Filters</h2>
                                {(selectedType !== "all" || selectedNetwork !== "all" || selectedRegion !== "all" || selectedStaking !== "all" || selectedCashback !== "all" || selectedFee !== "all" || showMobileWallet || showLoungeAccess || selectedProvider !== "all") && (
                                    <button
                                        onClick={() => {
                                            setSelectedType("all");
                                            setSelectedNetwork("all");
                                            setSelectedRegion("all");
                                            setSelectedStaking("all");
                                            setSelectedCashback("all");
                                            setSelectedFee("all");
                                            setShowMobileWallet(false);
                                            setShowLoungeAccess(false);
                                            setSelectedProvider("all");
                                        }}
                                        className="text-sm text-blue-600 font-medium"
                                    >
                                        Reset
                                    </button>
                                )}
                            </div>

                            {/* Network Filter */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Network</h3>
                                <div className="space-y-2">
                                    {["all", "Visa", "Mastercard"].map((network) => (
                                        <label key={network} className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedNetwork === network ? "border-blue-600 bg-blue-600" : "border-slate-300 group-hover:border-slate-400 bg-white"}`}>
                                                {selectedNetwork === network && <div className="w-2 h-2 rounded-full bg-white" />}
                                            </div>
                                            <input
                                                type="radio"
                                                name="network"
                                                className="hidden"
                                                checked={selectedNetwork === network}
                                                onChange={() => setSelectedNetwork(network as "all" | "Visa" | "Mastercard")}
                                            />
                                            <span className={`text-sm ${selectedNetwork === network ? "text-slate-900 font-medium" : "text-slate-600 group-hover:text-slate-900"}`}>
                                                {network === "all" ? "All Networks" : network}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-slate-200" />

                            {/* Region Filter */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Region</h3>
                                <div className="relative">
                                    <select
                                        value={selectedRegion}
                                        onChange={(e) => setSelectedRegion(e.target.value)}
                                        className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                    >
                                        <option value="all">Global / All Regions</option>
                                        {regions.map(region => (
                                            <option key={region} value={region}>{region}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-slate-200" />

                            {/* Material Filter */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Card Material</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["all", "metal", "plastic"].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setSelectedType(type as "all" | "metal" | "plastic")}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${selectedType === type
                                                ? "bg-slate-900 border-slate-900 text-white"
                                                : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                                                }`}
                                        >
                                            {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-slate-200" />

                            {/* Staking Filter */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Staking</h3>
                                <div className="space-y-2">
                                    {[
                                        { id: "all", label: "All Options" },
                                        { id: "none", label: "No Staking Required" },
                                        { id: "required", label: "Staking Required" }
                                    ].map((option) => (
                                        <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${selectedStaking === option.id ? "bg-blue-600 border-blue-600" : "bg-white border-slate-300 group-hover:border-slate-400"}`}>
                                                {selectedStaking === option.id && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                                            </div>
                                            <input
                                                type="radio"
                                                name="staking"
                                                className="hidden"
                                                checked={selectedStaking === option.id}
                                                onChange={() => setSelectedStaking(option.id as "all" | "required" | "none")}
                                            />
                                            <span className={`text-sm ${selectedStaking === option.id ? "text-slate-900 font-medium" : "text-slate-600 group-hover:text-slate-900"}`}>
                                                {option.label}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-slate-200" />

                            {/* Cashback Filter */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Cashback</h3>
                                <div className="space-y-2">
                                    {[
                                        { id: "all", label: "All" },
                                        { id: "low", label: "<3%" },
                                        { id: "medium", label: "3-6%" },
                                        { id: "high", label: "6%+" }
                                    ].map((option) => (
                                        <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedCashback === option.id ? "border-blue-600 bg-blue-600" : "border-slate-300 group-hover:border-slate-400 bg-white"}`}>
                                                {selectedCashback === option.id && <div className="w-2 h-2 rounded-full bg-white" />}
                                            </div>
                                            <input
                                                type="radio"
                                                name="cashback"
                                                className="hidden"
                                                checked={selectedCashback === option.id}
                                                onChange={() => setSelectedCashback(option.id as "all" | "low" | "medium" | "high")}
                                            />
                                            <span className={`text-sm ${selectedCashback === option.id ? "text-slate-900 font-medium" : "text-slate-600 group-hover:text-slate-900"}`}>
                                                {option.label}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-slate-200" />

                            {/* Fees Filter */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Fees</h3>
                                <div className="space-y-2">
                                    {[
                                        { id: "all", label: "All" },
                                        { id: "free", label: "No Annual Fee" },
                                        { id: "paid", label: "Paid Cards" }
                                    ].map((option) => (
                                        <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedFee === option.id ? "border-blue-600 bg-blue-600" : "border-slate-300 group-hover:border-slate-400 bg-white"}`}>
                                                {selectedFee === option.id && <div className="w-2 h-2 rounded-full bg-white" />}
                                            </div>
                                            <input
                                                type="radio"
                                                name="fee"
                                                className="hidden"
                                                checked={selectedFee === option.id}
                                                onChange={() => setSelectedFee(option.id as "all" | "free" | "paid")}
                                            />
                                            <span className={`text-sm ${selectedFee === option.id ? "text-slate-900 font-medium" : "text-slate-600 group-hover:text-slate-900"}`}>
                                                {option.label}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-slate-200" />

                            {/* Features Filter */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Features</h3>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${showMobileWallet ? "bg-blue-600 border-blue-600" : "bg-white border-slate-300 group-hover:border-slate-400"}`}>
                                            {showMobileWallet && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={showMobileWallet}
                                            onChange={() => setShowMobileWallet(!showMobileWallet)}
                                        />
                                        <span className={`text-sm ${showMobileWallet ? "text-slate-900 font-medium" : "text-slate-600 group-hover:text-slate-900"}`}>
                                            Mobile Wallet
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${showLoungeAccess ? "bg-blue-600 border-blue-600" : "bg-white border-slate-300 group-hover:border-slate-400"}`}>
                                            {showLoungeAccess && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={showLoungeAccess}
                                            onChange={() => setShowLoungeAccess(!showLoungeAccess)}
                                        />
                                        <span className={`text-sm ${showLoungeAccess ? "text-slate-900 font-medium" : "text-slate-600 group-hover:text-slate-900"}`}>
                                            Lounge Access
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <hr className="border-slate-200" />

                            {/* Providers Filter */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Provider</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedProvider === "all" ? "border-blue-600 bg-blue-600" : "border-slate-300 group-hover:border-slate-400 bg-white"}`}>
                                            {selectedProvider === "all" && <div className="w-2 h-2 rounded-full bg-white" />}
                                        </div>
                                        <input
                                            type="radio"
                                            name="provider"
                                            className="hidden"
                                            checked={selectedProvider === "all"}
                                            onChange={() => setSelectedProvider("all")}
                                        />
                                        <span className={`text-sm ${selectedProvider === "all" ? "text-slate-900 font-medium" : "text-slate-600 group-hover:text-slate-900"}`}>
                                            All Providers
                                        </span>
                                    </label>
                                    {providers.map(provider => (
                                        <label key={provider} className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedProvider === provider ? "border-blue-600 bg-blue-600" : "border-slate-300 group-hover:border-slate-400 bg-white"}`}>
                                                {selectedProvider === provider && <div className="w-2 h-2 rounded-full bg-white" />}
                                            </div>
                                            <input
                                                type="radio"
                                                name="provider"
                                                className="hidden"
                                                checked={selectedProvider === provider}
                                                onChange={() => setSelectedProvider(provider)}
                                            />
                                            <span className={`text-sm ${selectedProvider === provider ? "text-slate-900 font-medium" : "text-slate-600 group-hover:text-slate-900"}`}>
                                                {provider}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                        {/* Header: Count & Sort */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setIsMobileFiltersOpen(true)}
                                    className="lg:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                    </svg>
                                </button>
                                <h2 className="text-lg font-bold text-slate-900">
                                    {sortedCards.length} Card{sortedCards.length !== 1 ? 's' : ''} Found
                                </h2>
                                {(selectedType !== "all" || selectedNetwork !== "all" || selectedRegion !== "all" || selectedStaking !== "all" || selectedCashback !== "all" || selectedFee !== "all" || showMobileWallet || showLoungeAccess || selectedProvider !== "all") && (
                                    <button
                                        onClick={() => {
                                            setSelectedType("all");
                                            setSelectedNetwork("all");
                                            setSelectedRegion("all");
                                            setSelectedStaking("all");
                                            setSelectedCashback("all");
                                            setSelectedFee("all");
                                            setShowMobileWallet(false);
                                            setShowLoungeAccess(false);
                                            setSelectedProvider("all");
                                        }}
                                        className="text-sm text-blue-600 hover:text-blue-700 font-medium ml-2 hidden lg:block"
                                    >
                                        Clear Filters
                                    </button>
                                )}
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-slate-700 whitespace-nowrap">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as "rating" | "cashback" | "name")}
                                    className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
                                >
                                    <option value="rating">Top Rated</option>
                                    <option value="cashback">Highest Cashback</option>
                                    <option value="name">Name (A-Z)</option>
                                </select>
                            </div>
                        </div>

                        {/* Active Filters Summary (Mobile/Tablet mainly) */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {selectedNetwork !== "all" && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                                    Network: {selectedNetwork}
                                    <button onClick={() => setSelectedNetwork("all")} className="hover:text-slate-900"><svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg></button>
                                </span>
                            )}
                            {selectedRegion !== "all" && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                                    Region: {selectedRegion}
                                    <button onClick={() => setSelectedRegion("all")} className="hover:text-slate-900"><svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg></button>
                                </span>
                            )}
                            {selectedType !== "all" && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                                    Type: {selectedType}
                                    <button onClick={() => setSelectedType("all")} className="hover:text-slate-900"><svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg></button>
                                </span>
                            )}
                            {selectedStaking !== "all" && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                                    Staking: {selectedStaking === "required" ? "Required" : "None"}
                                    <button onClick={() => setSelectedStaking("all")} className="hover:text-slate-900"><svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg></button>
                                </span>
                            )}
                            {selectedCashback !== "all" && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                                    Cashback: {selectedCashback === "low" ? "<3%" : selectedCashback === "medium" ? "3-6%" : "6%+"}
                                    <button onClick={() => setSelectedCashback("all")} className="hover:text-slate-900"><svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg></button>
                                </span>
                            )}
                            {selectedFee !== "all" && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                                    Annual Fee: {selectedFee === "free" ? "Free" : "Paid"}
                                    <button onClick={() => setSelectedFee("all")} className="hover:text-slate-900"><svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg></button>
                                </span>
                            )}
                            {showMobileWallet && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                                    Mobile Wallet
                                    <button onClick={() => setShowMobileWallet(false)} className="hover:text-slate-900"><svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg></button>
                                </span>
                            )}
                            {showLoungeAccess && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                                    Lounge Access
                                    <button onClick={() => setShowLoungeAccess(false)} className="hover:text-slate-900"><svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg></button>
                                </span>
                            )}
                            {selectedProvider !== "all" && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                                    Provider: {selectedProvider}
                                    <button onClick={() => setSelectedProvider("all")} className="hover:text-slate-900"><svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg></button>
                                </span>
                            )}
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

                                                {/* Network Logo & Type Badge */}
                                                <div className="absolute bottom-4 right-4 flex gap-2">
                                                    <span className="px-2 py-0.5 bg-black/40 backdrop-blur-sm text-white text-[10px] font-medium rounded uppercase">{card.network}</span>
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
                                                    <span className="text-xs text-slate-500 capitalize">{card.type}</span>
                                                </div>
                                            </div>
                                            {/* Cashback Badge */}
                                            <div className="text-right ml-3">
                                                <div className="text-xl font-bold text-emerald-600">{card.maxCashback}</div>
                                                <div className="text-[10px] text-slate-500">Max Cashback</div>
                                            </div>
                                        </div>

                                        {/* Quick Stats */}
                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            <div className="bg-slate-50 rounded-lg p-3">
                                                <div className="text-xs text-slate-500 mb-0.5">Annual / Monthly</div>
                                                <div className="text-sm font-semibold text-slate-900">{card.annualFee} / {card.monthlyFee}</div>
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
                                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Can&apos;t find a card?</h3>
                                    <p className="text-sm text-slate-600">Let us know which card you&apos;d like to see listed on Cardforyou.</p>
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
                </div>
            </div>

            {/* Floating Comparison Bar */}
            {
                compareCards.length > 0 && (
                    <div className="fixed bottom-6 left-0 right-0 mx-auto w-fit bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl z-50 animate-slide-up-y">
                        <div className="px-5 py-3.5">
                            <div className="flex items-center justify-center gap-5">
                                {/* Selected Cards */}
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-medium text-slate-400 hidden sm:block">
                                        Compare:
                                    </span>
                                    <div className="flex gap-2">
                                        {comparedCardObjects.map((card) => (
                                            <div
                                                key={card.id}
                                                className="flex items-center gap-2 bg-slate-800 rounded-xl px-3 py-2 border border-slate-700/50"
                                            >
                                                <div className={`w-7 h-4 rounded bg-gradient-to-br ${card.color}`}></div>
                                                <span className="text-sm font-medium text-white hidden sm:block">{card.name}</span>
                                                <button
                                                    onClick={(e) => toggleCompare(card.id, e)}
                                                    className="text-slate-500 hover:text-white transition-colors ml-1"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        ))}
                                        {/* Empty slots indicator */}
                                        {compareCards.length < 3 && (
                                            <div className="flex items-center gap-1.5 text-slate-500">
                                                {[...Array(3 - compareCards.length)].map((_, i) => (
                                                    <div
                                                        key={`empty-${i}`}
                                                        className="w-2 h-2 rounded-full bg-slate-700"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-px h-8 bg-slate-700 hidden sm:block" />

                                {/* Actions */}
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setCompareCards([])}
                                        className="text-xs text-slate-400 hover:text-white transition-colors"
                                    >
                                        Clear
                                    </button>
                                    <Link
                                        href={`/compare-cards?cards=${compareCards.join(',')}`}
                                        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${compareCards.length >= 2
                                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25"
                                            : "bg-slate-700 text-slate-400 cursor-not-allowed"
                                            }`}
                                        onClick={(e) => compareCards.length < 2 && e.preventDefault()}
                                    >
                                        Compare {compareCards.length >= 2 ? `→` : `(${compareCards.length}/2)`}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </main >
    );
}
