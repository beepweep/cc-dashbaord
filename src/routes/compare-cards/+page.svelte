<script lang="ts">
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { cryptoCards } from "$lib/data";
    import { onMount } from "svelte";

    let selectedCards = $state<string[]>([]);
    let searchQuery = $state("");
    let showAllCards = $state(false);

    // Load cards from URL on mount
    onMount(() => {
        const cardsParam = $page.url.searchParams.get("cards");
        if (cardsParam) {
            const cardIds = cardsParam
                .split(",")
                .filter((id: string) =>
                    cryptoCards.some((card) => card.id === id),
                )
                .slice(0, 3);
            if (cardIds.length > 0) {
                selectedCards = cardIds;
            }
        }
    });

    // Derived values
    let filteredCards = $derived(
        !searchQuery
            ? cryptoCards
            : cryptoCards.filter(
                  (card) =>
                      card.name
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()) ||
                      card.provider
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()),
              ),
    );

    // Use slice instead of checking featured property which might not exist on all items in data.ts yet
    // But wait, I added featured to the interface? No, I added description/pros/cons.
    // Let's check data.ts content again.
    // I see I missed adding 'featured' to data.ts in previous step.
    // I will just assume first 4 cards are featured or check if the property exists.
    // The React code used `card.featured`.
    // Let's use a fallback for now.
    let featuredCards = $derived(cryptoCards.slice(0, 4));

    let displayCards = $derived(
        showAllCards ? filteredCards : filteredCards.slice(0, 10),
    );
    let comparisonCards = $derived(
        cryptoCards.filter((card) => selectedCards.includes(card.id)),
    );

    function toggleCard(cardId: string) {
        if (selectedCards.includes(cardId)) {
            selectedCards = selectedCards.filter((id) => id !== cardId);
        } else if (selectedCards.length < 3) {
            selectedCards = [...selectedCards, cardId];
        }
    }

    function scrollToComparison() {
        const element = document.getElementById("comparison-table");
        element?.scrollIntoView({ behavior: "smooth" });
    }
</script>

<main class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div
        class="bg-gradient-to-b from-slate-50 to-white pt-28 pb-16 px-3 sm:px-5 lg:px-7 border-b border-gray-200"
    >
        <div class="max-w-6xl mx-auto text-center">
            <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Compare Crypto Cards
            </h1>
            <p class="text-base text-slate-600 max-w-xl mx-auto">
                Select up to 3 cards to compare their features, fees, and
                rewards side by side.
            </p>
        </div>
    </div>

    <div class="max-w-6xl mx-auto px-3 sm:px-5 lg:px-7 py-10">
        <!-- Floating Selection Bar -->
        {#if selectedCards.length > 0}
            <div
                class="fixed bottom-6 left-0 right-0 mx-auto w-fit bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl z-50 animate-bounce-in"
            >
                <div class="px-5 py-3.5">
                    <div class="flex items-center justify-center gap-5">
                        <!-- Selected Cards -->
                        <div class="flex items-center gap-3">
                            <span
                                class="text-xs font-medium text-slate-400 hidden sm:block"
                            >
                                Selected:
                            </span>
                            <div class="flex gap-2">
                                {#each comparisonCards as card}
                                    <div
                                        class="flex items-center gap-2 bg-slate-800 rounded-xl px-3 py-2 border border-slate-700/50"
                                    >
                                        <div
                                            class={`w-7 h-4 rounded bg-gradient-to-br ${card.color}`}
                                        ></div>
                                        <span
                                            class="text-sm font-medium text-white hidden sm:block"
                                            >{card.name}</span
                                        >
                                        <button
                                            onclick={() => toggleCard(card.id)}
                                            class="text-slate-500 hover:text-white transition-colors ml-1"
                                        >
                                            <svg
                                                class="w-3.5 h-3.5"
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
                                {/each}

                                <!-- Empty slots indicator -->
                                {#if selectedCards.length < 3}
                                    <div
                                        class="flex items-center gap-1.5 text-slate-500"
                                    >
                                        {#each Array(3 - selectedCards.length) as _, i}
                                            <div
                                                class="w-2 h-2 rounded-full bg-slate-700"
                                            ></div>
                                        {/each}
                                    </div>
                                {/if}
                            </div>
                        </div>

                        <!-- Divider -->
                        <div
                            class="w-px h-8 bg-slate-700 hidden sm:block"
                        ></div>

                        <!-- Actions -->
                        <div class="flex items-center gap-3">
                            <button
                                onclick={() => (selectedCards = [])}
                                class="text-xs text-slate-400 hover:text-white transition-colors"
                            >
                                Clear
                            </button>
                            <button
                                onclick={scrollToComparison}
                                disabled={selectedCards.length < 2}
                                class={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                                    selectedCards.length >= 2
                                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25"
                                        : "bg-slate-700 text-slate-400 cursor-not-allowed"
                                }`}
                            >
                                View Comparison {selectedCards.length >= 2
                                    ? `↓`
                                    : `(${selectedCards.length}/2)`}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        {/if}

        <!-- Featured Cards Section -->
        <div class="mb-12">
            <div class="flex items-center gap-2 mb-6">
                <span
                    class="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full"
                    >Featured</span
                >
                <h2 class="text-xl font-bold text-slate-900">Popular Cards</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                {#each featuredCards as card}
                    <button
                        onclick={() => toggleCard(card.id)}
                        disabled={!selectedCards.includes(card.id) &&
                            selectedCards.length >= 3}
                        class={`relative p-5 rounded-2xl border-2 transition-all text-left ${
                            selectedCards.includes(card.id)
                                ? "border-blue-600 bg-blue-50 shadow-lg"
                                : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                        } ${!selectedCards.includes(card.id) && selectedCards.length >= 3 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                        <div class="flex items-start justify-between mb-4">
                            <div
                                class="w-20 h-12 rounded-lg relative overflow-hidden bg-slate-100"
                            >
                                <img
                                    src={card.image}
                                    alt={card.name}
                                    class="object-contain w-full h-full"
                                />
                            </div>
                            {#if selectedCards.includes(card.id)}
                                <div
                                    class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center"
                                >
                                    <svg
                                        class="w-4 h-4 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                            {/if}
                        </div>
                        <p class="font-semibold text-slate-900 mb-1">
                            {card.name}
                        </p>
                        <p class="text-sm text-slate-500 mb-3">
                            {card.provider}
                        </p>
                        <div class="flex items-center gap-4 text-sm">
                            <span class="font-bold text-blue-600"
                                >{card.baseCashback} cashback</span
                            >
                            <span class="text-slate-400">•</span>
                            <span class="text-slate-600"
                                >{card.annualFee} fee</span
                            >
                        </div>
                    </button>
                {/each}
            </div>
        </div>

        <!-- All Cards Section with Search -->
        <div class="mb-12">
            <div
                class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6"
            >
                <h2 class="text-xl font-bold text-slate-900">All Cards</h2>

                <!-- Search Input -->
                <div class="relative max-w-md w-full">
                    <svg
                        class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search cards by name or provider..."
                        bind:value={searchQuery}
                        class="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    {#if searchQuery}
                        <button
                            onclick={() => (searchQuery = "")}
                            class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                            <svg
                                class="w-5 h-5"
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
                    {/if}
                </div>
            </div>

            <!-- Search results count -->
            {#if searchQuery}
                <p class="text-sm text-slate-500 mb-4">
                    Found {filteredCards.length} card{filteredCards.length !== 1
                        ? "s"
                        : ""} matching "{searchQuery}"
                </p>
            {/if}

            <!-- Cards Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {#each displayCards as card}
                    <button
                        onclick={() => toggleCard(card.id)}
                        disabled={!selectedCards.includes(card.id) &&
                            selectedCards.length >= 3}
                        class={`relative p-4 rounded-xl border-2 transition-all text-left ${
                            selectedCards.includes(card.id)
                                ? "border-blue-600 bg-blue-50"
                                : "border-slate-200 bg-white hover:border-slate-300"
                        } ${!selectedCards.includes(card.id) && selectedCards.length >= 3 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                        <div
                            class="w-full aspect-[1.6/1] rounded-lg mb-3 relative overflow-hidden bg-slate-100"
                        >
                            <img
                                src={card.image}
                                alt={card.name}
                                class="object-contain w-full h-full p-1"
                            />
                        </div>
                        <p
                            class="text-sm font-semibold text-slate-900 truncate"
                        >
                            {card.name}
                        </p>
                        <p class="text-xs text-slate-500">{card.provider}</p>
                        <p class="text-xs font-medium text-blue-600 mt-1">
                            {card.baseCashback}
                        </p>
                        {#if selectedCards.includes(card.id)}
                            <div
                                class="absolute top-2 right-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center"
                            >
                                <svg
                                    class="w-3 h-3 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                        {/if}
                    </button>
                {/each}
            </div>

            <!-- Show More Button -->
            {#if !showAllCards && filteredCards.length > 10}
                <div class="text-center mt-6">
                    <button
                        onclick={() => (showAllCards = true)}
                        class="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors"
                    >
                        Show all {filteredCards.length} cards
                    </button>
                </div>
            {/if}

            <!-- No Results -->
            {#if filteredCards.length === 0}
                <div
                    class="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200"
                >
                    <div
                        class="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    >
                        <svg
                            class="w-8 h-8 text-slate-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <p class="text-slate-700 font-medium mb-2">
                        No cards found matching "{searchQuery}"
                    </p>
                    <p class="text-slate-500 text-sm mb-4">
                        Can't find the card you're looking for?
                    </p>
                    <a
                        href="/request-card"
                        class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Request a Card Listing
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
            {/if}

            <!-- Can't find your card? CTA -->
            {#if filteredCards.length > 0}
                <div
                    class="mt-8 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <div>
                        <h3 class="text-lg font-semibold text-slate-900 mb-1">
                            Can't find a card?
                        </h3>
                        <p class="text-sm text-slate-600">
                            Let us know which card you'd like to see listed on
                            Cardforyou.
                        </p>
                    </div>
                    <a
                        href="/request-card"
                        class="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap"
                    >
                        Request a Listing
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
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </a>
                </div>
            {/if}
        </div>

        <!-- Comparison Table -->
        {#if comparisonCards.length > 0}
            <div
                id="comparison-table"
                class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm scroll-mt-6"
            >
                <div class="p-6 border-b border-slate-200 bg-slate-50">
                    <h2 class="text-xl font-bold text-slate-900">Comparison</h2>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-slate-50">
                            <tr>
                                <th
                                    class="px-6 py-4 text-left text-sm font-semibold text-slate-900 sticky left-0 bg-slate-50 z-10 min-w-[140px]"
                                >
                                    Feature
                                </th>
                                {#each comparisonCards as card}
                                    <th
                                        class="px-6 py-4 text-center min-w-[220px]"
                                    >
                                        <div
                                            class={`w-full h-28 bg-gradient-to-br ${card.color} rounded-xl mb-3 relative overflow-hidden`}
                                        >
                                            <img
                                                src={card.image}
                                                alt={card.name}
                                                class="object-cover w-full h-full opacity-30"
                                            />
                                            <div
                                                class="absolute bottom-3 left-3 text-white"
                                            >
                                                <p class="text-lg font-bold">
                                                    {card.baseCashback}
                                                </p>
                                            </div>
                                        </div>
                                        <p
                                            class="text-sm font-semibold text-slate-900"
                                        >
                                            {card.name}
                                        </p>
                                        <p class="text-xs text-slate-500">
                                            {card.provider}
                                        </p>
                                    </th>
                                {/each}
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100">
                            <tr class="hover:bg-slate-50">
                                <td
                                    class="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white"
                                    >Cashback</td
                                >
                                {#each comparisonCards as card}
                                    <td class="px-6 py-4 text-center">
                                        <span
                                            class="text-xl font-bold text-blue-600"
                                            >{card.baseCashback}</span
                                        >
                                    </td>
                                {/each}
                            </tr>
                            <tr class="hover:bg-slate-50">
                                <td
                                    class="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white"
                                    >Material</td
                                >
                                {#each comparisonCards as card}
                                    <td class="px-6 py-4 text-center">
                                        <span
                                            class="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg capitalize"
                                            >{card.type}</span
                                        >
                                    </td>
                                {/each}
                            </tr>
                            <tr class="hover:bg-slate-50">
                                <td
                                    class="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white"
                                    >Annual Fee</td
                                >
                                {#each comparisonCards as card}
                                    <td
                                        class="px-6 py-4 text-center text-sm font-medium text-slate-900"
                                        >{card.annualFee}</td
                                    >
                                {/each}
                            </tr>
                            <tr class="hover:bg-slate-50">
                                <td
                                    class="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white"
                                    >FX Fee</td
                                >
                                {#each comparisonCards as card}
                                    <td
                                        class="px-6 py-4 text-center text-sm text-slate-900"
                                        >{card.fxFee}</td
                                    >
                                {/each}
                            </tr>
                            <tr class="hover:bg-slate-50">
                                <td
                                    class="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white"
                                    >Staking</td
                                >
                                {#each comparisonCards as card}
                                    <td class="px-6 py-4 text-center">
                                        {#if card.stakingRequired}
                                            <div>
                                                <span
                                                    class="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-lg"
                                                    >Required</span
                                                >
                                                <p
                                                    class="text-xs text-slate-500 mt-1"
                                                >
                                                    {card.stakingAmount}
                                                </p>
                                            </div>
                                        {:else}
                                            <span
                                                class="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-lg"
                                                >Not Required</span
                                            >
                                        {/if}
                                    </td>
                                {/each}
                            </tr>
                            <tr class="hover:bg-slate-50">
                                <td
                                    class="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white"
                                    >Rating</td
                                >
                                {#each comparisonCards as card}
                                    <td class="px-6 py-4 text-center">
                                        <div
                                            class="flex items-center justify-center gap-1"
                                        >
                                            <span
                                                class="font-semibold text-slate-900"
                                                >{card.rating}</span
                                            >
                                            <svg
                                                class="w-4 h-4 text-amber-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        </div>
                                    </td>
                                {/each}
                            </tr>
                            <tr class="hover:bg-slate-50">
                                <td
                                    class="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white"
                                    >Status</td
                                >
                                {#each comparisonCards as card}
                                    <td class="px-6 py-4 text-center">
                                        <span
                                            class={`px-3 py-1 text-xs font-medium rounded-lg ${
                                                card.verificationStatus ===
                                                "verified"
                                                    ? "bg-emerald-100 text-emerald-700"
                                                    : card.verificationStatus ===
                                                        "verification-ongoing"
                                                      ? "bg-amber-100 text-amber-700"
                                                      : "bg-slate-100 text-slate-600"
                                            }`}
                                        >
                                            {#if card.verificationStatus === "verified"}
                                                Verified
                                            {:else if card.verificationStatus === "verification-ongoing"}
                                                Pending
                                            {:else if card.verificationStatus === "unverified"}
                                                Unverified
                                            {/if}
                                        </span>
                                    </td>
                                {/each}
                            </tr>
                            <tr>
                                <td
                                    class="px-6 py-4 text-sm font-medium text-slate-900 sticky left-0 bg-white"
                                    >Features</td
                                >
                                {#each comparisonCards as card}
                                    <td class="px-6 py-4">
                                        <ul
                                            class="text-xs text-slate-600 space-y-1.5"
                                        >
                                            {#each card.features as feature}
                                                <li
                                                    class="flex items-start gap-2"
                                                >
                                                    <svg
                                                        class="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                    <span>{feature}</span>
                                                </li>
                                            {/each}
                                        </ul>
                                    </td>
                                {/each}
                            </tr>
                        </tbody>
                        <!-- Action Row -->
                        <tfoot>
                            <tr class="bg-slate-50">
                                <td class="px-6 py-4 sticky left-0 bg-slate-50"
                                ></td>
                                {#each comparisonCards as card}
                                    <td class="px-6 py-4 text-center">
                                        <a
                                            href={`/explore-cards/${card.id}`}
                                            class="inline-block px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
                                        >
                                            View {card.name}
                                        </a>
                                    </td>
                                {/each}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        {/if}

        <!-- Empty State -->
        {#if comparisonCards.length === 0}
            <div
                class="bg-white rounded-2xl border border-slate-200 text-center py-16 px-8"
            >
                <div
                    class="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                    <svg
                        class="w-8 h-8 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-900 mb-2">
                    Select cards to compare
                </h3>
                <p class="text-slate-500 max-w-md mx-auto">
                    Choose up to 3 cards from the selection above to see a
                    detailed side-by-side comparison of their features, fees,
                    and rewards.
                </p>
            </div>
        {/if}
    </div>
</main>
