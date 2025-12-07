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
        <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 px-4 sm:px-5 lg:px-6 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-40" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] opacity-40" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white mb-5">
                            <span className="text-xs">📚</span>
                            <span className="text-xs font-medium">Latest Insights</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            From Our Blog
                        </h2>
                        <p className="text-base text-slate-600 max-w-lg">
                            Expert guides, comparisons, and tips to help you make the most of your crypto cards.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                    >
                        View All Articles
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuredPosts.map((post, index) => (
                        <article
                            key={post.id}
                            className={`group relative ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                        >
                            <Link href={`/blog/${post.id}`} className="block h-full">
                                <div className={`relative h-full overflow-hidden rounded-2xl ${index === 0 ? 'min-h-[400px]' : 'min-h-[220px]'}`}>
                                    {/* Background gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />

                                    {/* Image */}
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                    />

                                    {/* Content overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Category badge */}
                                    <div className="absolute top-5 left-5">
                                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold bg-white/90 text-slate-900 backdrop-blur-sm shadow-lg">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                                        <div className="flex items-center gap-2 text-xs text-white/70 mb-3">
                                            <time>{post.date}</time>
                                            <span className="w-1 h-1 rounded-full bg-white/50" />
                                            <span>{post.readTime}</span>
                                        </div>

                                        <h3 className={`font-bold text-white mb-3 group-hover:text-white/90 transition-colors ${index === 0 ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                                            {post.title}
                                        </h3>

                                        {index === 0 && (
                                            <p className="text-sm text-white/70 mb-5 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                        )}

                                        <div className="inline-flex items-center gap-2 text-sm text-white font-medium group-hover:gap-3 transition-all duration-300">
                                            Read Article
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
