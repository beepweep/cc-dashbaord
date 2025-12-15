<script lang="ts">
    import { page } from "$app/stores";
    import { cryptoCards } from "$lib/data";

    let cardId = $derived($page.params.id);
    let card = $derived(cryptoCards.find((c) => c.id === cardId));
    let similarCards = $derived(
        card
            ? cryptoCards
                  .filter(
                      (c) => c.id !== cardId && c.provider === card.provider,
                  )
                  .slice(0, 3)
            : [],
    );
</script>

{#if card}
    <main class="min-h-screen bg-white">
        <!-- Hero Section -->
        <section class="relative pt-28 pb-16 overflow-hidden">
            <!-- Background -->
            <div
                class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"
            >
                <div class="absolute inset-0 opacity-10">
                    <img
                        src={card.image}
                        alt={card.name}
                        class="object-cover w-full h-full"
                    />
                </div>
            </div>

            <div class="relative z-10 max-w-6xl mx-auto px-3 sm:px-5 lg:px-7">
                <div class="flex flex-col lg:flex-row gap-10 items-center">
                    <!-- Card Image - Clean Design -->
                    <div
                        class={`relative w-72 h-44 lg:w-80 lg:h-52 bg-gradient-to-br ${card.color} rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500`}
                    >
                        <!-- Card Background -->
                        <img
                            src={card.image}
                            alt={card.name}
                            class="object-cover w-full h-full opacity-50"
                        />

                        <!-- Verification Status Badge -->
                        <div class="absolute top-4 right-4">
                            <span
                                class={`px-3 py-1.5 text-xs font-semibold rounded-lg ${
                                    card.verificationStatus === "verified"
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
                                    ⏳ Pending
                                {:else}
                                    Unverified
                                {/if}
                            </span>
                        </div>
                    </div>

                    <!-- Card Info -->
                    <div class="text-center lg:text-left flex-1">
                        <!-- Badges -->
                        <div
                            class="flex flex-wrap gap-3 justify-center lg:justify-start mb-6"
                        >
                            <span
                                class="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30 capitalize"
                            >
                                {card.type} Card
                            </span>
                            <span
                                class="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30"
                            >
                                {card.network}
                            </span>
                        </div>

                        <h1
                            class="text-4xl lg:text-6xl font-bold text-white mb-2"
                        >
                            {card.name}
                        </h1>
                        <p class="text-xl text-white/80 mb-6">
                            by {card.provider}
                        </p>

                        <!-- Cashback Highlight -->
                        <div
                            class="inline-flex items-center gap-3 bg-emerald-500/20 border border-emerald-400/30 rounded-2xl px-6 py-4 mb-6"
                        >
                            <div class="text-4xl font-bold text-emerald-400">
                                {card.baseCashback}
                            </div>
                            <div class="text-left">
                                <div class="text-white font-medium">
                                    Cashback
                                </div>
                                <div class="text-white/60 text-sm">
                                    on all purchases
                                </div>
                            </div>
                        </div>

                        <!-- Rating -->
                        <div
                            class="flex items-center gap-2 justify-center lg:justify-start mb-8"
                        >
                            <div class="flex">
                                {#each Array(5) as _, i}
                                    <svg
                                        class={`w-6 h-6 ${i < Math.floor(card.rating) ? "text-yellow-400" : "text-white/30"}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                {/each}
                            </div>
                            <span class="text-xl font-semibold text-white"
                                >{card.rating}</span
                            >
                        </div>

                        <div
                            class="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#"
                                class="px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-white/90 hover:scale-105 transition-all shadow-lg"
                            >
                                Apply Now
                            </a>
                            <a
                                href="/compare-cards"
                                class="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all"
                            >
                                Compare Cards
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Details Section -->
        <section class="py-16">
            <div class="max-w-6xl mx-auto px-3 sm:px-5 lg:px-7">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <!-- Main Content -->
                    <div class="lg:col-span-2 space-y-12">
                        <!-- Description -->
                        {#if card.description}
                            <div>
                                <h2
                                    class="text-2xl font-bold text-slate-900 mb-4"
                                >
                                    About This Card
                                </h2>
                                <p
                                    class="text-lg text-slate-600 leading-relaxed"
                                >
                                    {card.description}
                                </p>
                            </div>
                        {/if}

                        <!-- Features -->
                        <div>
                            <h2 class="text-2xl font-bold text-slate-900 mb-6">
                                Key Features
                            </h2>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {#each card.features as feature}
                                    <div
                                        class="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
                                    >
                                        <div
                                            class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"
                                        >
                                            <svg
                                                class="w-5 h-5 text-green-600"
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
                                        <span class="font-medium text-slate-900"
                                            >{feature}</span
                                        >
                                    </div>
                                {/each}
                            </div>
                        </div>

                        <!-- Pros & Cons -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {#if card.pros}
                                <div>
                                    <h3
                                        class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"
                                    >
                                        <span
                                            class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"
                                            >✓</span
                                        >
                                        Pros
                                    </h3>
                                    <ul class="space-y-3">
                                        {#each card.pros as pro}
                                            <li
                                                class="flex items-start gap-3 text-slate-600"
                                            >
                                                <span
                                                    class="text-green-500 mt-1"
                                                    >•</span
                                                >
                                                {pro}
                                            </li>
                                        {/each}
                                    </ul>
                                </div>
                            {/if}
                            {#if card.cons}
                                <div>
                                    <h3
                                        class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"
                                    >
                                        <span
                                            class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600"
                                            >✗</span
                                        >
                                        Cons
                                    </h3>
                                    <ul class="space-y-3">
                                        {#each card.cons as con}
                                            <li
                                                class="flex items-start gap-3 text-slate-600"
                                            >
                                                <span class="text-red-500 mt-1"
                                                    >•</span
                                                >
                                                {con}
                                            </li>
                                        {/each}
                                    </ul>
                                </div>
                            {/if}
                        </div>
                    </div>

                    <!-- Sidebar -->
                    <div class="space-y-8">
                        <!-- Quick Stats -->
                        <div class="bg-slate-50 rounded-3xl p-8">
                            <h3 class="text-xl font-bold text-slate-900 mb-6">
                                Quick Stats
                            </h3>
                            <div class="space-y-4">
                                <div
                                    class="flex justify-between items-center py-3 border-b border-slate-200"
                                >
                                    <span class="text-slate-600">Cashback</span>
                                    <span
                                        class="text-2xl font-bold text-blue-600"
                                        >{card.baseCashback}</span
                                    >
                                </div>
                                <div
                                    class="flex justify-between items-center py-3 border-b border-slate-200"
                                >
                                    <span class="text-slate-600"
                                        >Annual Fee</span
                                    >
                                    <span class="font-semibold text-slate-900"
                                        >{card.annualFee}</span
                                    >
                                </div>
                                <div
                                    class="flex justify-between items-center py-3 border-b border-slate-200"
                                >
                                    <span class="text-slate-600">FX Fee</span>
                                    <span class="font-semibold text-slate-900"
                                        >{card.fxFee}</span
                                    >
                                </div>
                                <div
                                    class="flex justify-between items-center py-3 border-b border-slate-200"
                                >
                                    <span class="text-slate-600"
                                        >Staking Required</span
                                    >
                                    <span class="font-semibold text-slate-900"
                                        >{card.stakingRequired
                                            ? card.stakingAmount
                                            : "None"}</span
                                    >
                                </div>
                                {#if card.atmLimit}
                                    <div
                                        class="flex justify-between items-center py-3 border-b border-slate-200"
                                    >
                                        <span class="text-slate-600"
                                            >ATM Limit</span
                                        >
                                        <span
                                            class="font-semibold text-slate-900"
                                            >{card.atmLimit}</span
                                        >
                                    </div>
                                {/if}
                                {#if card.dailyLimit}
                                    <div
                                        class="flex justify-between items-center py-3"
                                    >
                                        <span class="text-slate-600"
                                            >Daily Limit</span
                                        >
                                        <span
                                            class="font-semibold text-slate-900"
                                            >{card.dailyLimit}</span
                                        >
                                    </div>
                                {/if}
                            </div>
                        </div>

                        <!-- CTA -->
                        <div
                            class={`rounded-3xl p-8 bg-gradient-to-br ${card.color}`}
                        >
                            <h3 class="text-xl font-bold text-white mb-4">
                                Ready to Apply?
                            </h3>
                            <p class="text-white/80 mb-6">
                                Get started with {card.name} today and start earning
                                {card.baseCashback} cashback on all purchases.
                            </p>
                            <a
                                href="#"
                                class="block w-full py-4 bg-white text-slate-900 font-semibold rounded-full text-center hover:bg-white/90 transition-all hover:scale-105"
                            >
                                Apply Now →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Similar Cards -->
        {#if similarCards.length > 0}
            <section class="py-16 bg-slate-50">
                <div class="max-w-6xl mx-auto px-3 sm:px-5 lg:px-7">
                    <h2 class="text-2xl font-bold text-slate-900 mb-7">
                        Other Cards from {card.provider}
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {#each similarCards as similarCard}
                            <a
                                href={`/explore-cards/${similarCard.id}`}
                                class="group"
                            >
                                <div
                                    class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                                >
                                    <div
                                        class={`relative h-40 bg-gradient-to-br ${similarCard.color}`}
                                    >
                                        <img
                                            src={similarCard.image}
                                            alt={similarCard.name}
                                            class="object-cover w-full h-full opacity-30"
                                        />
                                        <div
                                            class="absolute bottom-4 left-4 text-white"
                                        >
                                            <div class="text-2xl font-bold">
                                                {similarCard.baseCashback}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-6">
                                        <h3
                                            class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                                        >
                                            {similarCard.name}
                                        </h3>
                                        <p class="text-slate-600">
                                            {similarCard.provider}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        {/each}
                    </div>
                </div>
            </section>
        {/if}
    </main>
{:else}
    <div class="min-h-screen grid place-items-center">
        <h1 class="text-2xl">Card not found</h1>
    </div>
{/if}
