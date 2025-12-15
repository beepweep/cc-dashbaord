<script lang="ts">
    import { cryptoCards } from "$lib/data";
    import { ChevronDown, Plus, Filter, Check } from "lucide-svelte";

    type FilterType = "all" | "metal" | "plastic";
    type FilterNetwork = "all" | "Visa" | "Mastercard";
    type FilterStaking = "all" | "required" | "none";
    type FilterCashback = "all" | "low" | "medium" | "high";
    type FilterFee = "all" | "free" | "paid";
    type SortBy = "rating" | "cashback" | "name";

    let selectedType = $state<FilterType>("all");
    let selectedNetwork = $state<FilterNetwork>("all");
    let selectedRegion = $state<string>("all");
    let selectedStaking = $state<FilterStaking>("all");
    let selectedCashback = $state<FilterCashback>("all");
    let selectedFee = $state<FilterFee>("all");
    let showMobileWallet = $state(false);
    let showLoungeAccess = $state(false);
    let selectedProvider = $state<string>("all");
    let sortBy = $state<SortBy>("rating");
    let compareCards = $state<string[]>([]);
    let isMobileFiltersOpen = $state(false);

    // Derived values
    let providers = $derived(
        Array.from(new Set(cryptoCards.map((card) => card.provider))),
    );
    let regions = $derived(
        Array.from(new Set(cryptoCards.flatMap((card) => card.region))).sort(),
    );

    let filteredCards = $derived(
        cryptoCards.filter((card) => {
            if (selectedType !== "all" && card.type !== selectedType)
                return false;
            if (selectedNetwork !== "all" && card.network !== selectedNetwork)
                return false;
            if (
                selectedRegion !== "all" &&
                !card.region.includes(selectedRegion) &&
                !card.region.includes("Global")
            )
                return false;
            if (selectedStaking === "required" && !card.stakingRequired)
                return false;
            if (selectedStaking === "none" && card.stakingRequired)
                return false;

            const cashbackValue = parseFloat(card.maxCashback);
            if (selectedCashback === "low" && cashbackValue >= 3) return false;
            if (
                selectedCashback === "medium" &&
                (cashbackValue < 3 || cashbackValue >= 6)
            )
                return false;
            if (selectedCashback === "high" && cashbackValue < 6) return false;

            if (selectedFee === "free" && card.annualFee !== "$0") return false;
            if (selectedFee === "paid" && card.annualFee === "$0") return false;

            if (showMobileWallet && !card.mobileWallet) return false;
            if (showLoungeAccess && !card.loungeAccess) return false;

            if (
                selectedProvider !== "all" &&
                card.provider !== selectedProvider
            )
                return false;

            return true;
        }),
    );

    let sortedCards = $derived(
        [...filteredCards].sort((a, b) => {
            if (sortBy === "rating") return b.rating - a.rating;
            if (sortBy === "cashback")
                return parseFloat(b.maxCashback) - parseFloat(a.maxCashback);
            if (sortBy === "name") return a.name.localeCompare(b.name);
            return 0;
        }),
    );

    function clearFilters() {
        selectedType = "all";
        selectedNetwork = "all";
        selectedRegion = "all";
        selectedStaking = "all";
        selectedCashback = "all";
        selectedFee = "all";
        showMobileWallet = false;
        showLoungeAccess = false;
        selectedProvider = "all";
    }

    function toggleCompare(cardId: string, e: Event) {
        e.preventDefault();
        e.stopPropagation();
        if (compareCards.includes(cardId)) {
            compareCards = compareCards.filter((id) => id !== cardId);
        } else if (compareCards.length < 3) {
            compareCards = [...compareCards, cardId];
        }
    }
</script>

<main class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div
        class="bg-gradient-to-b from-slate-50 to-white pt-28 pb-16 px-3 sm:px-5 lg:px-7 border-b border-gray-200"
    >
        <div class="max-w-6xl mx-auto text-center">
            <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Find the Perfect Crypto Card
            </h1>
            <p class="text-base text-slate-600 max-w-xl mx-auto">
                Compare fees, rewards, and staking requirements to find the best
                crypto debit or credit card for your lifestyle.
            </p>
        </div>
    </div>

    <!-- Main Content Area with Sidebar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col lg:flex-row gap-8 relative">
            <!-- Mobile Filter Overlay -->
            {#if isMobileFiltersOpen}
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div
                    class="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
                    onclick={() => (isMobileFiltersOpen = false)}
                ></div>
            {/if}

            <!-- Sidebar Filters -->
            <aside
                class={`
                fixed inset-y-0 left-0 z-50 w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-64 lg:shadow-none lg:transform-none lg:bg-transparent h-full lg:h-auto overflow-y-auto lg:overflow-visible
                ${isMobileFiltersOpen ? "translate-x-0" : "-translate-x-full"}
            `}
            >
                <div class="p-5 lg:p-0 lg:sticky lg:top-24 space-y-8">
                    <div
                        class="flex items-center justify-between lg:hidden mb-6"
                    >
                        <h2 class="text-xl font-bold text-slate-900">
                            Filters
                        </h2>
                        <button
                            onclick={() => (isMobileFiltersOpen = false)}
                            class="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50"
                            aria-label="Close filters"
                        >
                            <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        class="flex items-center justify-between lg:hidden mb-4"
                    >
                        <h2 class="text-lg font-bold text-slate-900">
                            Filters
                        </h2>
                        {#if selectedType !== "all" || selectedNetwork !== "all" || selectedRegion !== "all" || selectedStaking !== "all" || selectedCashback !== "all" || selectedFee !== "all" || showMobileWallet || showLoungeAccess || selectedProvider !== "all"}
                            <button
                                onclick={clearFilters}
                                class="text-sm text-blue-600 font-medium"
                            >
                                Reset
                            </button>
                        {/if}
                    </div>

                    <!-- Network Filter -->
                    <div class="space-y-3">
                        <h3
                            class="text-sm font-bold text-slate-900 uppercase tracking-wider"
                        >
                            Network
                        </h3>
                        <div class="space-y-2">
                            {#each ["all", "Visa", "Mastercard"] as network}
                                <label
                                    class="flex items-center gap-3 cursor-pointer group"
                                >
                                    <div
                                        class={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedNetwork === network ? "border-blue-600 bg-blue-600" : "border-slate-300 group-hover:border-slate-400 bg-white"}`}
                                    >
                                        {#if selectedNetwork === network}
                                            <div
                                                class="w-2 h-2 rounded-full bg-white"
                                            ></div>
                                        {/if}
                                    </div>
                                    <input
                                        type="radio"
                                        name="network"
                                        class="hidden"
                                        value={network}
                                        bind:group={selectedNetwork}
                                    />
                                    <span
                                        class={`text-sm ${selectedNetwork === network ? "text-slate-900 font-medium" : "text-slate-600 group-hover:text-slate-900"}`}
                                    >
                                        {network === "all"
                                            ? "All Networks"
                                            : network}
                                    </span>
                                </label>
                            {/each}
                        </div>
                    </div>

                    <hr class="border-slate-200" />

                    <!-- Region Filter -->
                    <div class="space-y-3">
                        <h3
                            class="text-sm font-bold text-slate-900 uppercase tracking-wider"
                        >
                            Region
                        </h3>
                        <div class="relative">
                            <select
                                bind:value={selectedRegion}
                                class="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-50"
                            >
                                <option value="all">Global / All Regions</option
                                >
                                {#each regions as region}
                                    <option value={region}>{region}</option>
                                {/each}
                            </select>
                            <div
                                class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500"
                            >
                                <ChevronDown size={16} />
                            </div>
                        </div>
                    </div>

                    <hr class="border-slate-200" />

                    <!-- Material Filter -->
                    <div class="space-y-3">
                        <h3
                            class="text-sm font-bold text-slate-900 uppercase tracking-wider"
                        >
                            Card Material
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            {#each ["all", "metal", "plastic"] as type}
                                <button
                                    onclick={() =>
                                        (selectedType = type as FilterType)}
                                    class={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${selectedType === type ? "bg-slate-900 border-slate-900 text-white" : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"}`}
                                >
                                    {type === "all"
                                        ? "All"
                                        : type.charAt(0).toUpperCase() +
                                          type.slice(1)}
                                </button>
                            {/each}
                        </div>
                    </div>

                    <!-- Additional filters would go here (Staking, Cashback, Fees, Features, Provider) - keeping it concise for now -->
                    <hr class="border-slate-200" />

                    <!-- Provider Filter -->
                    <div class="space-y-3">
                        <h3
                            class="text-sm font-bold text-slate-900 uppercase tracking-wider"
                        >
                            Provider
                        </h3>
                        <div class="space-y-2">
                            <label
                                class="flex items-center gap-3 cursor-pointer group"
                            >
                                <div
                                    class={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedProvider === "all" ? "border-blue-600 bg-blue-600" : "border-slate-300 group-hover:border-slate-400 bg-white"}`}
                                >
                                    {#if selectedProvider === "all"}
                                        <div
                                            class="w-2 h-2 rounded-full bg-white"
                                        ></div>
                                    {/if}
                                </div>
                                <input
                                    type="radio"
                                    name="provider"
                                    class="hidden"
                                    value="all"
                                    bind:group={selectedProvider}
                                />
                                <span
                                    class={`text-sm ${selectedProvider === "all" ? "text-slate-900 font-medium" : "text-slate-600 group-hover:text-slate-900"}`}
                                >
                                    All Providers
                                </span>
                            </label>
                            {#each providers as provider}
                                <label
                                    class="flex items-center gap-3 cursor-pointer group"
                                >
                                    <div
                                        class={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedProvider === provider ? "border-blue-600 bg-blue-600" : "border-slate-300 group-hover:border-slate-400 bg-white"}`}
                                    >
                                        {#if selectedProvider === provider}
                                            <div
                                                class="w-2 h-2 rounded-full bg-white"
                                            ></div>
                                        {/if}
                                    </div>
                                    <input
                                        type="radio"
                                        name="provider"
                                        class="hidden"
                                        value={provider}
                                        bind:group={selectedProvider}
                                    />
                                    <span
                                        class={`text-sm ${selectedProvider === provider ? "text-slate-900 font-medium" : "text-slate-600 group-hover:text-slate-900"}`}
                                    >
                                        {provider}
                                    </span>
                                </label>
                            {/each}
                        </div>
                    </div>
                </div>
            </aside>

            <!-- Main Content -->
            <div class="flex-1 min-w-0">
                <!-- Header: Count & Sort -->
                <div
                    class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"
                >
                    <div class="flex items-center gap-3">
                        <button
                            onclick={() => (isMobileFiltersOpen = true)}
                            class="lg:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                        >
                            <Filter size={20} />
                        </button>
                        <h2 class="text-lg font-bold text-slate-900">
                            {sortedCards.length} Card{sortedCards.length !== 1
                                ? "s"
                                : ""} Found
                        </h2>
                        {#if selectedType !== "all" || selectedNetwork !== "all" || selectedRegion !== "all" || selectedStaking !== "all" || selectedCashback !== "all" || selectedFee !== "all" || showMobileWallet || showLoungeAccess || selectedProvider !== "all"}
                            <button
                                onclick={clearFilters}
                                class="text-sm text-blue-600 hover:text-blue-700 font-medium ml-2 hidden lg:block"
                            >
                                Clear Filters
                            </button>
                        {/if}
                    </div>

                    <div class="flex items-center gap-2">
                        <span
                            class="text-sm font-medium text-slate-700 whitespace-nowrap"
                            >Sort by:</span
                        >
                        <div class="relative">
                            <select
                                bind:value={sortBy}
                                class="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer appearance-none"
                            >
                                <option value="rating">Top Rated</option>
                                <option value="cashback"
                                    >Highest Cashback</option
                                >
                                <option value="name">Name (A-Z)</option>
                            </select>
                            <div
                                class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500"
                            >
                                <ChevronDown size={14} />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Filters (Top) -->
                <div
                    class="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-slate-100"
                >
                    <!-- Network Quick Filter -->
                    <div class="flex items-center gap-3">
                        <span
                            class="text-sm font-bold text-slate-900 uppercase tracking-wider"
                            >Network:</span
                        >
                        <div class="flex gap-2">
                            {#each ["all", "Visa", "Mastercard"] as network}
                                <button
                                    onclick={() =>
                                        (selectedNetwork =
                                            network as FilterNetwork)}
                                    class={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                                        selectedNetwork === network
                                            ? "bg-slate-900 border-slate-900 text-white"
                                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                                    }`}
                                >
                                    {network === "all" ? "All" : network}
                                </button>
                            {/each}
                        </div>
                    </div>

                    <!-- Type Quick Filter -->
                    <div class="flex items-center gap-3">
                        <span
                            class="text-sm font-bold text-slate-900 uppercase tracking-wider"
                            >Type:</span
                        >
                        <div class="flex gap-2">
                            {#each ["all", "metal", "plastic"] as type}
                                <button
                                    onclick={() =>
                                        (selectedType = type as FilterType)}
                                    class={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                                        selectedType === type
                                            ? "bg-slate-900 border-slate-900 text-white"
                                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                                    }`}
                                >
                                    {type === "all"
                                        ? "All"
                                        : type.charAt(0).toUpperCase() +
                                          type.slice(1)}
                                </button>
                            {/each}
                        </div>
                    </div>
                </div>

                <!-- Active Filters Summary (Simplified) -->
                <div class="flex flex-wrap gap-2 mb-6">
                    {#if selectedNetwork !== "all"}
                        <span
                            class="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200"
                        >
                            Network: {selectedNetwork}
                            <button
                                onclick={() => (selectedNetwork = "all")}
                                class="hover:text-slate-900"
                                aria-label="Remove network filter"
                                ><svg
                                    class="w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    ><path
                                        d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                                    /></svg
                                ></button
                            >
                        </span>
                    {/if}
                    <!-- Add other active filters here similarly -->
                </div>

                <!-- Cards Grid -->
                <!-- Updated to 3 columns for large screens as per previous task -->
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {#each sortedCards as card (card.id)}
                        <a
                            href={`/explore-cards/${card.id}`}
                            class="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
                        >
                            <!-- Card Header - Clean Card Visual -->
                            <div
                                class="relative h-48 bg-slate-100 overflow-hidden"
                            >
                                <!-- Floating Card Visual -->
                                <div
                                    class="absolute inset-4 flex items-center justify-center"
                                >
                                    <div
                                        class={`relative w-full max-w-[280px] h-[160px] bg-gradient-to-br ${card.color} rounded-xl shadow-xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500`}
                                    >
                                        <!-- Card Background Pattern -->
                                        <div
                                            class="absolute inset-0 opacity-50"
                                        >
                                            <img
                                                src={card.image}
                                                alt={card.name}
                                                class="object-cover rounded-xl w-full h-full"
                                            />
                                        </div>

                                        <!-- Network Logo & Type Badge -->
                                        <div
                                            class="absolute bottom-4 right-4 flex gap-2"
                                        >
                                            <span
                                                class="px-2 py-0.5 bg-black/40 backdrop-blur-sm text-white text-[10px] font-medium rounded uppercase"
                                                >{card.network}</span
                                            >
                                        </div>

                                        <!-- Verification Status Badge -->
                                        <div class="absolute top-4 right-4">
                                            <span
                                                class={`px-2 py-1 text-[10px] font-semibold rounded ${
                                                    card.verificationStatus ===
                                                    "verified"
                                                        ? "bg-emerald-500 text-white"
                                                        : card.verificationStatus ===
                                                            "verification-ongoing"
                                                          ? "bg-amber-500 text-white"
                                                          : "bg-slate-500 text-white"
                                                }`}
                                            >
                                                {#if card.verificationStatus === "verified"}
                                                    ✓ Verified
                                                {:else if card.verificationStatus === "verification-ongoing"}
                                                    Pending
                                                {:else}
                                                    Unverified
                                                {/if}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Card Body -->
                            <div class="p-5">
                                <div
                                    class="flex justify-between items-start mb-4"
                                >
                                    <div>
                                        <h3
                                            class="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                                        >
                                            {card.name}
                                        </h3>
                                        <p class="text-sm text-slate-500">
                                            {card.provider}
                                        </p>
                                    </div>
                                    <div class="flex flex-col items-end">
                                        <div
                                            class="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg"
                                        >
                                            <span class="text-amber-500 text-xs"
                                                >★</span
                                            >
                                            <span
                                                class="text-sm font-bold text-slate-900"
                                                >{card.rating}</span
                                            >
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-2 gap-4 mb-4">
                                    <div class="bg-slate-50 p-3 rounded-xl">
                                        <p
                                            class="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1"
                                        >
                                            Cashback
                                        </p>
                                        <p
                                            class="text-sm font-bold text-slate-900"
                                        >
                                            {card.baseCashback} - {card.maxCashback}
                                        </p>
                                    </div>
                                    <div class="bg-slate-50 p-3 rounded-xl">
                                        <p
                                            class="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1"
                                        >
                                            Annual Fee
                                        </p>
                                        <p
                                            class="text-sm font-bold text-slate-900"
                                        >
                                            {card.annualFee}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    class="flex gap-2 mb-5 overflow-x-auto pb-2 scrollbar-none"
                                >
                                    {#each card.features.slice(0, 3) as feature}
                                        <span
                                            class="whitespace-nowrap px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] font-medium rounded-full border border-slate-200"
                                        >
                                            {feature}
                                        </span>
                                    {/each}
                                </div>

                                <div class="flex gap-3">
                                    <button
                                        class="flex-1 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</main>
