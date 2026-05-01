import { motion } from "framer-motion";
import anjaliMain from "./assets/anjali2.jpeg";
import anjaliOne from "./assets/anjali.jpeg";
import anjaliTwo from "./assets/anjali3.jpeg";
import anjaliThree from "./assets/anjali4.jpeg";
import anjaliFour from "./assets/anjaliUSA.jpg";
import flowers from "./assets/flowers.png";

const collageCards = [
  { src: anjaliOne, alt: "Anjali smiling portrait", rotate: "-rotate-6", pos: "top-8 left-8", size: "w-44 md:w-56" },
  { src: anjaliTwo, alt: "Anjali winter look", rotate: "rotate-4", pos: "top-10 right-6", size: "w-44 md:w-56" },
  { src: anjaliThree, alt: "Anjali at entrance", rotate: "-rotate-2", pos: "bottom-12 left-10", size: "w-44 md:w-56" },
  { src: anjaliFour, alt: "Anjali standing outdoors", rotate: "rotate-6", pos: "bottom-14 right-8", size: "w-44 md:w-56" },
];

const randomText = [
  "Dream. Plan. Shine. Repeat.",
  "Smiles that light up every room",
  "Growing stronger with grace",
  "Beautiful mind, kind heart, bold soul",
];

export default function Gallery() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f2e8] px-4 py-12 md:px-8">
      <div className="mx-auto max-w-6xl rounded-[40px] border border-[#dbcbb3] bg-[#f6efe3] p-6 shadow-[0_16px_50px_rgba(92,66,38,0.22)] md:p-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black tracking-wide text-[#3d2e1f] md:text-5xl">
            Radiate Confidence
          </h2>
          <p className="mt-2 text-lg italic text-[#6a4a33]">
            Moments that made her glow
          </p>
        </div>

        <div className="relative min-h-[950px] rounded-3xl border border-[#e4d6c3] bg-[linear-gradient(165deg,#fffdf8_0%,#f4ecde_100%)] p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mt-20 w-[78%] max-w-md rounded-[26px] border-[10px] border-white bg-white p-2 shadow-2xl"
          >
            <img src={anjaliMain} alt="Main collage portrait" className="h-[500px] w-full rounded-2xl object-cover md:h-[580px]" />
            <p className="py-3 text-center font-['Segoe_Script',cursive] text-xl text-[#5f4632]">
              Be your own kind of beautiful
            </p>
          </motion.div>

          {collageCards.map((card, index) => (
            <motion.div
              key={card.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`absolute ${card.pos} ${card.rotate} ${card.size} rounded-xl border-8 border-white bg-white p-2 shadow-[0_10px_24px_rgba(0,0,0,0.2)]`}
            >
              <img src={card.src} alt={card.alt} className="h-40 w-full rounded object-cover md:h-52" />
            </motion.div>
          ))}

          <div className="absolute left-4 top-6 max-w-[220px] rounded-xl bg-[#fff7ea] p-4 text-left shadow-md md:left-8">
            <p className="text-3xl font-semibold leading-tight text-[#593e2a]">Inspire</p>
            <p className="text-4xl font-black uppercase leading-none text-[#2f2218]">Growth</p>
            <p className="mt-2 text-sm text-[#6e5038]">{randomText[1]}</p>
          </div>

          <div className="absolute right-4 top-3 rounded-lg bg-[#efe3cf] px-4 py-3 shadow-md md:right-10">
            <p className="font-['Segoe_Script',cursive] text-lg text-[#5a3f2a]">{randomText[0]}</p>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-lg bg-[#f5e7d2] px-5 py-3 text-center shadow-md">
            <p className="text-sm text-[#513823]">Focused • Grateful • Glowing</p>
            <p className="font-['Segoe_Script',cursive] text-xl text-[#3f2e20]">Not just places, but who she is becoming</p>
          </div>

          <img src={flowers} alt="Floral decor" className="absolute bottom-28 left-[48%] w-24 -translate-x-1/2 opacity-90 md:w-32" />
          <span className="absolute left-[32%] top-[45%] text-2xl text-[#7a573b]">♡</span>
          <span className="absolute right-[30%] top-[38%] text-2xl text-[#7a573b]">✦</span>
          <span className="absolute left-[18%] bottom-[25%] text-2xl text-[#7a573b]">✦</span>
          <span className="absolute right-[18%] bottom-[28%] text-2xl text-[#7a573b]">♡</span>
        </div>
      </div>
    </section>
  );
}
