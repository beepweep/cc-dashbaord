import Link from "next/link";
import Image from "next/image";
import Partners from "@/components/Partners";
import HowItWorks from "@/components/HowItWorks";
import BlogSection from "@/components/BlogSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="fixed inset-0 -z-10 bg-slate-900">
          <Image
            src="/site-bg-blue.png"
            alt="Site Background"
            fill
            className="object-cover object-center blur-lg animate-slow-zoom brightness-105"
            quality={100}
            priority
          />
          {/* Noise overlay for smoothing gradients */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Main Content */}
        <div className="text-center px-3 -mt-28 relative z-10">
          <div className="relative flex items-center justify-center gap-7 mb-5">
            {/* Left Image */}
            <div className="hidden lg:block relative w-28 h-28 flex-shrink-0">
              <Image
                src="/left.png.webp"
                alt="Left decoration"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Heading with animated gradient */}
            <h1 className="text-[52px] font-semibold text-center leading-tight drop-shadow-md">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-500 via-purple-600 via-white to-cyan-300 animate-text-shimmer background-size-200">
                Find the perfect card for you
              </span>
            </h1>

            {/* Right Image */}
            <div className="hidden lg:block relative w-28 h-28 flex-shrink-0">
              <Image
                src="/right.png.webp"
                alt="Right decoration"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <p className="text-sm md:text-base text-blue-50/70 font-medium leading-relaxed drop-shadow-sm">
            Access and compare top-tier crypto cards from around the world. <br className="hidden md:block" />
            Spend Smarter, Earn Higher.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <div className="relative z-10 bg-white">
        <Partners />
      </div>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Blog Section */}
      <BlogSection />

      {/* FAQ Section */}
      <FAQ />
    </main>
  );
}
