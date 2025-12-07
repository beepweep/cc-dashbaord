import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Request a Card",
    description: "Can't find the crypto card you're looking for? Submit a request and we'll add it to our database.",
    openGraph: {
        title: "Request a Card | Cardforyou",
        description: "Request a crypto card to be added to our comparison platform.",
    },
};

export default function RequestCardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
