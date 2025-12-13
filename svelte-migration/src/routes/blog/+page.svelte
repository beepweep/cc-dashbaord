<script lang="ts">
    import { blogPosts } from "$lib/blog-data";
</script>

<main class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div
        class="bg-gradient-to-b from-slate-50 to-white pt-28 pb-16 px-3 sm:px-5 lg:px-7 border-b border-gray-200"
    >
        <div class="max-w-6xl mx-auto text-center">
            <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Crypto Card Insights
            </h1>
            <p class="text-base text-slate-600 max-w-xl mx-auto">
                Expert guides, comparisons, and tips to help you make the most
                of your crypto cards
            </p>
        </div>
    </div>

    <!-- Blog Grid -->
    <div class="max-w-6xl mx-auto px-3 sm:px-5 lg:px-7 py-14">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {#each blogPosts as post}
                <article
                    class="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                    <!-- Image -->
                    <div
                        class="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            class="object-cover w-full h-full opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-300"
                        />
                        <div class="absolute top-4 left-4">
                            <span
                                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-slate-900 backdrop-blur-sm"
                            >
                                {post.category}
                            </span>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="p-6">
                        <div
                            class="flex items-center gap-3 text-xs text-slate-500 mb-3"
                        >
                            <time>{post.date}</time>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>

                        <a href={`/blog/${post.id}`}>
                            <h2
                                class="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 cursor-pointer"
                            >
                                {post.title}
                            </h2>
                        </a>

                        <p class="text-sm text-slate-600 mb-4 line-clamp-3">
                            {post.excerpt}
                        </p>

                        <a
                            href={`/blog/${post.id}`}
                            class="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            Read more
                            <svg
                                class="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </article>
            {/each}
        </div>

        <!-- Load More -->
        <div class="text-center mt-12">
            <button
                class="px-8 py-3 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
            >
                Load More Articles
            </button>
        </div>
    </div>

    <!-- Newsletter Section -->
    <div class="bg-slate-900 py-14 px-3 sm:px-5 lg:px-7">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-2xl font-bold text-white mb-3">Stay Updated</h2>
            <p class="text-sm text-slate-300 mb-7">
                Get the latest crypto card news, guides, and exclusive offers
                delivered to your inbox.
            </p>
            <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    class="flex-1 px-4 py-3 rounded-full border-0 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    class="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
                >
                    Subscribe
                </button>
            </form>
        </div>
    </div>
</main>
