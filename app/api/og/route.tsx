import { ImageResponse } from "next/og";

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#000",
                    color: "#fff",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 100,
                        fontWeight: 600,
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="200"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-picnic-table"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M16 7l2 9m-10 -9l-2 9m-1 -9h14m2 5h-18" />
                    </svg>
                    zkriven
                </div>
                <div
                    style={{
                        fontSize: 25,
                    }}
                >
                    web developer / software engineer
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
