"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const isLightPage = pathname?.includes('/privacy-policy') ||
        pathname?.includes('/terms-of-use') ||
        pathname?.includes('/get-listed') ||
        pathname?.includes('/media-kit');

    return (
        <header className="absolute top-0 left-0 right-0 z-50 px-8 py-8 flex items-center justify-between">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 flex items-center justify-center">
                    <div className={`absolute w-6 h-6 rounded-lg transform -rotate-12 translate-x-1 translate-y-1 backdrop-blur-sm transition-transform group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 ${isLightPage ? 'bg-slate-900/20 border border-slate-900/20' : 'bg-white/20 border border-white/20'
                        }`}></div>
                    <div className={`absolute w-6 h-6 rounded-lg transform rotate-6 shadow-lg transition-transform group-hover:rotate-0 ${isLightPage ? 'bg-slate-900 border border-slate-900/50' : 'bg-white border border-white/50'
                        }`}></div>
                </div>
                <span className={`text-xl font-bold tracking-tight drop-shadow-md ${isLightPage ? 'text-slate-900' : 'text-white'
                    }`}>Cardforyou</span>
            </Link>

            {/* Navigation & CTA */}
            <div className="flex items-center gap-6">
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/#" className={`font-medium text-sm transition-colors drop-shadow-sm ${isLightPage ? 'text-slate-700 hover:text-slate-900' : 'text-white/80 hover:text-white'
                        }`}>Compare</Link>
                    <Link href="/get-listed" className={`font-medium text-sm transition-colors drop-shadow-sm ${isLightPage ? 'text-slate-700 hover:text-slate-900' : 'text-white/80 hover:text-white'
                        }`}>Get listed</Link>
                    <Link href="/#" className={`font-medium text-sm transition-colors drop-shadow-sm ${isLightPage ? 'text-slate-700 hover:text-slate-900' : 'text-white/80 hover:text-white'
                        }`}>Blog</Link>
                </nav>
                <button
                    className={`px-5 py-2 rounded-full text-sm font-medium backdrop-blur-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${isLightPage
                        ? 'bg-slate-900 border border-slate-900 text-white hover:bg-slate-800'
                        : 'bg-white/20 border border-white/50 text-white hover:bg-white/30'
                        }`}
                >
                    Let's Start
                </button>
            </div>
        </header>
    );
}
