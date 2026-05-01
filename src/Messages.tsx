export default function Messages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7fb] to-[#fdf3f8] px-4 py-8 md:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-rose-200 bg-white shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: magazine style visual */}
          <section className="relative border-b border-rose-100 bg-[#fffaf4] p-5 md:p-8 lg:border-b-0 lg:border-r">
            <div className="rounded-2xl border border-rose-200 bg-[#f9efe0] p-3 shadow-sm">
              <img
                src="./src/assets/anjali2.jpeg"
                alt="Magazine main portrait"
                className="h-[520px] md:h-[620px] w-full rounded-xl object-cover"
              />
            </div>

            <div className="absolute bottom-12 right-6 md:right-10 w-40 md:w-56 rotate-[-4deg] rounded-xl border-4 border-white bg-white p-2 shadow-xl">
              <img
                src="./src/assets/anjali.jpeg"
                alt="Magazine side portrait"
                className="h-40 md:h-52 w-full rounded-md object-cover"
              />
            </div>

            <div className="absolute right-6 top-8 md:right-10 rounded-xl bg-[#fff3dd] px-4 py-3 shadow-md">
              <p className="text-sm font-semibold leading-relaxed text-rose-700 md:text-base">
                My Mardhal
              </p>
            </div>

            <div className="absolute left-6 top-5 text-3xl">💘</div>
            <div className="absolute bottom-6 left-6 w-16 md:w-24">
              <img src="./src/assets/flowers.png" alt="Flower decor" className="w-full object-contain" />
            </div>
          </section>

          {/* Right: professional message panel */}
          <aside className="bg-white p-6 md:p-10">
            <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-xs font-bold tracking-[0.18em] text-rose-600">
              BIRTHDAY FEATURE
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              A Message For
              <span className="block text-rose-500">Your Beautiful Soul</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg">
              Today is a celebration of someone truly special. Your presence brings
              peace, your smile brings warmth, and your nature leaves a lasting
              impression on everyone around you.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
              You are graceful in the way you carry yourself, kind in the way you
              treat people, and inspiring in the way you move through life. May this
              year bring you everything you dream of and all the happiness you
              deserve.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-1">
              {/* <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-rose-600">Birthday</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">2 May</p>
              </div> */}
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-rose-600">Her Vibe</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">Elegant, kind, unforgettable</p>
              </div>
            </div>

            <blockquote className="mt-8 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 p-5 text-lg italic leading-relaxed text-white shadow-lg">
              "Some people are beautiful by face, but you are beautiful by heart,
              soul, and smile."
            </blockquote>

            <p className="mt-6 text-right text-sm font-semibold text-slate-500">
              With admiration and warm wishes.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
