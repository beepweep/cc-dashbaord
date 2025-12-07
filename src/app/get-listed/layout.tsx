import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Get Listed",
    description: "Are you a crypto card provider? Get your card listed on Cardforyou to reach thousands of potential customers.",
    openGraph: {
        title: "Get Your Card Listed | Cardforyou",
        description: "List your crypto card on Cardforyou and reach more customers.",
    },
};

export default function GetListedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
