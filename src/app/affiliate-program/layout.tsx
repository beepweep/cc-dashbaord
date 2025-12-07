import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Affiliate Program",
    description: "Join the Cardforyou affiliate program and earn commissions by referring users to crypto card providers.",
    openGraph: {
        title: "Affiliate Program | Cardforyou",
        description: "Earn commissions by referring users to crypto cards.",
    },
};

export default function AffiliateProgramLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
