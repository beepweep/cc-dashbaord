<script lang="ts">
    import { page } from '$app/state';

    let isLightPage = $derived(
        page.url.pathname.includes('/privacy-policy') ||
        page.url.pathname.includes('/terms-of-use') ||
        page.url.pathname.includes('/get-listed') ||
        page.url.pathname.includes('/media-kit') ||
        page.url.pathname.includes('/blog') ||
        page.url.pathname.includes('/explore-cards') ||
        page.url.pathname.includes('/compare-cards') ||
        page.url.pathname.includes('/request-card') ||
        page.url.pathname.includes('/affiliate-program')
    );
</script>

<header class="absolute top-0 left-0 right-0 z-50 px-7 py-7 flex items-center justify-between">
    <!-- Brand -->
    <a href="/" class="flex items-center gap-2.5 group">
        <div class="relative w-8 h-8 flex items-center justify-center">
            <div class={`absolute w-5 h-5 rounded-md transform -rotate-12 translate-x-0.5 translate-y-0.5 backdrop-blur-sm transition-transform group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 ${isLightPage ? 'bg-slate-900/20 border border-slate-900/20' : 'bg-white/20 border border-white/20'}`}></div>
            <div class={`absolute w-5 h-5 rounded-md transform rotate-6 shadow-lg transition-transform group-hover:rotate-0 ${isLightPage ? 'bg-slate-900 border border-slate-900/50' : 'bg-white border border-white/50'}`}></div>
        </div>
        <span class={`text-lg font-bold tracking-tight drop-shadow-md ${isLightPage ? 'text-slate-900' : 'text-white'}`}>Cardforyou</span>
    </a>

    <!-- Navigation & CTA -->
    <div class="flex items-center gap-2.5">
        <nav class="hidden md:flex items-center gap-3">
            <a href="/explore-cards" class={`font-medium text-xs transition-colors drop-shadow-sm ${isLightPage ? 'text-slate-700 hover:text-slate-900' : 'text-white/80 hover:text-white'}`}>Explore cards</a>
            <a href="/compare-cards" class={`font-medium text-xs transition-colors drop-shadow-sm ${isLightPage ? 'text-slate-700 hover:text-slate-900' : 'text-white/80 hover:text-white'}`}>Compare cards</a>
            <a href="/get-listed" class={`font-medium text-xs transition-colors drop-shadow-sm ${isLightPage ? 'text-slate-700 hover:text-slate-900' : 'text-white/80 hover:text-white'}`}>Get listed</a>
            <a href="/blog" class={`font-medium text-xs transition-colors drop-shadow-sm ${isLightPage ? 'text-slate-700 hover:text-slate-900' : 'text-white/80 hover:text-white'}`}>Blog</a>
        </nav>
        <a href="/affiliate-program">
            <button
                class={`px-4 py-1.5 rounded-full text-xs font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 ${isLightPage
                    ? 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                    : 'border-2 border-white/50 text-white hover:bg-white/10'
                    }`}
            >
                Affiliate program
            </button>
        </a>
        <button
            class={`px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${isLightPage
                ? 'bg-slate-900 border border-slate-900 text-white hover:bg-slate-800'
                : 'bg-white/20 border border-white/50 text-white hover:bg-white/30'
                }`}
        >
            Pick for me
        </button>
    </div>
</header>
