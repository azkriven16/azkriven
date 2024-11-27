import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
    const cards = [
        {
            title: "Digipay PH",
            src: "/projects/digipay.png",
            href: "https://www.digipay.ph/",
        },
        {
            title: "Rocketshyft",
            src: "/projects/rocketshyft.png",
            href: "https://rocketshyft.com/",
        },
        {
            title: "Nisuboard",
            src: "/projects/nisuboard.png",
            href: "https://nisuboard-final.vercel.app/",
        },
        {
            title: "Coffee",
            src: "/projects/coffee.png",
            href: "https://nisuboard-final.vercel.app/",
        },
    ];

    return <FocusCards cards={cards} />;
}