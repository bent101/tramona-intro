"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
    <p key={0}>
        Adventuring and exploring shouldn&apos;t be something where price
        controls you.
    </p>,
    <p key={1}>
        Enjoy the luxury joining the first free flowing travel market
    </p>,
    <p key={2}>We make travel work within your requirements</p>,
    <p key={3}>
        Enjoy <s>exploring</s> living more
    </p>,
];

export default function Home() {
    const [slideIdx, setSlideIdx] = useState(0);
    const curSlide = slides[slideIdx];

    return (
        <main className="relative h-screen">
            <h1 className="mx-auto max-w-2xl px-4 py-8 text-center text-5xl font-bold tracking-wide">
                Congrats and welcome to the new era of travel!
            </h1>

            <div className="max-w-4xl">
                <div className="flex items-center p-32">
                    <div className="flex-1">
                        <ol start={slideIdx + 1}>
                            <li className="h-48 text-3xl font-semibold tracking-wider text-zinc-800">
                                {curSlide}
                            </li>
                        </ol>

                        <div className="flex justify-center gap-2.5">
                            {slides.map((_, i) => {
                                const selected = i === slideIdx;
                                return (
                                    <div
                                        key={i}
                                        className={`h-4 w-4 rounded-full transition-all duration-200 ${
                                            selected
                                                ? "w-8 bg-blue-600"
                                                : "bg-zinc-200"
                                        }`}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <button
                        disabled={slideIdx === slides.length - 1}
                        onClick={() => setSlideIdx(slideIdx + 1)}
                        className="group rounded-full bg-blue-600 p-4 font-sans text-5xl font-extrabold text-white transition-all disabled:scale-50 disabled:opacity-0"
                    >
                        <div className="transition-transform duration-200 group-hover:translate-x-0.5 group-active:translate-x-1">
                            →
                        </div>
                    </button>
                </div>

                <div className="flex flex-col items-center gap-8 p-8 tracking-wider">
                    <p className="text-lg text-zinc-600">
                        You now have{" "}
                        <a
                            href="/"
                            className="font-semibold text-blue-600 underline underline-offset-4"
                        >
                            2 requests
                        </a>
                        .<br />
                        Enjoy and see where life can take you.
                    </p>

                    <a
                        href="/test"
                        className="block w-80 rounded-lg bg-blue-600 py-3 text-center text-white"
                    >
                        Adventure now
                    </a>
                </div>
            </div>

            <Image
                className="absolute bottom-0 right-0"
                src="/images/bg.png"
                alt=""
                width={505}
                height={416}
            />
        </main>
    );
}
