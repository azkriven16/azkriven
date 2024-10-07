import { Box } from "lucide-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link
            href="/"
            className="flex-1 hover:scale-110 transition ease-in-out"
        >
            <Box />
        </Link>
    );
}
