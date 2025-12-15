<script lang="ts">
    const currentYear = new Date().getFullYear();
</script>

<footer class="bg-black text-white py-10 border-t border-slate-900">
    <div class="max-w-6xl mx-auto px-3 sm:px-5 lg:px-7">
        <div class="flex flex-col md:flex-row justify-between gap-7 mb-10">
            <div class="max-w-sm">
                <div class="flex items-center gap-2.5 mb-3">
                    <!-- Abstract Logo -->
                    <div
                        class="relative w-8 h-8 flex items-center justify-center"
                    >
                        <div
                            class="absolute w-5 h-5 bg-white/10 rounded-md transform -rotate-12 translate-x-0.5 translate-y-0.5 backdrop-blur-sm border border-white/10"
                        ></div>
                        <div
                            class="absolute w-5 h-5 bg-white rounded-md transform rotate-6 border border-white/50 shadow-lg"
                        ></div>
                    </div>
                    <span class="text-lg font-bold text-white tracking-tight"
                        >Cardforyou</span
                    >
                </div>
                <p class="text-xs text-white/60 leading-relaxed">
                    Find the perfect crypto card for your lifestyle. Compare
                    rewards, fees, and benefits instantly.
                </p>
            </div>
        </div>

        <div
            class="pt-7 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-5"
        >
            <p class="text-[10px] text-white/50 order-3 md:order-1">
                &copy; {currentYear} Cardforyou. All rights reserved.
            </p>

            <div
                class="flex flex-col md:flex-row items-center gap-5 order-1 md:order-2"
            >
                <div
                    class="flex flex-wrap justify-center gap-5 text-[10px] text-white/60 font-medium order-2 md:order-1"
                >
                    <a
                        href="/media-kit"
                        class="hover:text-white transition-colors">Media Kit</a
                    >
                    <a
                        href="/privacy-policy"
                        class="hover:text-white transition-colors"
                        >Privacy Policy</a
                    >
                    <a
                        href="/terms-of-use"
                        class="hover:text-white transition-colors"
                        >Terms of Use</a
                    >
                    <a
                        href="javascript:void(0)"
                        class="hover:text-white transition-colors"
                        >Cookie Policy</a
                    >
                </div>

                <div class="flex gap-3 order-1 md:order-2">
                    <a
                        href="javascript:void(0)"
                        class="text-white/60 hover:text-white transition-colors"
                    >
                        <span class="sr-only">Twitter</span>
                        <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            ><path
                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                            /></svg
                        >
                    </a>
                    <a
                        href="https://github.com/beepweep/cc-dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-white/60 hover:text-white transition-colors"
                    >
                        <span class="sr-only">GitHub</span>
                        <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            ><path
                                fill-rule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clip-rule="evenodd"
                            /></svg
                        >
                    </a>
                </div>
            </div>
        </div>
        <div class="mt-7 pt-7 border-t border-slate-900 text-center">
            <p
                class="text-[10px] text-white/30 max-w-3xl mx-auto leading-relaxed uppercase tracking-wider"
            >
                Disclaimer: The content on Cardforyou is for informational
                purposes only and does not constitute financial, investment, or
                other professional advice. We do not endorse any specific crypto
                card or financial product. Crypto assets are volatile and risky;
                valid information at the time of publication may change. Please
                do your own research relative to your specific situation before
                making any financial decisions. Cardforyou may earn a commission
                from affiliate links.
            </p>
        </div>
    </div>
</footer>
