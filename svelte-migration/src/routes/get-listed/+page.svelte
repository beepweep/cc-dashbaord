<script lang="ts">
    import { onMount } from "svelte";

    let formData = $state<any>({});
    let captcha = $state({ num1: 0, num2: 0 });
    let userCaptcha = $state("");
    let isSubmitting = $state(false);
    let submitStatus = $state<"idle" | "success" | "error">("idle");
    let errorMessage = $state("");

    onMount(() => {
        generateCaptcha();
    });

    function generateCaptcha() {
        captcha = {
            num1: Math.floor(Math.random() * 10),
            num2: Math.floor(Math.random() * 10),
        };
    }

    function handleChange(e: Event) {
        const target = e.target as
            | HTMLInputElement
            | HTMLSelectElement
            | HTMLTextAreaElement;
        const { name, value, type } = target;
        if (type === "checkbox") {
            const checked = (target as HTMLInputElement).checked;
            formData = { ...formData, [name]: checked };
        } else {
            formData = { ...formData, [name]: value };
        }
    }

    async function handleSubmit(e: Event) {
        e.preventDefault();

        // Validate captcha
        if (parseInt(userCaptcha) !== captcha.num1 + captcha.num2) {
            submitStatus = "error";
            errorMessage = "Incorrect captcha. Please try again.";
            return;
        }

        isSubmitting = true;
        submitStatus = "idle";
        errorMessage = "";

        try {
            // TODO: Replace with your Google Apps Script Web App URL
            const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

            if (GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
                // For testing without Google Sheets setup
                console.log("Form data:", formData);
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
                submitStatus = "success";
                formData = {};
                userCaptcha = "";
                generateCaptcha();
                // Reset form fields visually if needed, but binding should handle it mostly.
                // However, since we are using a single formData object and inputs might not be fully controlled
                // (we are using on:change instead of bind:value for everything to match React style closely,
                // but Svelte way is bind:value. Let's stick to the logic provided but maybe use specific bindings if elements don't reset).
                // Actually better to use bind:value in Svelte.
            } else {
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                // Note: no-cors mode doesn't allow reading response, so we assume success
                submitStatus = "success";
                formData = {};
                userCaptcha = "";
                generateCaptcha();
            }
        } catch (error) {
            console.error("Submission error:", error);
            submitStatus = "error";
            errorMessage = "Failed to submit form. Please try again.";
        } finally {
            isSubmitting = false;
        }
    }
</script>

<!-- Helper component for info buttons -->
{#snippet InfoButton(title: string)}
    <button
        type="button"
        class="text-blue-600 hover:text-blue-700 ml-1"
        {title}
    >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
            />
        </svg>
    </button>
{/snippet}

<div class="min-h-screen bg-gray-50 text-slate-900">
    <div
        class="relative overflow-hidden bg-white pt-28 pb-16 border-b border-gray-200"
    >
        <!-- Background effects - subtle light theme -->
        <div
            class="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-gray-50"
        ></div>

        <div class="mx-auto max-w-6xl px-5 lg:px-7 relative z-10 text-center">
            <h1
                class="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
                Get Your Card Listed
            </h1>
            <p class="mt-3 text-sm leading-7 text-slate-600 max-w-xl mx-auto">
                Join the leading crypto card comparison platform. Submit your
                details below to reach thousands of potential users.
            </p>
        </div>
    </div>

    <div class="mx-auto max-w-2xl px-5 lg:px-7 py-14 relative z-10">
        <form onsubmit={handleSubmit} class="space-y-12">
            <!-- Section 1: Contact Info -->
            <div class="border-b border-gray-200 pb-12">
                <h2 class="text-xl font-semibold leading-7 text-slate-900">
                    Contact Information
                </h2>
                <p class="mt-1 text-sm leading-6 text-slate-600">
                    How can we reach you regarding this application?
                </p>

                <div
                    class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
                >
                    <div class="sm:col-span-2">
                        <label
                            for="contactName"
                            class="block text-sm font-medium leading-6 text-slate-900"
                            >Contact Name</label
                        >
                        <div class="mt-2">
                            <input
                                type="text"
                                name="contactName"
                                bind:value={formData.contactName}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            for="email"
                            class="block text-sm font-medium leading-6 text-slate-900"
                            >Email</label
                        >
                        <div class="mt-2">
                            <input
                                type="email"
                                name="email"
                                bind:value={formData.email}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            for="telegram"
                            class="block text-sm font-medium leading-6 text-slate-900"
                            >Telegram Username</label
                        >
                        <div class="mt-2 relative">
                            <span
                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500"
                                >@</span
                            >
                            <input
                                type="text"
                                name="telegram"
                                bind:value={formData.telegram}
                                class="block w-full rounded-md border-0 bg-white py-2 pl-7 pr-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                placeholder="username"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Section 2: Basic Card Details -->
            <div class="border-b border-gray-200 pb-12">
                <h2 class="text-xl font-semibold leading-7 text-slate-900">
                    Basic Card Details
                </h2>

                <!-- Already Listed Toggle -->
                <div
                    class="mt-6 flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg"
                >
                    <input
                        type="checkbox"
                        name="alreadyListed"
                        id="alreadyListed"
                        bind:checked={formData.alreadyListed}
                        class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                    />
                    <label
                        for="alreadyListed"
                        class="text-sm font-medium text-slate-900 cursor-pointer"
                    >
                        Already listed here?
                    </label>
                    {@render InfoButton(
                        "Check this if your card is already listed on our platform and you want to update the information",
                    )}
                </div>

                <!-- Conditional Link Field -->
                {#if formData.alreadyListed}
                    <div class="mt-6">
                        <label
                            for="existingListingLink"
                            class="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900"
                        >
                            Link to Your Existing Listing *
                            {@render InfoButton(
                                "Provide the URL of your existing card listing on our platform",
                            )}
                        </label>
                        <div class="mt-2">
                            <input
                                type="url"
                                name="existingListingLink"
                                required={formData.alreadyListed}
                                bind:value={formData.existingListingLink}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                placeholder="https://cardforyou.com/cards/your-card"
                            />
                        </div>
                    </div>
                {/if}

                <div
                    class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
                >
                    <div>
                        <label
                            for="cardName"
                            class="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900"
                        >
                            Card Name *
                            {@render InfoButton(
                                "The official name of your crypto card",
                            )}
                        </label>
                        <div class="mt-2">
                            <input
                                type="text"
                                name="cardName"
                                required
                                bind:value={formData.cardName}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            for="issuer"
                            class="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900"
                        >
                            Issuer/Provider
                            {@render InfoButton(
                                "The company or organization issuing the card",
                            )}
                        </label>
                        <div class="mt-2">
                            <input
                                type="text"
                                name="issuer"
                                bind:value={formData.issuer}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="website"
                            class="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900"
                        >
                            Website URL
                            {@render InfoButton(
                                "Official website URL for your card",
                            )}
                        </label>
                        <div class="mt-2">
                            <input
                                type="url"
                                name="website"
                                bind:value={formData.website}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                placeholder="https://"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            for="launchDate"
                            class="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900"
                        >
                            Launch Date
                            {@render InfoButton(
                                "The date your card was officially launched or became available",
                            )}
                        </label>
                        <div class="mt-2">
                            <input
                                type="date"
                                name="launchDate"
                                bind:value={formData.launchDate}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            for="region"
                            class="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900"
                        >
                            Region
                            {@render InfoButton(
                                "Primary region where the card is available (e.g., Global, EEA, US)",
                            )}
                        </label>
                        <div class="mt-2">
                            <input
                                type="text"
                                name="region"
                                bind:value={formData.region}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                placeholder="e.g. Global, EEA, US"
                            />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="supportedRegions"
                            class="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900"
                        >
                            Supported Regions (List)
                            {@render InfoButton(
                                "List all countries or regions where this card can be used",
                            )}
                        </label>
                        <div class="mt-2">
                            <textarea
                                name="supportedRegions"
                                rows="3"
                                bind:value={formData.supportedRegions}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                placeholder="List countries or regions..."
                            ></textarea>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="excludedCountries"
                            class="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900"
                        >
                            Excluded Countries (List)
                            {@render InfoButton(
                                "List any countries or regions where the card is NOT available",
                            )}
                        </label>
                        <div class="mt-2">
                            <textarea
                                name="excludedCountries"
                                rows="2"
                                bind:value={formData.excludedCountries}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            ></textarea>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="image"
                            class="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900"
                        >
                            Image URL (Logo/Card Art)
                            {@render InfoButton(
                                "URL to high-quality image of your card or logo (PNG, JPG, or WebP recommended)",
                            )}
                        </label>
                        <div class="mt-2">
                            <input
                                type="url"
                                name="image"
                                bind:value={formData.image}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                placeholder="https://"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Section 3: Card Specs -->
            <div class="border-b border-gray-200 pb-12">
                <h2 class="text-xl font-semibold leading-7 text-slate-900">
                    Card Specifications
                </h2>
                <div
                    class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
                >
                    <div>
                        <label
                            for="network"
                            class="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900"
                        >
                            Payment Network
                            {@render InfoButton(
                                "The payment network used by the card (Visa, Mastercard, etc.)",
                            )}
                        </label>
                        <div class="mt-2">
                            <select
                                name="network"
                                bind:value={formData.network}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            >
                                <option value="">Select...</option>
                                <option value="Visa">Visa</option>
                                <option value="Mastercard">Mastercard</option>
                                <option value="UnionPay">UnionPay</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label
                            for="type"
                            class="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900"
                        >
                            Card Type
                            {@render InfoButton(
                                "Whether the card is a debit, credit, or prepaid card",
                            )}
                        </label>
                        <div class="mt-2">
                            <select
                                name="type"
                                bind:value={formData.type}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            >
                                <option value="">Select...</option>
                                <option value="Debit">Debit</option>
                                <option value="Credit">Credit</option>
                                <option value="Prepaid">Prepaid</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label
                            for="material"
                            class="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900"
                        >
                            Material
                            {@render InfoButton(
                                "Physical material of the card (Plastic, Metal, or Virtual only)",
                            )}
                        </label>
                        <div class="mt-2">
                            <select
                                name="material"
                                bind:value={formData.material}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            >
                                <option value="">Select...</option>
                                <option value="Plastic">Plastic</option>
                                <option value="Metal">Metal</option>
                                <option value="Virtual">Virtual Only</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label
                            for="baseCurrency"
                            class="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900"
                        >
                            Base Currency
                            {@render InfoButton(
                                "The primary currency for the card account (e.g., USD, EUR, GBP)",
                            )}
                        </label>
                        <div class="mt-2">
                            <input
                                type="text"
                                name="baseCurrency"
                                bind:value={formData.baseCurrency}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                placeholder="e.g. USD, EUR, GBP"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            for="status"
                            class="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900"
                        >
                            Status
                            {@render InfoButton(
                                "Current availability status of the card",
                            )}
                        </label>
                        <div class="mt-2">
                            <select
                                name="status"
                                bind:value={formData.status}
                                class="block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            >
                                <option value="Active">Active</option>
                                <option value="Waitlist">Waitlist</option>
                                <option value="Beta">Beta</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Section 4: Fees and Limits -->
            <div class="border-b border-gray-200 pb-12">
                <h2 class="text-xl font-semibold leading-7 text-slate-900">
                    Fees & Limits
                </h2>
                <div
                    class="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-3"
                >
                    <!-- Standard Fees -->
                    <div class="sm:col-span-1">
                        <label
                            for="issuanceFee"
                            class="flex items-center gap-1 text-xs font-medium text-slate-700"
                            >Issuance Fee {@render InfoButton(
                                "One-time fee to issue the card",
                            )}</label
                        ><input
                            type="text"
                            name="issuanceFee"
                            bind:value={formData.issuanceFee}
                            class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div class="sm:col-span-1">
                        <label
                            for="monthlyFee"
                            class="flex items-center gap-1 text-xs font-medium text-slate-700"
                            >Monthly/Annual Fee {@render InfoButton(
                                "Recurring fee charged monthly or annually",
                            )}</label
                        ><input
                            type="text"
                            name="monthlyFee"
                            bind:value={formData.monthlyFee}
                            class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div class="sm:col-span-1">
                        <label
                            for="fxFee"
                            class="flex items-center gap-1 text-xs font-medium text-slate-700"
                            >FX Fee (%) {@render InfoButton(
                                "Foreign exchange fee percentage",
                            )}</label
                        ><input
                            type="text"
                            name="fxFee"
                            bind:value={formData.fxFee}
                            class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>

                    <div class="sm:col-span-1">
                        <label
                            for="atmFee"
                            class="flex items-center gap-1 text-xs font-medium text-slate-700"
                            >ATM Withdrawal Fee {@render InfoButton(
                                "Fee for ATM cash withdrawals",
                            )}</label
                        ><input
                            type="text"
                            name="atmFee"
                            bind:value={formData.atmFee}
                            class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div class="sm:col-span-1">
                        <label
                            for="topUpFee"
                            class="flex items-center gap-1 text-xs font-medium text-slate-700"
                            >Top-Up Fee {@render InfoButton(
                                "Fee for adding funds to the card",
                            )}</label
                        ><input
                            type="text"
                            name="topUpFee"
                            bind:value={formData.topUpFee}
                            class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div class="sm:col-span-1">
                        <label
                            for="inactivityFee"
                            class="flex items-center gap-1 text-xs font-medium text-slate-700"
                            >Inactivity Fee {@render InfoButton(
                                "Fee charged for prolonged inactivity",
                            )}</label
                        ><input
                            type="text"
                            name="inactivityFee"
                            bind:value={formData.inactivityFee}
                            class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>

                    <div class="sm:col-span-1">
                        <label
                            for="replacementFee"
                            class="flex items-center gap-1 text-xs font-medium text-slate-700"
                            >Replacement Fee {@render InfoButton(
                                "Fee for replacing a lost or damaged card",
                            )}</label
                        ><input
                            type="text"
                            name="replacementFee"
                            bind:value={formData.replacementFee}
                            class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div class="sm:col-span-1">
                        <label
                            for="custodyFee"
                            class="flex items-center gap-1 text-xs font-medium text-slate-700"
                            >Custody Fee {@render InfoButton(
                                "Fee for holding crypto assets",
                            )}</label
                        ><input
                            type="text"
                            name="custodyFee"
                            bind:value={formData.custodyFee}
                            class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div class="sm:col-span-1">
                        <label
                            for="liquidationFee"
                            class="flex items-center gap-1 text-xs font-medium text-slate-700"
                            >Liquidation Fee {@render InfoButton(
                                "Fee for converting crypto to fiat",
                            )}</label
                        ><input
                            type="text"
                            name="liquidationFee"
                            bind:value={formData.liquidationFee}
                            class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>

                    <!-- Limits -->
                    <div
                        class="sm:col-span-3 border-t border-gray-200 pt-4 mt-2"
                    >
                        <h4 class="text-sm font-medium text-slate-900 mb-2">
                            Limits
                        </h4>
                    </div>

                    <div class="sm:col-span-1">
                        <label
                            for="freeAtmLimit"
                            class="flex items-center gap-1 text-xs font-medium text-slate-700"
                            >Free ATM Limit {@render InfoButton(
                                "Number of free ATM withdrawals per period",
                            )}</label
                        ><input
                            type="text"
                            name="freeAtmLimit"
                            bind:value={formData.freeAtmLimit}
                            class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div class="sm:col-span-1">
                        <label
                            for="dailyLimit"
                            class="flex items-center gap-1 text-xs font-medium text-slate-700"
                            >Daily Spending Limit {@render InfoButton(
                                "Maximum daily spending amount",
                            )}</label
                        ><input
                            type="text"
                            name="dailyLimit"
                            bind:value={formData.dailyLimit}
                            class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div class="sm:col-span-1">
                        <label
                            for="monthlyLimit"
                            class="flex items-center gap-1 text-xs font-medium text-slate-700"
                            >Monthly Spending Limit {@render InfoButton(
                                "Maximum monthly spending amount",
                            )}</label
                        ><input
                            type="text"
                            name="monthlyLimit"
                            bind:value={formData.monthlyLimit}
                            class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>

                    <div class="sm:col-span-1">
                        <label
                            for="minBalance"
                            class="flex items-center gap-1 text-xs font-medium text-slate-700"
                            >Min Balance {@render InfoButton(
                                "Minimum balance required to maintain the card",
                            )}</label
                        ><input
                            type="text"
                            name="minBalance"
                            bind:value={formData.minBalance}
                            class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div class="sm:col-span-1">
                        <label
                            for="topUpLimits"
                            class="flex items-center gap-1 text-xs font-medium text-slate-700"
                            >Top-Up Limits {@render InfoButton(
                                "Maximum amount that can be loaded per transaction or period",
                            )}</label
                        ><input
                            type="text"
                            name="topUpLimits"
                            bind:value={formData.topUpLimits}
                            class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                </div>
            </div>

            <!-- Section 5: Rewards & Staking -->
            <div class="border-b border-gray-200 pb-12">
                <h2 class="text-xl font-semibold leading-7 text-slate-900">
                    Rewards & Staking
                </h2>
                <div
                    class="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2"
                >
                    <div>
                        <label
                            for="baseCashback"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Base Cashback Rate (%) {@render InfoButton(
                                "Standard cashback percentage for purchases",
                            )}</label
                        ><input
                            type="text"
                            name="baseCashback"
                            bind:value={formData.baseCashback}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            for="maxCashback"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Max Cashback Rate (%) {@render InfoButton(
                                "Maximum cashback percentage achievable",
                            )}</label
                        ><input
                            type="text"
                            name="maxCashback"
                            bind:value={formData.maxCashback}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label
                            for="rewardCurrency"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Reward Currency {@render InfoButton(
                                "Currency in which rewards are paid (e.g., BTC, CRO, Points)",
                            )}</label
                        ><input
                            type="text"
                            name="rewardCurrency"
                            bind:value={formData.rewardCurrency}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                            placeholder="e.g. BTC, CRO, Points"
                        />
                    </div>
                    <div>
                        <label
                            for="rewardCap"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Monthly Reward Cap {@render InfoButton(
                                "Maximum rewards that can be earned per month",
                            )}</label
                        ><input
                            type="text"
                            name="rewardCap"
                            bind:value={formData.rewardCap}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>

                    <div class="sm:col-span-2">
                        <label
                            for="boost"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Boost / Special Categories {@render InfoButton(
                                "Special categories or merchants with higher cashback rates",
                            )}</label
                        ><input
                            type="text"
                            name="boost"
                            bind:value={formData.boost}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="rebates"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Merchant Rebates (e.g. Spotify, Netflix) {@render InfoButton(
                                "Subscription services or merchants with special rebates",
                            )}</label
                        ><input
                            type="text"
                            name="rebates"
                            bind:value={formData.rebates}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="stakingYield"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Staking Yield (APY) {@render InfoButton(
                                "Annual percentage yield for staking tokens",
                            )}</label
                        ><input
                            type="text"
                            name="stakingYield"
                            bind:value={formData.stakingYield}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="welcomeBonus"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Welcome Bonus {@render InfoButton(
                                "Sign-up or welcome bonus for new cardholders",
                            )}</label
                        ><input
                            type="text"
                            name="welcomeBonus"
                            bind:value={formData.welcomeBonus}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label
                            for="referralBonus"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Referral Bonus {@render InfoButton(
                                "Bonus for referring new users",
                            )}</label
                        ><input
                            type="text"
                            name="referralBonus"
                            bind:value={formData.referralBonus}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            for="referralTc"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Referral T&C {@render InfoButton(
                                "Terms and conditions for referral program",
                            )}</label
                        ><input
                            type="text"
                            name="referralTc"
                            bind:value={formData.referralTc}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>

                    <div class="sm:col-span-2">
                        <label
                            for="additionalPoints"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Additional Points Info {@render InfoButton(
                                "Any additional information about rewards or points program",
                            )}</label
                        ><textarea
                            name="additionalPoints"
                            rows="2"
                            bind:value={formData.additionalPoints}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                </div>
            </div>

            <!-- Section 6: Requirements -->
            <div class="border-b border-gray-200 pb-12">
                <h2 class="text-xl font-semibold leading-7 text-slate-900">
                    Requirements
                </h2>
                <div
                    class="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2"
                >
                    <div>
                        <label
                            for="requiredToken"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Required Token {@render InfoButton(
                                "Token that must be staked or held (if any)",
                            )}</label
                        ><input
                            type="text"
                            name="requiredToken"
                            bind:value={formData.requiredToken}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            for="fiatReq"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Fiat Value Requirement {@render InfoButton(
                                "Minimum fiat value required for staking",
                            )}</label
                        ><input
                            type="text"
                            name="fiatReq"
                            bind:value={formData.fiatReq}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            for="lockup"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Lock-Up Period {@render InfoButton(
                                "Duration tokens must be locked/staked",
                            )}</label
                        ><input
                            type="text"
                            name="lockup"
                            bind:value={formData.lockup}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            for="downgradePenalty"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Tier Downgrade Penalty {@render InfoButton(
                                "Penalty for unstaking or falling below tier requirements",
                            )}</label
                        ><input
                            type="text"
                            name="downgradePenalty"
                            bind:value={formData.downgradePenalty}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>

                    <div class="sm:col-span-2">
                        <label
                            for="spendAssets"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Supported Spend Assets (List) {@render InfoButton(
                                "Cryptocurrencies that can be spent with the card",
                            )}</label
                        ><textarea
                            name="spendAssets"
                            rows="2"
                            bind:value={formData.spendAssets}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="fundingMethods"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Funding Methods {@render InfoButton(
                                "Methods to add funds to the card (e.g., crypto transfer, bank transfer)",
                            )}</label
                        ><textarea
                            name="fundingMethods"
                            rows="2"
                            bind:value={formData.fundingMethods}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                </div>
            </div>

            <!-- Section 7: Features & Benefits -->
            <div class="border-b border-gray-200 pb-12">
                <h2 class="text-xl font-semibold leading-7 text-slate-900">
                    Features & Benefits
                </h2>
                <div class="mt-8 space-y-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="appleGooglePay"
                                bind:checked={formData.appleGooglePay}
                                class="rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            /><label
                                for="appleGooglePay"
                                class="text-sm text-slate-700"
                                >Mobile Wallet Support (Apple/Google Pay)</label
                            >
                        </div>
                        <div class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="virtualCard"
                                bind:checked={formData.virtualCard}
                                class="rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            /><label
                                for="virtualCard"
                                class="text-sm text-slate-700"
                                >Virtual Card Availability</label
                            >
                        </div>
                        <div class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="multiVirtual"
                                bind:checked={formData.multiVirtual}
                                class="rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            /><label
                                for="multiVirtual"
                                class="text-sm text-slate-700"
                                >Multiple Virtual Cards</label
                            >
                        </div>
                        <div class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="virtualBank"
                                bind:checked={formData.virtualBank}
                                class="rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            /><label
                                for="virtualBank"
                                class="text-sm text-slate-700"
                                >Virtual Bank Account</label
                            >
                        </div>
                        <div class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="esim"
                                bind:checked={formData.esim}
                                class="rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            /><label for="esim" class="text-sm text-slate-700"
                                >eSIM</label
                            >
                        </div>
                        <div class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="lounge"
                                bind:checked={formData.lounge}
                                class="rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            /><label for="lounge" class="text-sm text-slate-700"
                                >Global Lounge Access</label
                            >
                        </div>
                        <div class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="concierge"
                                bind:checked={formData.concierge}
                                class="rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            /><label
                                for="concierge"
                                class="text-sm text-slate-700"
                                >Concierge Service</label
                            >
                        </div>
                        <div class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="guests"
                                bind:checked={formData.guests}
                                class="rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            /><label for="guests" class="text-sm text-slate-700"
                                >Guest Allowances</label
                            >
                        </div>
                        <div class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="privateJet"
                                bind:checked={formData.privateJet}
                                class="rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            /><label
                                for="privateJet"
                                class="text-sm text-slate-700"
                                >Private Jet Partnership</label
                            >
                        </div>
                        <div class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="golf"
                                bind:checked={formData.golf}
                                class="rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            /><label for="golf" class="text-sm text-slate-700"
                                >Golf Access</label
                            >
                        </div>
                    </div>

                    <div class="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label
                                for="merch"
                                class="flex items-center gap-2 text-sm font-medium text-slate-900"
                                >Exclusive Merch {@render InfoButton(
                                    "Exclusive merchandise or gifts for cardholders",
                                )}</label
                            ><input
                                type="text"
                                name="merch"
                                bind:value={formData.merch}
                                class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label
                                for="club"
                                class="flex items-center gap-2 text-sm font-medium text-slate-900"
                                >Exclusive Club {@render InfoButton(
                                    "Access to exclusive clubs or communities",
                                )}</label
                            ><input
                                type="text"
                                name="club"
                                bind:value={formData.club}
                                class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                            />
                        </div>
                        <div class="sm:col-span-2">
                            <label
                                for="additionalFeatures"
                                class="flex items-center gap-2 text-sm font-medium text-slate-900"
                                >Additional Features {@render InfoButton(
                                    "Any other features or benefits not listed above",
                                )}</label
                            ><textarea
                                name="additionalFeatures"
                                rows="3"
                                bind:value={formData.additionalFeatures}
                                class="mt-1 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Section 8: Legal -->
            <div class="border-b border-gray-200 pb-12">
                <h2 class="text-xl font-semibold leading-7 text-slate-900">
                    Links & Legal
                </h2>
                <div
                    class="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2"
                >
                    <div>
                        <label
                            for="applyLink"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Application Link / CTA {@render InfoButton(
                                "URL where users can apply for the card",
                            )}</label
                        ><input
                            type="url"
                            name="applyLink"
                            bind:value={formData.applyLink}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            for="tcLink"
                            class="flex items-center gap-2 text-sm font-medium text-slate-900"
                            >Terms & Conditions Link {@render InfoButton(
                                "URL to the card's terms and conditions",
                            )}</label
                        ><input
                            type="url"
                            name="tcLink"
                            bind:value={formData.tcLink}
                            class="mt-2 block w-full rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
                        />
                    </div>
                </div>
            </div>

            <!-- Captcha Section -->
            <div class="border-t border-gray-200 pt-8">
                <div class="flex items-center gap-4">
                    <label
                        for="userCaptcha"
                        class="text-sm font-medium text-slate-900"
                    >
                        Security Check: What is {captcha.num1} + {captcha.num2}?
                    </label>
                    <input
                        type="number"
                        name="userCaptcha"
                        required
                        bind:value={userCaptcha}
                        class="block w-24 rounded-md border-0 bg-white py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm text-center"
                    />
                </div>
            </div>

            <!-- Status Messages -->
            {#if submitStatus === "success"}
                <div class="rounded-lg bg-green-50 p-4 border border-green-200">
                    <div class="flex">
                        <svg
                            class="h-5 w-5 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <div class="ml-3">
                            <p class="text-sm font-medium text-green-800">
                                Form submitted successfully! We'll review your
                                application and get back to you soon.
                            </p>
                        </div>
                    </div>
                </div>
            {/if}

            {#if submitStatus === "error"}
                <div class="rounded-lg bg-red-50 p-4 border border-red-200">
                    <div class="flex">
                        <svg
                            class="h-5 w-5 text-red-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <div class="ml-3">
                            <p class="text-sm font-medium text-red-800">
                                {errorMessage}
                            </p>
                        </div>
                    </div>
                </div>
            {/if}

            <div class="flex items-center justify-end gap-x-6 pt-6">
                <button
                    type="button"
                    onclick={() => {
                        formData = {};
                        userCaptcha = "";
                        submitStatus = "idle";
                    }}
                    class="text-sm font-semibold leading-6 text-slate-900 hover:text-slate-700 transition-colors"
                >
                    Clear Form
                </button>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    class="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
                >
                    {#if isSubmitting}
                        <svg
                            class="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                class="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="4"
                            ></circle>
                            <path
                                class="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        Submitting...
                    {:else}
                        Submit Application
                    {/if}
                </button>
            </div>
        </form>
    </div>
</div>
