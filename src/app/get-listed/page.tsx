"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function GetListedPage() {
    const [formData, setFormData] = useState<any>({});
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
    const [userCaptcha, setUserCaptcha] = useState("");

    React.useEffect(() => {
        setCaptcha({
            num1: Math.floor(Math.random() * 10),
            num2: Math.floor(Math.random() * 10)
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (parseInt(userCaptcha) !== captcha.num1 + captcha.num2) {
            alert("Incorrect captcha. Please try again.");
            return;
        }
        alert("Form submitted! (This is a mock)");
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-gray-50 text-slate-900">
            <div className="relative overflow-hidden bg-white py-20 sm:py-24 border-b border-gray-200">
                {/* Background effects - subtle light theme */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-gray-50"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Get Your Card Listed
                    </h1>
                    <p className="mt-4 text-base leading-7 text-slate-600 max-w-2xl mx-auto">
                        Join the leading crypto card comparison platform. Submit your details below to reach thousands of potential users.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-12">

                    {/* Section 1: Contact Info */}
                    <div className="border-b border-gray-200 pb-12">
                        <h2 className="text-xl font-semibold leading-7 text-slate-900">Contact Information</h2>
                        <p className="mt-1 text-sm leading-6 text-slate-600">How can we reach you regarding this application?</p>

                        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium leading-6 text-slate-900">Contact Name</label>
                                <div className="mt-2">
                                    <input type="text" name="contactName" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900">Email</label>
                                <div className="mt-2">
                                    <input type="email" name="email" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900">Telegram Username</label>
                                <div className="mt-2 relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">@</span>
                                    <input type="text" name="telegram" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 pl-7 pr-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="username" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Basic Card Details */}
                    <div className="border-b border-gray-200 pb-12">
                        <h2 className="text-xl font-semibold leading-7 text-slate-900">Basic Card Details</h2>
                        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900">Card Name *</label>
                                <div className="mt-2">
                                    <input type="text" name="cardName" required onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900">Issuer/Provider</label>
                                <div className="mt-2">
                                    <input type="text" name="issuer" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium leading-6 text-slate-900">Website URL</label>
                                <div className="mt-2">
                                    <input type="url" name="website" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="https://" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900">Launch Date</label>
                                <div className="mt-2">
                                    <input type="date" name="launchDate" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900">Region</label>
                                <div className="mt-2">
                                    <input type="text" name="region" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="e.g. Global, EEA, US" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium leading-6 text-slate-900">Supported Regions (List)</label>
                                <div className="mt-2">
                                    <textarea name="supportedRegions" rows={3} onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="List countries or regions..." />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium leading-6 text-slate-900">Excluded Countries (List)</label>
                                <div className="mt-2">
                                    <textarea name="excludedCountries" rows={2} onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium leading-6 text-slate-900">Image URL (Logo/Card Art)</label>
                                <div className="mt-2">
                                    <input type="url" name="image" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="https://" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Card Specs */}
                    <div className="border-b border-gray-200 pb-12">
                        <h2 className="text-xl font-semibold leading-7 text-slate-900">Card Specifications</h2>
                        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900">Payment Network</label>
                                <div className="mt-2">
                                    <select name="network" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
                                        <option value="">Select...</option>
                                        <option value="Visa">Visa</option>
                                        <option value="Mastercard">Mastercard</option>
                                        <option value="UnionPay">UnionPay</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900">Card Type</label>
                                <div className="mt-2">
                                    <select name="type" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
                                        <option value="">Select...</option>
                                        <option value="Debit">Debit</option>
                                        <option value="Credit">Credit</option>
                                        <option value="Prepaid">Prepaid</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900">Material</label>
                                <div className="mt-2">
                                    <select name="material" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
                                        <option value="">Select...</option>
                                        <option value="Plastic">Plastic</option>
                                        <option value="Metal">Metal</option>
                                        <option value="Virtual">Virtual Only</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900">Base Currency</label>
                                <div className="mt-2">
                                    <input type="text" name="baseCurrency" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="e.g. USD, EUR, GBP" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900">Status</label>
                                <div className="mt-2">
                                    <select name="status" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
                                        <option value="Active">Active</option>
                                        <option value="Waitlist">Waitlist</option>
                                        <option value="Beta">Beta</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Fees and Limits */}
                    <div className="border-b border-gray-200 pb-12">
                        <h2 className="text-xl font-semibold leading-7 text-slate-900">Fees & Limits</h2>
                        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-3">
                            {/* Standard Fees */}
                            <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-700">Issuance Fee</label><input type="text" name="issuanceFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-700">Monthly/Annual Fee</label><input type="text" name="monthlyFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-700">FX Fee (%)</label><input type="text" name="fxFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-700">ATM Withdrawal Fee</label><input type="text" name="atmFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-700">Top-Up Fee</label><input type="text" name="topUpFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-700">Inactivity Fee</label><input type="text" name="inactivityFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-700">Replacement Fee</label><input type="text" name="replacementFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-700">Custody Fee</label><input type="text" name="custodyFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-700">Liquidation Fee</label><input type="text" name="liquidationFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            {/* Limits */}
                            <div className="sm:col-span-3 border-t border-gray-200 pt-4 mt-2"><h4 className="text-sm font-medium text-slate-900 mb-2">Limits</h4></div>

                            <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-700">Free ATM Limit</label><input type="text" name="freeAtmLimit" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-700">Daily Spending Limit</label><input type="text" name="dailyLimit" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-700">Monthly Spending Limit</label><input type="text" name="monthlyLimit" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-700">Min Balance</label><input type="text" name="minBalance" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-700">Top-Up Limits</label><input type="text" name="topUpLimits" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                        </div>
                    </div>

                    {/* Section 5: Rewards & Staking */}
                    <div className="border-b border-gray-200 pb-12">
                        <h2 className="text-xl font-semibold leading-7 text-slate-900">Rewards & Staking</h2>
                        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                            <div><label className="block text-sm font-medium text-slate-900">Base Cashback Rate (%)</label><input type="text" name="baseCashback" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div><label className="block text-sm font-medium text-slate-900">Max Cashback Rate (%)</label><input type="text" name="maxCashback" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div><label className="block text-sm font-medium text-slate-900">Reward Currency</label><input type="text" name="rewardCurrency" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" placeholder="e.g. BTC, CRO, Points" /></div>
                            <div><label className="block text-sm font-medium text-slate-900">Monthly Reward Cap</label><input type="text" name="rewardCap" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div className="sm:col-span-2"><label className="block text-sm font-medium text-slate-900">Boost / Special Categories</label><input type="text" name="boost" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-2"><label className="block text-sm font-medium text-slate-900">Merchant Rebates (e.g. Spotify, Netflix)</label><input type="text" name="rebates" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-2"><label className="block text-sm font-medium text-slate-900">Staking Yield (APY)</label><input type="text" name="stakingYield" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-2"><label className="block text-sm font-medium text-slate-900">Welcome Bonus</label><input type="text" name="welcomeBonus" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div><label className="block text-sm font-medium text-slate-900">Referral Bonus</label><input type="text" name="referralBonus" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div><label className="block text-sm font-medium text-slate-900">Referral T&C</label><input type="text" name="referralTc" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div className="sm:col-span-2"><label className="block text-sm font-medium text-slate-900">Additional Points Info</label><textarea name="additionalPoints" rows={2} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                        </div>
                    </div>

                    {/* Section 6: Requirements */}
                    <div className="border-b border-gray-200 pb-12">
                        <h2 className="text-xl font-semibold leading-7 text-slate-900">Requirements</h2>
                        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                            <div><label className="block text-sm font-medium text-slate-900">Required Token</label><input type="text" name="requiredToken" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div><label className="block text-sm font-medium text-slate-900">Fiat Value Requirement</label><input type="text" name="fiatReq" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div><label className="block text-sm font-medium text-slate-900">Lock-Up Period</label><input type="text" name="lockup" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div><label className="block text-sm font-medium text-slate-900">Tier Downgrade Penalty</label><input type="text" name="downgradePenalty" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div className="sm:col-span-2"><label className="block text-sm font-medium text-slate-900">Supported Spend Assets (List)</label><textarea name="spendAssets" rows={2} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-2"><label className="block text-sm font-medium text-slate-900">Funding Methods</label><textarea name="fundingMethods" rows={2} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                        </div>
                    </div>

                    {/* Section 7: Features & Benefits */}
                    <div className="border-b border-gray-200 pb-12">
                        <h2 className="text-xl font-semibold leading-7 text-slate-900">Features & Benefits</h2>
                        <div className="mt-8 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-2"><input type="checkbox" name="appleGooglePay" onChange={handleChange} className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" /><label className="text-sm text-slate-700">Mobile Wallet Support (Apple/Google Pay)</label></div>
                                <div className="flex items-center gap-2"><input type="checkbox" name="virtualCard" onChange={handleChange} className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" /><label className="text-sm text-slate-700">Virtual Card Availability</label></div>
                                <div className="flex items-center gap-2"><input type="checkbox" name="multiVirtual" onChange={handleChange} className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" /><label className="text-sm text-slate-700">Multiple Virtual Cards</label></div>
                                <div className="flex items-center gap-2"><input type="checkbox" name="virtualBank" onChange={handleChange} className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" /><label className="text-sm text-slate-700">Virtual Bank Account</label></div>
                                <div className="flex items-center gap-2"><input type="checkbox" name="esim" onChange={handleChange} className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" /><label className="text-sm text-slate-700">eSIM</label></div>
                                <div className="flex items-center gap-2"><input type="checkbox" name="lounge" onChange={handleChange} className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" /><label className="text-sm text-slate-700">Global Lounge Access</label></div>
                                <div className="flex items-center gap-2"><input type="checkbox" name="concierge" onChange={handleChange} className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" /><label className="text-sm text-slate-700">Concierge Service</label></div>
                                <div className="flex items-center gap-2"><input type="checkbox" name="guests" onChange={handleChange} className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" /><label className="text-sm text-slate-700">Guest Allowances</label></div>
                                <div className="flex items-center gap-2"><input type="checkbox" name="privateJet" onChange={handleChange} className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" /><label className="text-sm text-slate-700">Private Jet Partnership</label></div>
                                <div className="flex items-center gap-2"><input type="checkbox" name="golf" onChange={handleChange} className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" /><label className="text-sm text-slate-700">Golf Access</label></div>
                            </div>

                            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div><label className="block text-sm font-medium text-slate-900">Exclusive Merch</label><input type="text" name="merch" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                                <div><label className="block text-sm font-medium text-slate-900">Exclusive Club</label><input type="text" name="club" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                                <div className="sm:col-span-2"><label className="block text-sm font-medium text-slate-900">Additional Features</label><textarea name="additionalFeatures" rows={3} onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            </div>
                        </div>
                    </div>

                    {/* Section 8: Legal */}
                    <div className="border-b border-gray-200 pb-12">
                        <h2 className="text-xl font-semibold leading-7 text-slate-900">Links & Legal</h2>
                        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                            <div><label className="block text-sm font-medium text-slate-900">Application Link / CTA</label><input type="url" name="applyLink" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div><label className="block text-sm font-medium text-slate-900">Terms & Conditions Link</label><input type="url" name="tcLink" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                        </div>
                    </div>


                    {/* Captcha Section */}
                    <div className="border-t border-gray-200 pt-8">
                        <div className="flex items-center gap-4">
                            <label className="text-sm font-medium text-slate-900">
                                Security Check: What is {captcha.num1} + {captcha.num2}?
                            </label>
                            <input
                                type="number"
                                name="userCaptcha"
                                required
                                value={userCaptcha}
                                onChange={(e) => setUserCaptcha(e.target.value)}
                                className="block w-24 rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm text-center"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-x-6 pt-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-slate-900 hover:text-slate-700 transition-colors">Cancel</button>
                        <button
                            type="submit"
                            className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:scale-105"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
