<script lang="ts">
    import { page } from "$app/stores";
    import { blogPosts } from "$lib/blog-data";
    import { error } from "@sveltejs/kit";

    let postId = $derived($page.params.id);
    let post = $derived(blogPosts.find((p) => p.id === postId));

    // Simple reactive effect to handle 404
    $effect(() => {
        if (!post) {
            // In a real app we might redirect or show a 404 component
            // For now we just let the template handle it or error out
        }
    });
</script>

{#if post}
    <main class="min-h-screen bg-white">
        <!-- Hero Section -->
        <div
            class="relative h-80 bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden"
        >
            <img
                src={post.image}
                alt={post.title}
                class="object-cover w-full h-full opacity-30"
            />
            <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            ></div>

            <div
                class="relative h-full max-w-3xl mx-auto px-3 sm:px-5 lg:px-7 flex flex-col justify-end pb-10"
            >
                <div class="mb-3">
                    <span
                        class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/90 text-slate-900"
                    >
                        {post.category}
                    </span>
                </div>
                <h1 class="text-3xl md:text-4xl font-bold text-white mb-3">
                    {post.title}
                </h1>
                <div class="flex items-center gap-3 text-xs text-white/90">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>
            </div>
        </div>

        <!-- Article Content -->
        <article class="max-w-3xl mx-auto px-3 sm:px-5 lg:px-7 py-10">
            <div class="prose prose-base prose-slate max-w-none">
                {#each post.content as paragraph}
                    {#if paragraph.startsWith("## ")}
                        <h2
                            class="text-2xl font-bold text-slate-900 mt-12 mb-4"
                        >
                            {paragraph.replace("## ", "")}
                        </h2>
                    {:else if paragraph.startsWith("**") && paragraph.endsWith("**")}
                        <p class="font-semibold text-slate-900 mt-6 mb-2">
                            {paragraph.replace(/\*\*/g, "")}
                        </p>
                    {:else if paragraph.startsWith("- ")}
                        <li class="text-slate-700 ml-6 list-disc">
                            {paragraph.replace("- ", "")}
                        </li>
                    {:else}
                        <p class="text-slate-700 leading-relaxed mb-4">
                            {paragraph}
                        </p>
                    {/if}
                {/each}
            </div>

            <!-- Back to Blog -->
            <div class="mt-12 pt-8 border-t border-gray-200">
                <a
                    href="/blog"
                    class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
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
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Blog
                </a>
            </div>
        </article>
    </main>
{:else}
    <div class="min-h-screen grid place-items-center">
        <h1 class="text-2xl">Post not found</h1>
    </div>
{/if}
