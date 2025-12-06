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
}

const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Top 5 Crypto Cards for 2025: Complete Comparison",
        excerpt: "Discover the best crypto cards of 2025 with our in-depth comparison of rewards, fees, and exclusive benefits.",
        category: "Comparison",
        date: "Dec 6, 2025",
        readTime: "8 min read",
        image: "/site-bg-blue.png"
    },
    {
        id: "2",
        title: "How to Maximize Crypto Card Rewards",
        excerpt: "Learn proven strategies to earn maximum cashback and rewards from your crypto card spending.",
        category: "Guide",
        date: "Dec 5, 2025",
        readTime: "6 min read",
        image: "/site-bg-final.jpg"
    },
    {
        id: "3",
        title: "Metal vs Plastic Crypto Cards: Which is Better?",
        excerpt: "Explore the differences between metal and plastic crypto cards and find out which one suits your lifestyle.",
        category: "Analysis",
        date: "Dec 4, 2025",
        readTime: "5 min read",
        image: "/hero-bg.jpg"
    },
    {
        id: "4",
        title: "Understanding Crypto Card Staking Requirements",
        excerpt: "A comprehensive guide to staking requirements, lock-up periods, and how they affect your card benefits.",
        category: "Guide",
        date: "Dec 3, 2025",
        readTime: "7 min read",
        image: "/site-bg-new.png"
    },
    {
        id: "5",
        title: "Crypto Card Fees Explained: What You Need to Know",
        excerpt: "Break down all the fees associated with crypto cards and learn how to minimize costs.",
        category: "Education",
        date: "Dec 2, 2025",
        readTime: "6 min read",
        image: "/hq-sky-bg.png"
    },
    {
        id: "6",
        title: "Best Crypto Cards for Travelers in 2025",
        excerpt: "Find the perfect crypto card for your travels with no foreign transaction fees and global acceptance.",
        category: "Comparison",
        date: "Dec 1, 2025",
        readTime: "9 min read",
        image: "/site-bg.jpg"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Crypto Card Insights
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Expert guides, comparisons, and tips to help you make the most of your crypto cards
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-slate-900 backdrop-blur-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                    <time>{post.date}</time>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h2 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h2>

                                <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    Read more
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                    <button className="px-8 py-3 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">
                        Load More Articles
                    </button>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-slate-300 mb-8">
                        Get the latest crypto card news, guides, and exclusive offers delivered to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-full border-0 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
