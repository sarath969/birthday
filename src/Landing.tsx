import { motion } from "framer-motion";

export default function BirthdayLanding() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fdf2f5]">
      {/* soft grid background like reference */}
      <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,#f4d7df_1px,transparent_1px),linear-gradient(to_bottom,#f4d7df_1px,transparent_1px)] bg-[size:38px_38px]" />

      {/* top bunting strips */}
      <div className="absolute top-0 left-0 w-64 h-40 border-t-[36px] border-t-pink-300 border-r-[220px] border-r-transparent opacity-80" />
      <div className="absolute top-0 right-0 w-64 h-40 border-t-[36px] border-t-pink-300 border-l-[220px] border-l-transparent opacity-80" />

      <div className="relative z-10 min-h-screen flex items-center justify-between px-8 md:px-20  ">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative leading-none w-fit"
          >
            <motion.img
              src="./birthdayCap.png"
              alt="birthday cap"
              initial={{ opacity: 0, y: -20, rotate: -25, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: [0, -8, 0],
                rotate: [-18, -8, -18],
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-12 sm:-top-14 left-24 sm:left-36 md:left-48 w-14 sm:w-16 md:w-20 lg:w-24 z-20 drop-shadow-lg"
            />
            <motion.span
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: [1, 1.03, 1] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="block text-[72px] md:text-[92px] font-black text-white drop-shadow-[0_3px_0_#242424] [-webkit-text-stroke:3px_#1f2937] [font-family:'Arial_Black',sans-serif]"
            >
              Happy
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: [1, 1.03, 1],
                filter: [
                  "drop-shadow(0 0 0 rgba(255,95,151,0))",
                  "drop-shadow(0 0 16px rgba(255,95,151,0.55))",
                  "drop-shadow(0 0 0 rgba(255,95,151,0))",
                ],
              }}
              transition={{
                duration: 0.85,
                ease: "easeOut",
                delay: 0.2,
                repeat: Infinity,
                repeatDelay: 1.8,
              }}
              className="block text-[72px] md:text-[92px] font-black text-[#ff5f97] drop-shadow-[0_3px_0_#242424] [-webkit-text-stroke:3px_#1f2937] [font-family:'Arial_Black',sans-serif]"
            >
              Birthday
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-7 flex flex-col gap-4 w-fit"
          >
            <button className="bg-pink-500 text-black font-semibold px-20 py-2 rounded-full border-2 border-gray-800 shadow-[3px_3px_0_#111827] hover:scale-105 transition">
              2 May
            </button>
            
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative pr-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-80 h-80 rounded-full bg-[#d7be8c] p-3 shadow-xl"
          >
            <img
              src="./anjaliUSA.jpg"
              alt="avatar"
              className="w-full h-full object-cover rounded-full border-2 border-gray-900"
            />
          </motion.div>

          <motion.img
            src="./ballon1.png"
            alt="balloon left"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -left-16 w-20"
          />
          <motion.img
            src="./ballon1.png"
            alt="balloon right"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 -right-14 w-20 scale-x-[-1]"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-pink-500 border-2 border-gray-800 px-8 py-1 rounded-full shadow-[3px_3px_0_#111827] text-white font-semibold [font-family:'Segoe_Script',cursive]"
          >
            Dear Anjali
          </motion.div>
        </div>
      </div>

      {/* small accents */}
      <motion.div
        animate={{ rotate: [0, 10, 0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-[44%] top-[62%] text-6xl"
      >
        ☺
      </motion.div>
      <div className="absolute left-[34%] top-[18%] text-black">✦</div>
      <div className="absolute left-[63%] top-[20%] text-black">✦</div>
      <div className="absolute left-[28%] top-[78%] text-black">✦</div>
      <div className="absolute left-[74%] top-[70%] text-black">✦</div>
    </div>
  );
}
