<script lang="ts">
    import { Check } from "lucide-svelte";

    let formData = $state({
        cardName: "",
        provider: "",
        website: "",
        email: "",
        additionalInfo: "",
    });
    let isSubmitted = $state(false);

    function handleSubmit(e: Event) {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log("Request submitted:", $state.snapshot(formData));
        isSubmitted = true;
    }
</script>

<main class="min-h-screen bg-white">
    {#if isSubmitted}
        <div
            class="bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        >
            <div class="max-w-2xl mx-auto text-center">
                <div
                    class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <Check size={40} class="text-green-600" />
                </div>
                <h1 class="text-3xl font-bold text-slate-900 mb-4">
                    Request Submitted!
                </h1>
                <p class="text-lg text-slate-600 mb-8">
                    Thank you for your request. We'll review the card and add it
                    to our database soon.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/explore-cards"
                        class="px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
                    >
                        Explore Cards
                    </a>
                    <a
                        href="/compare-cards"
                        class="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors"
                    >
                        Compare Cards
                    </a>
                </div>
            </div>
        </div>
    {:else}
        <!-- Hero Section -->
        <div
            class="bg-gradient-to-b from-slate-50 to-white pt-28 pb-10 px-3 sm:px-5 lg:px-7 border-b border-gray-200"
        >
            <div class="max-w-2xl mx-auto text-center">
                <div
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium mb-5"
                >
                    <svg
                        class="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                    Request a Card
                </div>
                <h1 class="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    Can't Find a Card?
                </h1>
                <p class="text-base text-slate-600 max-w-xl mx-auto">
                    Let us know which crypto card you'd like to see on
                    Cardforyou. We'll review your request and add it to our
                    database.
                </p>
            </div>
        </div>

        <!-- Form Section -->
        <div class="max-w-xl mx-auto px-3 sm:px-5 lg:px-7 py-10">
            <form onsubmit={handleSubmit} class="space-y-6">
                <!-- Card Name -->
                <div>
                    <label
                        for="cardName"
                        class="block text-sm font-medium text-slate-900 mb-2"
                    >
                        Card Name <span class="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        required
                        bind:value={formData.cardName}
                        placeholder="e.g., Obsidian Card, Ruby Steel Card"
                        class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                    />
                </div>

                <!-- Provider -->
                <div>
                    <label
                        for="provider"
                        class="block text-sm font-medium text-slate-900 mb-2"
                    >
                        Card Provider <span class="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="provider"
                        name="provider"
                        required
                        bind:value={formData.provider}
                        placeholder="e.g., Crypto.com, Binance, Nexo"
                        class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                    />
                </div>

                <!-- Website -->
                <div>
                    <label
                        for="website"
                        class="block text-sm font-medium text-slate-900 mb-2"
                    >
                        Provider Website
                    </label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        bind:value={formData.website}
                        placeholder="https://example.com"
                        class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                    />
                </div>

                <!-- Email -->
                <div>
                    <label
                        for="email"
                        class="block text-sm font-medium text-slate-900 mb-2"
                    >
                        Your Email <span class="text-slate-400 font-normal"
                            >(optional - to notify when added)</span
                        >
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        bind:value={formData.email}
                        placeholder="your@email.com"
                        class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                    />
                </div>

                <!-- Additional Info -->
                <div>
                    <label
                        for="additionalInfo"
                        class="block text-sm font-medium text-slate-900 mb-2"
                    >
                        Additional Information
                    </label>
                    <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        rows="4"
                        bind:value={formData.additionalInfo}
                        placeholder="Any additional details about the card (cashback rates, features, etc.)"
                        class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400 resize-none"
                    ></textarea>
                </div>

                <!-- Submit Button -->
                <div class="pt-4">
                    <button
                        type="submit"
                        class="w-full px-6 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                    >
                        Submit Request
                    </button>
                </div>

                <!-- Info Note -->
                <p class="text-sm text-slate-500 text-center">
                    We typically review and add new cards within 3-5 business
                    days.
                </p>
            </form>

            <!-- Alternative CTA -->
            <div
                class="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center"
            >
                <h3 class="text-lg font-semibold text-slate-900 mb-2">
                    Are you a card provider?
                </h3>
                <p class="text-sm text-slate-600 mb-4">
                    If you're a crypto card company looking to get listed,
                    please use our official listing form.
                </p>
                <a
                    href="/get-listed"
                    class="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                    Go to Get Listed
                    <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </div>
        </div>
    {/if}
</main>
