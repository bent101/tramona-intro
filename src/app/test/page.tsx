export default function Page() {
    return (
        <main className="relative h-screen overflow-scroll bg-sky bg-[url(/images/house-edge.jpeg)] bg-bottom bg-repeat-x [background-size:1px]">
            <div className="relative z-10 h-full space-y-16 bg-sky px-8 pt-16 md:w-3/5 md:px-16">
                <h1 className="max-w-lg text-3xl/relaxed font-bold text-blue-950 md:text-5xl/relaxed">
                    Congrats and welcome to{" "}
                    <span className="inline-block">the new era</span> of travel!
                </h1>

                <p className="max-w-xl text-xl text-blue-900 md:text-2xl">
                    Adventuring and exploring shouldn&apos;t be something where
                    price controls you.
                    <br />
                    <br />
                    Tramona is the first free flowing travel market.
                    <br />
                    <br />
                    <strong>
                        We make travel work within your requirements.
                    </strong>
                </p>

                <a
                    href="/"
                    className="inline-block rounded-lg bg-blue-950 px-6 py-3 text-xl font-semibold text-white"
                >
                    Start exploring
                </a>

                <div className="absolute inset-y-0 left-full w-96 bg-gradient-to-r from-sky to-transparent" />
            </div>

            <img
                src="/images/house.jpeg"
                alt=""
                className="pointer-events-none absolute bottom-0 right-0 select-none [shadow:0_0_4px_4px_black_inset]"
                width="512px"
                height="512px"
            />
        </main>
    );
}
