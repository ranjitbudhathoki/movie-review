import { motion } from "framer-motion";

export default function Animation() {
  return (
    <main className="h-screen bg-black text-white w-full">
      <div className="flex flex-col gap-20 p-10">
        <Heading />
        <Card />
      </div>
    </main>
  );
}

function Heading() {
  const headVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.03, 0.5, 1],
    },
  };

  const subHeadVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div className="flex  items-baseline gap-5">
      <motion.h1
        className="text-[50px] font-extrabold"
        animate="visible"
        variants={headVariant}
        initial="hidden"
        transition={{ type: "tween", delay: 0.6, ease: "easeInOut" }}
        layout
      >
        MATCH MAKING
      </motion.h1>

      <motion.h2
        className="text-xl font-extrabold bg-green-600 px-1.5 py-2 rounded"
        transition={{ delay: 0.6 }}
        variants={subHeadVariant}
        animate="visible"
        initial="hidden"
        layout
      >
        MATCH 20 / ERANGLE
      </motion.h2>
    </motion.div>
  );
}

function Card() {
  const gradientStyle = {
    background:
      "linear-gradient(to bottom, #B1E8B1, #6BCB6B, #6BCB6B, #358A35, #358A35, #FFFFFF, #FFFFFF)",
  };

  const cardVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const imgVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: [0.01, 0.05, 0.1, 0.5, 1], y: 0 },
  };

  return (
    <motion.div
      className="h-[25rem] w-96 rounded"
      style={gradientStyle}
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2, type: "spring" }}
    >
      <motion.img
        src="https://media.licdn.com/dms/image/D4D12AQFu05VBQ-7RCA/article-cover_image-shrink_600_2000/0/1685600334204?e=2147483647&v=beta&t=yKMNbAxs_EmlXs5t_ZV9EyHyEi8LBqAK1fpZeLBaAds"
        alt="image of profile"
        variants={imgVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5, type: "tween" }}
      />
      <motion.div
        className="flex  items-center justify-between"
        variants={imgVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.3, type: "tween" }}
      >
        <div className="flex items-center  gap-2">
          <img
            src="https://i.imgur.com/UB23RYa.png"
            alt="logo"
            className="h-20 w-20"
          />
          <p className="text-2xl font-bold">DS</p>
        </div>
        <img
          src="https://i.imgur.com/zY53i1A.png"
          alt="chicken dinner"
          className="h-16 w-16 mr-5"
        />
      </motion.div>

      <motion.div
        className="flex  items-center justify-around text-black mt-4"
        variants={imgVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2, type: "tween" }}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-bold">10</p>
          <p className="text-md font-semibold">RANK PTS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-bold">17</p>
          <p className="text-md font-semibold">ELIMS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-bold">27</p>
          <p className="text-md font-semibold">TOTAL PTS</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
