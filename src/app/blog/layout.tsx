import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Stay updated with the latest news, guides, and insights about crypto cards, cryptocurrency, and Web3 payments.",
    openGraph: {
        title: "Blog | Cardforyou",
        description: "Latest news and guides about crypto cards and cryptocurrency.",
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
