<script lang="ts">
    import { page } from "$app/stores";
    import { blogPosts } from "$lib/blog-data";
    import {
        Facebook,
        Twitter,
        Linkedin,
        ArrowLeft,
        Clock,
        Calendar,
    } from "lucide-svelte";

    let postId = $derived($page.params.id);
    let post = $derived(blogPosts.find((p) => p.id === postId));
    let relatedPosts = $derived(
        blogPosts.filter((p) => p.id !== postId).slice(0, 3),
    );
</script>

{#if post}
    <main class="min-h-screen bg-white">
        <!-- New Split Header Layout -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
                <!-- Left Column: Content -->
                <div class="flex flex-col">
                    <div class="mb-6">
                        <span
                            class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 tracking-wide uppercase"
                        >
                            {post.category}
                        </span>
                    </div>

                    <h1
                        class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
                    >
                        {post.title}
                    </h1>

                    <div
                        class="flex items-center gap-6 text-slate-500 mb-8 pb-8 border-b border-slate-100"
                    >
                        <div class="flex items-center gap-2">
                            <Calendar class="w-4 h-4" />
                            <span class="text-sm font-medium">{post.date}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <Clock class="w-4 h-4" />
                            <span class="text-sm font-medium"
                                >{post.readTime}</span
                            >
                        </div>
                    </div>

                    <div class="flex items-center gap-4">
                        <span class="text-sm font-semibold text-slate-900"
                            >Share this article:</span
                        >
                        <div class="flex gap-3">
                            <button
                                class="p-2 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                                <Twitter class="w-4 h-4" />
                            </button>
                            <button
                                class="p-2 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                                <Facebook class="w-4 h-4" />
                            </button>
                            <button
                                class="p-2 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                                <Linkedin class="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Image -->
                <div class="relative group">
                    <div
                        class="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    ></div>
                    <img
                        src={post.image}
                        alt={post.title}
                        class="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
                    />
                </div>
            </div>
        </div>

        <!-- Article Content -->
        <article class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="prose prose-lg prose-slate max-w-none">
                {#each post.content as paragraph}
                    {#if paragraph.startsWith("## ")}
                        <h2
                            class="text-2xl font-bold text-slate-900 mt-12 mb-6"
                        >
                            {paragraph.replace("## ", "")}
                        </h2>
                    {:else if paragraph.startsWith("### ")}
                        <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">
                            {paragraph.replace("### ", "")}
                        </h3>
                    {:else if paragraph.startsWith("**") && paragraph.endsWith("**")}
                        <p class="font-bold text-slate-900 mt-6 mb-3 text-lg">
                            {paragraph.replace(/\*\*/g, "")}
                        </p>
                    {:else if paragraph.startsWith("- ")}
                        <li class="text-slate-700 ml-6 list-disc mb-2">
                            {paragraph.replace("- ", "")}
                        </li>
                    {:else if /^\d+\.\s/.test(paragraph)}
                        <div class="ml-6 mb-2 flex gap-2 text-slate-700">
                            <span class="font-bold min-w-[20px]"
                                >{paragraph.split(".")[0]}.</span
                            >
                            <span
                                >{paragraph
                                    .substring(paragraph.indexOf(".") + 1)
                                    .trim()}</span
                            >
                        </div>
                    {:else}
                        <p class="text-slate-700 leading-relaxed mb-6">
                            {paragraph}
                        </p>
                    {/if}
                {/each}
            </div>

            <!-- Back to Blog Link -->
            <div class="mt-16 pt-8 border-t border-slate-200">
                <a
                    href="/blog"
                    class="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors group"
                >
                    <ArrowLeft
                        class="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                    />
                    Back to all articles
                </a>
            </div>
        </article>

        <!-- Related Articles Section -->
        <section class="bg-slate-50 py-20 border-t border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-slate-900 mb-12">
                    Related Articles
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {#each relatedPosts as relatedPost}
                        <a
                            href="/blog/{relatedPost.id}"
                            class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            <div class="relative h-48 overflow-hidden">
                                <img
                                    src={relatedPost.image}
                                    alt={relatedPost.title}
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div class="absolute top-4 left-4">
                                    <span
                                        class="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-900"
                                    >
                                        {relatedPost.category}
                                    </span>
                                </div>
                            </div>
                            <div class="p-6 flex flex-col flex-grow">
                                <div
                                    class="flex items-center gap-3 text-xs text-slate-500 mb-3"
                                >
                                    <span>{relatedPost.date}</span>
                                    <span>•</span>
                                    <span>{relatedPost.readTime}</span>
                                </div>
                                <h3
                                    class="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2"
                                >
                                    {relatedPost.title}
                                </h3>
                                <p
                                    class="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow"
                                >
                                    {relatedPost.excerpt}
                                </p>
                                <span
                                    class="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                                >
                                    Read Article <span class="text-lg">→</span>
                                </span>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
        </section>
    </main>
{:else}
    <div class="min-h-screen grid place-items-center bg-slate-50">
        <div class="text-center">
            <h1 class="text-2xl font-bold text-slate-900 mb-4">
                Post not found
            </h1>
            <a href="/blog" class="text-blue-600 hover:underline"
                >Return to blog</a
            >
        </div>
    </div>
{/if}
