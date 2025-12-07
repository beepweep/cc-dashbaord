import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Explore Crypto Cards",
    description: "Browse and compare all crypto debit cards. Filter by cashback rates, providers, card type, and more. Find your perfect crypto card today.",
    openGraph: {
        title: "Explore Crypto Cards | Cardforyou",
        description: "Browse and compare all crypto debit cards. Filter by cashback rates, providers, and more.",
    },
};

export default function ExploreCardsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
