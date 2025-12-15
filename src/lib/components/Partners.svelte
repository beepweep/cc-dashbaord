<script lang="ts">
    const partners = [
        { name: "Ether.fi", logo: "/logos/logo-etherfi.png" },
        { name: "Gnosis", logo: "/logos/logo-gnosis.png" },
        { name: "Binance", logo: "/logos/logo-binance.png" },
        { name: "BitPay", logo: "/logos/logo-bitpay.png" },
        { name: "Coinbase", logo: "/logos/logo-coinbase.png" },
        { name: "Crypto.com", logo: "/logos/logo-crypto.png" },
        { name: "Nexo", logo: "/logos/logo-nexo.png" },
        { name: "Revolut", logo: "/logos/logo-revolut.png" },
        { name: "MetaMask", logo: "/logos/metamask.webp" },
        { name: "Bybit", logo: "/logos/bybit.png" },
        { name: "Gemini", logo: "/logos/gemini.png" },
        { name: "KuCoin", logo: "/logos/kucoin.png" },
        { name: "OKX", logo: "/logos/okx.png" },
        { name: "Wirex", logo: "/logos/wirex.png" },
        { name: "Bitrefill", logo: "/logos/bitrefill.webp" },
        { name: "Ledger", logo: "/logos/ledger.png" },
        { name: "RedotPay", logo: "/logos/redotpay.png" },
        { name: "Partner", logo: "/logos/partner-generic.png" },
    ];
</script>

<section class="relative bg-gradient-to-b from-white via-slate-50 to-white py-20 overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-1/4 w-80 h-80 bg-blue-100 rounded-full blur-[100px] opacity-50"></div>
    <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-100 rounded-full blur-[100px] opacity-50"></div>

    <div class="max-w-6xl mx-auto px-3 sm:px-5 lg:px-7 relative z-10">
        <!-- Header -->
        <div class="text-center mb-14">
            <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-5">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                <span class="text-xs font-medium text-blue-600">Featured Partners</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Current Listed Cards
            </h2>
            <p class="text-base text-slate-600 max-w-xl mx-auto">
                Explore crypto cards from leading providers worldwide. All verified and reviewed.
            </p>
        </div>

        <!-- Logo Grid with hover effects -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {#each partners as partner, index}
                <div
                    class="group relative h-24 flex items-center justify-center p-5 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                >
                    <!-- Subtle gradient on hover -->
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div class="relative w-24 h-12">
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            class="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>

                    <!-- Tooltip -->
                    <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-300 pointer-events-none">
                        <div class="px-2.5 py-1 bg-slate-900 text-white text-[10px] font-medium rounded-md whitespace-nowrap shadow-lg">
                            {partner.name}
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <!-- CTA -->
        <div class="mt-14 text-center">
            <a
                href="/explore-cards"
                class="inline-flex items-center gap-1.5 px-7 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
            >
                View All Cards
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
        </div>
    </div>
</section>
