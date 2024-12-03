import { Blockquote, BlockquoteAuthor } from "@/components/ui/block-quote";

export const Quotes = () => {
    return (
        <Blockquote className="max-w-4xl mx-auto">
            Money can’t buy happiness, but it can buy pizza, and that’s
            basically the same thing.
            <BlockquoteAuthor>Me</BlockquoteAuthor>
        </Blockquote>
    );
};
