import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
    const cards = [
        {
            title: "Digipay PH",
            src: "/projects/digipay.png",
        },
        {
            title: "Rocketshyft",
            src: "/projects/rocketshyft.png",
        },
        {
            title: "Nisuboard",
            src: "/projects/nisuboard.png",
        },
        {
            title: "Coffee",
            src: "/projects/coffee.png",
        },
    ];

    return <FocusCards cards={cards} />;
}
