"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    gradient: string;
}

const featuredPosts: BlogPost[] = [
    {
        id: "1",
        title: "Top 5 Crypto Cards for 2025: Complete Comparison",
        excerpt: "Discover the best crypto cards of 2025 with our in-depth comparison of rewards, fees, and exclusive benefits.",
        category: "Comparison",
        date: "Dec 6, 2025",
        readTime: "8 min read",
        image: "/site-bg-blue.png",
        gradient: "from-blue-600 to-cyan-500"
    },
    {
        id: "2",
        title: "How to Maximize Crypto Card Rewards",
        excerpt: "Learn proven strategies to earn maximum cashback and rewards from your crypto card spending.",
        category: "Guide",
        date: "Dec 5, 2025",
        readTime: "6 min read",
        image: "/site-bg-final.jpg",
        gradient: "from-purple-600 to-pink-500"
    },
    {
        id: "3",
        title: "Metal vs Plastic Crypto Cards: Which is Better?",
        excerpt: "Explore the differences between metal and plastic crypto cards and find out which one suits your lifestyle.",
        category: "Analysis",
        date: "Dec 4, 2025",
        readTime: "5 min read",
        image: "/hero-bg.jpg",
        gradient: "from-amber-500 to-orange-600"
    }
];

export default function BlogSection() {
    return (
        <section className="relative bg-black py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white mb-6">
                            <span className="text-sm">📚</span>
                            <span className="text-xs font-medium text-white/80">Latest Insights</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            From Our Blog
                        </h2>
                        <p className="text-base text-slate-400 max-w-lg">
                            Expert guides, comparisons, and tips to help you make the most of your crypto cards.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-colors duration-300 text-sm"
                    >
                        View All Articles
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group relative h-full"
                        >
                            <Link href={`/blog/${post.id}`} className="block h-full">
                                <div className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-[#111] border border-white/10 transition-transform duration-300 group-hover:-translate-y-1">
                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-60" />

                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold bg-black/50 text-white backdrop-blur-md border border-white/10">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6 flex flex-col">
                                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                            <time>{post.date}</time>
                                            <span className="w-1 h-1 rounded-full bg-slate-500" />
                                            <span>{post.readTime}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-sm text-slate-400 line-clamp-3 mb-6 flex-1">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all duration-300 mt-auto">
                                            Read Article
                                            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
