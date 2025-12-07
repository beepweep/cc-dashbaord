"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const isLightPage = pathname?.includes('/privacy-policy') ||
        pathname?.includes('/terms-of-use') ||
        pathname?.includes('/get-listed') ||
        pathname?.includes('/media-kit') ||
        pathname?.includes('/blog') ||
        pathname?.includes('/explore-cards') ||
        pathname?.includes('/compare-cards') ||
        pathname?.includes('/request-card') ||
        pathname?.includes('/affiliate-program');

    return (
        <header className="absolute top-0 left-0 right-0 z-50 px-7 py-7 flex items-center justify-between">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-2.5 group">
                <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className={`absolute w-5 h-5 rounded-md transform -rotate-12 translate-x-0.5 translate-y-0.5 backdrop-blur-sm transition-transform group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 ${isLightPage ? 'bg-slate-900/20 border border-slate-900/20' : 'bg-white/20 border border-white/20'
                        }`}></div>
                    <div className={`absolute w-5 h-5 rounded-md transform rotate-6 shadow-lg transition-transform group-hover:rotate-0 ${isLightPage ? 'bg-slate-900 border border-slate-900/50' : 'bg-white border border-white/50'
                        }`}></div>
                </div>
                <span className={`text-lg font-bold tracking-tight drop-shadow-md ${isLightPage ? 'text-slate-900' : 'text-white'
                    }`}>Cardforyou</span>
            </Link>

            {/* Navigation & CTA */}
            <div className="flex items-center gap-2.5">
                <nav className="hidden md:flex items-center gap-3">
                    <Link href="/explore-cards" className={`font-medium text-xs transition-colors drop-shadow-sm ${isLightPage ? 'text-slate-700 hover:text-slate-900' : 'text-white/80 hover:text-white'
                        }`}>Explore cards</Link>
                    <Link href="/compare-cards" className={`font-medium text-xs transition-colors drop-shadow-sm ${isLightPage ? 'text-slate-700 hover:text-slate-900' : 'text-white/80 hover:text-white'
                        }`}>Compare cards</Link>
                    <Link href="/get-listed" className={`font-medium text-xs transition-colors drop-shadow-sm ${isLightPage ? 'text-slate-700 hover:text-slate-900' : 'text-white/80 hover:text-white'
                        }`}>Get listed</Link>
                    <Link href="/blog" className={`font-medium text-xs transition-colors drop-shadow-sm ${isLightPage ? 'text-slate-700 hover:text-slate-900' : 'text-white/80 hover:text-white'
                        }`}>Blog</Link>
                </nav>
                <Link href="/affiliate-program">
                    <button
                        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 ${isLightPage
                            ? 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                            : 'border-2 border-white/50 text-white hover:bg-white/10'
                            }`}
                    >
                        Affiliate program
                    </button>
                </Link>
                <button
                    className={`px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${isLightPage
                        ? 'bg-slate-900 border border-slate-900 text-white hover:bg-slate-800'
                        : 'bg-white/20 border border-white/50 text-white hover:bg-white/30'
                        }`}
                >
                    Pick for me
                </button>
            </div>
        </header>
    );
}
