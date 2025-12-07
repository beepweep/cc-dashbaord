import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Compare Crypto Cards",
    description: "Compare crypto cards side by side. Analyze cashback rates, fees, features, and benefits to find the best card for your needs.",
    openGraph: {
        title: "Compare Crypto Cards | Cardforyou",
        description: "Compare crypto cards side by side. Analyze features and benefits.",
    },
};

export default function CompareCardsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
