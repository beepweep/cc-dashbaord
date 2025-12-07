"use client";

import React, { useState } from "react";
import Image from "next/image";

// Helper component for info buttons
const InfoButton = ({ title }: { title: string }) => (
    <button
        type="button"
        className="text-blue-600 hover:text-blue-700"
        title={title}
    >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
    </button>
);


export default function GetListedPage() {
    const [formData, setFormData] = useState<any>({});
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
    const [userCaptcha, setUserCaptcha] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    React.useEffect(() => {
        setCaptcha({
            num1: Math.floor(Math.random() * 10),
            num2: Math.floor(Math.random() * 10)
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate captcha
        if (parseInt(userCaptcha) !== captcha.num1 + captcha.num2) {
            setSubmitStatus('error');
            setErrorMessage("Incorrect captcha. Please try again.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage("");

        try {
            // TODO: Replace with your Google Apps Script Web App URL
            const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

            if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
                // For testing without Google Sheets setup
                console.log('Form data:', formData);
                await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
                setSubmitStatus('success');
                setFormData({});
                setUserCaptcha("");
                // Generate new captcha
                setCaptcha({
                    num1: Math.floor(Math.random() * 10),
                    num2: Math.floor(Math.random() * 10)
                });
                return;
            }

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // Note: no-cors mode doesn't allow reading response, so we assume success
            setSubmitStatus('success');
            setFormData({});
            setUserCaptcha("");
            // Generate new captcha
            setCaptcha({
                num1: Math.floor(Math.random() * 10),
                num2: Math.floor(Math.random() * 10)
            });

        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
            setErrorMessage("Failed to submit form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 text-slate-900">
            <div className="relative overflow-hidden bg-white pt-32 pb-20 border-b border-gray-200">
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

                        {/* Already Listed Toggle */}
                        <div className="mt-6 flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <input
                                type="checkbox"
                                name="alreadyListed"
                                id="alreadyListed"
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                            <label htmlFor="alreadyListed" className="text-sm font-medium text-slate-900 cursor-pointer">
                                Already listed here?
                            </label>
                            <button
                                type="button"
                                className="ml-1 text-blue-600 hover:text-blue-700"
                                title="Check this if your card is already listed on our platform and you want to update the information"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {/* Conditional Link Field */}
                        {formData.alreadyListed && (
                            <div className="mt-6">
                                <label className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900">
                                    Link to Your Existing Listing *
                                    <button
                                        type="button"
                                        className="text-blue-600 hover:text-blue-700"
                                        title="Provide the URL of your existing card listing on our platform"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="url"
                                        name="existingListingLink"
                                        required={formData.alreadyListed}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        placeholder="https://cardforyou.com/cards/your-card"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900">
                                    Card Name *
                                    <button
                                        type="button"
                                        className="text-blue-600 hover:text-blue-700"
                                        title="The official name of your crypto card"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </label>
                                <div className="mt-2">
                                    <input type="text" name="cardName" required onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900">
                                    Issuer/Provider
                                    <button
                                        type="button"
                                        className="text-blue-600 hover:text-blue-700"
                                        title="The company or organization issuing the card"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </label>
                                <div className="mt-2">
                                    <input type="text" name="issuer" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900">
                                    Website URL
                                    <button
                                        type="button"
                                        className="text-blue-600 hover:text-blue-700"
                                        title="Official website URL for your card"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </label>
                                <div className="mt-2">
                                    <input type="url" name="website" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="https://" />
                                </div>
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900">
                                    Launch Date
                                    <button
                                        type="button"
                                        className="text-blue-600 hover:text-blue-700"
                                        title="The date your card was officially launched or became available"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </label>
                                <div className="mt-2">
                                    <input type="date" name="launchDate" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900">
                                    Region
                                    <InfoButton title="Primary region where the card is available (e.g., Global, EEA, US)" />
                                </label>
                                <div className="mt-2">
                                    <input type="text" name="region" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="e.g. Global, EEA, US" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900">
                                    Supported Regions (List)
                                    <InfoButton title="List all countries or regions where this card can be used" />
                                </label>
                                <div className="mt-2">
                                    <textarea name="supportedRegions" rows={3} onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="List countries or regions..." />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900">
                                    Excluded Countries (List)
                                    <InfoButton title="List any countries or regions where the card is NOT available" />
                                </label>
                                <div className="mt-2">
                                    <textarea name="excludedCountries" rows={2} onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900">
                                    Image URL (Logo/Card Art)
                                    <InfoButton title="URL to high-quality image of your card or logo (PNG, JPG, or WebP recommended)" />
                                </label>
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
                                <label className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900">
                                    Payment Network
                                    <InfoButton title="The payment network used by the card (Visa, Mastercard, etc.)" />
                                </label>
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
                                <label className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900">
                                    Card Type
                                    <InfoButton title="Whether the card is a debit, credit, or prepaid card" />
                                </label>
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
                                <label className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900">
                                    Material
                                    <InfoButton title="Physical material of the card (Plastic, Metal, or Virtual only)" />
                                </label>
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
                                <label className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900">
                                    Base Currency
                                    <InfoButton title="The primary currency for the card account (e.g., USD, EUR, GBP)" />
                                </label>
                                <div className="mt-2">
                                    <input type="text" name="baseCurrency" onChange={handleChange} className="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="e.g. USD, EUR, GBP" />
                                </div>
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900">
                                    Status
                                    <InfoButton title="Current availability status of the card" />
                                </label>
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
                            <div className="sm:col-span-1"><label className="flex items-center gap-1 text-xs font-medium text-slate-700">Issuance Fee <InfoButton title="One-time fee to issue the card" /></label><input type="text" name="issuanceFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="flex items-center gap-1 text-xs font-medium text-slate-700">Monthly/Annual Fee <InfoButton title="Recurring fee charged monthly or annually" /></label><input type="text" name="monthlyFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="flex items-center gap-1 text-xs font-medium text-slate-700">FX Fee (%) <InfoButton title="Foreign exchange fee percentage" /></label><input type="text" name="fxFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div className="sm:col-span-1"><label className="flex items-center gap-1 text-xs font-medium text-slate-700">ATM Withdrawal Fee <InfoButton title="Fee for ATM cash withdrawals" /></label><input type="text" name="atmFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="flex items-center gap-1 text-xs font-medium text-slate-700">Top-Up Fee <InfoButton title="Fee for adding funds to the card" /></label><input type="text" name="topUpFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="flex items-center gap-1 text-xs font-medium text-slate-700">Inactivity Fee <InfoButton title="Fee charged for prolonged inactivity" /></label><input type="text" name="inactivityFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div className="sm:col-span-1"><label className="flex items-center gap-1 text-xs font-medium text-slate-700">Replacement Fee <InfoButton title="Fee for replacing a lost or damaged card" /></label><input type="text" name="replacementFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="flex items-center gap-1 text-xs font-medium text-slate-700">Custody Fee <InfoButton title="Fee for holding crypto assets" /></label><input type="text" name="custodyFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="flex items-center gap-1 text-xs font-medium text-slate-700">Liquidation Fee <InfoButton title="Fee for converting crypto to fiat" /></label><input type="text" name="liquidationFee" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            {/* Limits */}
                            <div className="sm:col-span-3 border-t border-gray-200 pt-4 mt-2"><h4 className="text-sm font-medium text-slate-900 mb-2">Limits</h4></div>

                            <div className="sm:col-span-1"><label className="flex items-center gap-1 text-xs font-medium text-slate-700">Free ATM Limit <InfoButton title="Number of free ATM withdrawals per period" /></label><input type="text" name="freeAtmLimit" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="flex items-center gap-1 text-xs font-medium text-slate-700">Daily Spending Limit <InfoButton title="Maximum daily spending amount" /></label><input type="text" name="dailyLimit" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="flex items-center gap-1 text-xs font-medium text-slate-700">Monthly Spending Limit <InfoButton title="Maximum monthly spending amount" /></label><input type="text" name="monthlyLimit" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div className="sm:col-span-1"><label className="flex items-center gap-1 text-xs font-medium text-slate-700">Min Balance <InfoButton title="Minimum balance required to maintain the card" /></label><input type="text" name="minBalance" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-1"><label className="flex items-center gap-1 text-xs font-medium text-slate-700">Top-Up Limits <InfoButton title="Maximum amount that can be loaded per transaction or period" /></label><input type="text" name="topUpLimits" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                        </div>
                    </div>

                    {/* Section 5: Rewards & Staking */}
                    <div className="border-b border-gray-200 pb-12">
                        <h2 className="text-xl font-semibold leading-7 text-slate-900">Rewards & Staking</h2>
                        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                            <div><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Base Cashback Rate (%) <InfoButton title="Standard cashback percentage for purchases" /></label><input type="text" name="baseCashback" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Max Cashback Rate (%) <InfoButton title="Maximum cashback percentage achievable" /></label><input type="text" name="maxCashback" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Reward Currency <InfoButton title="Currency in which rewards are paid (e.g., BTC, CRO, Points)" /></label><input type="text" name="rewardCurrency" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" placeholder="e.g. BTC, CRO, Points" /></div>
                            <div><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Monthly Reward Cap <InfoButton title="Maximum rewards that can be earned per month" /></label><input type="text" name="rewardCap" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div className="sm:col-span-2"><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Boost / Special Categories <InfoButton title="Special categories or merchants with higher cashback rates" /></label><input type="text" name="boost" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-2"><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Merchant Rebates (e.g. Spotify, Netflix) <InfoButton title="Subscription services or merchants with special rebates" /></label><input type="text" name="rebates" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-2"><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Staking Yield (APY) <InfoButton title="Annual percentage yield for staking tokens" /></label><input type="text" name="stakingYield" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-2"><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Welcome Bonus <InfoButton title="Sign-up or welcome bonus for new cardholders" /></label><input type="text" name="welcomeBonus" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Referral Bonus <InfoButton title="Bonus for referring new users" /></label><input type="text" name="referralBonus" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Referral T&C <InfoButton title="Terms and conditions for referral program" /></label><input type="text" name="referralTc" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div className="sm:col-span-2"><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Additional Points Info <InfoButton title="Any additional information about rewards or points program" /></label><textarea name="additionalPoints" rows={2} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                        </div>
                    </div>

                    {/* Section 6: Requirements */}
                    <div className="border-b border-gray-200 pb-12">
                        <h2 className="text-xl font-semibold leading-7 text-slate-900">Requirements</h2>
                        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                            <div><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Required Token <InfoButton title="Token that must be staked or held (if any)" /></label><input type="text" name="requiredToken" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Fiat Value Requirement <InfoButton title="Minimum fiat value required for staking" /></label><input type="text" name="fiatReq" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Lock-Up Period <InfoButton title="Duration tokens must be locked/staked" /></label><input type="text" name="lockup" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Tier Downgrade Penalty <InfoButton title="Penalty for unstaking or falling below tier requirements" /></label><input type="text" name="downgradePenalty" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>

                            <div className="sm:col-span-2"><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Supported Spend Assets (List) <InfoButton title="Cryptocurrencies that can be spent with the card" /></label><textarea name="spendAssets" rows={2} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div className="sm:col-span-2"><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Funding Methods <InfoButton title="Methods to add funds to the card (e.g., crypto transfer, bank transfer)" /></label><textarea name="fundingMethods" rows={2} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
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
                                <div><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Exclusive Merch <InfoButton title="Exclusive merchandise or gifts for cardholders" /></label><input type="text" name="merch" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                                <div><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Exclusive Club <InfoButton title="Access to exclusive clubs or communities" /></label><input type="text" name="club" onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                                <div className="sm:col-span-2"><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Additional Features <InfoButton title="Any other features or benefits not listed above" /></label><textarea name="additionalFeatures" rows={3} onChange={handleChange} className="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            </div>
                        </div>
                    </div>

                    {/* Section 8: Legal */}
                    <div className="border-b border-gray-200 pb-12">
                        <h2 className="text-xl font-semibold leading-7 text-slate-900">Links & Legal</h2>
                        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                            <div><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Application Link / CTA <InfoButton title="URL where users can apply for the card" /></label><input type="url" name="applyLink" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
                            <div><label className="flex items-center gap-2 text-sm font-medium text-slate-900">Terms & Conditions Link <InfoButton title="URL to the card's terms and conditions" /></label><input type="url" name="tcLink" onChange={handleChange} className="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm" /></div>
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

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                            <div className="flex">
                                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-green-800">
                                        Form submitted successfully! We'll review your application and get back to you soon.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="rounded-lg bg-red-50 p-4 border border-red-200">
                            <div className="flex">
                                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-red-800">
                                        {errorMessage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex items-center justify-end gap-x-6 pt-6">
                        <button
                            type="button"
                            onClick={() => {
                                setFormData({});
                                setUserCaptcha("");
                                setSubmitStatus('idle');
                            }}
                            className="text-sm font-semibold leading-6 text-slate-900 hover:text-slate-700 transition-colors"
                        >
                            Clear Form
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </>
                            ) : (
                                'Submit Application'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
