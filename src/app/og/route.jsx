import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const fontData1 = await fetch(
        new URL("/public/fonts/Tangerine-Bold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());
    const fontData2 = await fetch(
        new URL("/public/fonts/Quicksand-Bold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());
    return new ImageResponse(
        (
            <div
                tw="flex flex-col w-full h-full text-[#ffc034]"
                style={{
                    backgroundImage: "url(http://localhost:3000/wish.jpeg)",
                }}
            >
                <div tw="flex flex-col w-3/5 py-16 px-16 justify-center h-full">
                    <span
                        tw="text-6xl mb-4"
                        style={{ fontFamily: "Tangerine" }}
                    >
                        Dear {name}
                    </span>
                    <span
                        tw="text-4xl text-white font-bold my-2 pl-2"
                        style={{
                            fontFamily: "Quicksand",
                        }}
                    >
                        Here&apos;s to another year of success, growth and
                        amazing experiences. Enjoy your birthday and cheers to a
                        fantastic year ahead!
                    </span>
                    <span
                        tw="text-6xl mt-6"
                        style={{ fontFamily: "Tangerine" }}
                    >
                        Happy Birthday!
                    </span>
                </div>
            </div>
        ),
        {
            width: 940,
            height: 788,
            fonts: [
                {
                    name: "Tangerine",
                    data: fontData1,
                    style: "normal",
                },
                {
                    name: "Quicksand",
                    data: fontData2,
                    style: "normal",
                },
            ],
        }
    );
}
