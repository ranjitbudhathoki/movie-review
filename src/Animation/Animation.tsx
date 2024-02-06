import { motion } from "framer-motion";
interface TableData {
  rank: number;
  team: string;
  rankPts: number;
  elemPts: number;
  totalPts: number;
}

const data: TableData[] = [
  { rank: 1, team: "🦁 Lions", rankPts: 100, elemPts: 50, totalPts: 150 },
  { rank: 2, team: "🐯 Tigers", rankPts: 90, elemPts: 40, totalPts: 130 },
  { rank: 3, team: "🐻 Bears", rankPts: 80, elemPts: 35, totalPts: 115 },
  { rank: 4, team: "🐺 Wolves", rankPts: 75, elemPts: 30, totalPts: 105 },
  { rank: 5, team: "🦅 Eagles", rankPts: 70, elemPts: 25, totalPts: 95 },
  { rank: 6, team: "🦃 Falcons", rankPts: 65, elemPts: 20, totalPts: 85 },
  { rank: 7, team: "🦉 Hawks", rankPts: 60, elemPts: 15, totalPts: 75 },
  { rank: 8, team: "🦚 Ravens", rankPts: 55, elemPts: 10, totalPts: 65 },
  { rank: 9, team: "🐬 Dolphins", rankPts: 50, elemPts: 5, totalPts: 55 },
  { rank: 10, team: "🦈 Sharks", rankPts: 45, elemPts: 2, totalPts: 47 },
];

export default function Animation() {
  return (
    <main className="h-screen bg-cover bg-[url('https://www.pixel4k.com/wp-content/uploads/2018/12/pubg-playerunknown-s-battlegrounds-4k-wallpaper_1544828187.jpg')] text-white w-full">
      <div className="flex flex-col gap-20 p-10">
        <Heading />
        <div className="flex justify-between">
          <Card />
          <Table />
        </div>
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
      "linear-gradient(to bottom, #90EE90, #6BCB6B, #6BCB6B, #3CB371, #2E8B57)",
  };

  // const gradientStyle = {
  //   background:
  //     "linear-gradient(to bottom, #7FFFD4, #66CCCC, #4CFFFF, #2E8B57)",
  // };

  const cardVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const imgVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: [0.01, 0.05, 0.1, 0.5, 1], y: 0 },
  };

  const statsVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.01, 0.05, 0.1, 0.5, 1],
      background: "#ffffff",
    },
  };
  return (
    <motion.div
      className="h-[30rem] w-[25rem] rounded"
      style={gradientStyle}
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2, type: "spring" }}
    >
      <motion.img
        src="https://media.licdn.com/dms/image/D4D12AQFu05VBQ-7RCA/article-cover_image-shrink_600_2000/0/1685600334204?e=2147483647&v=beta&t=yKMNbAxs_EmlXs5t_ZV9EyHyEi8LBqAK1fpZeLBaAds"
        alt="image of profile"
        className="h-[20.8rem] w-full object-cover"
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
        <div className="flex items-center gap-2">
          <img
            src="https://i.imgur.com/UB23RYa.png"
            alt="logo"
            className="h-20 w-20"
          />
          <p className="text-3xl font-bold">DS</p>
        </div>
        <img
          src="https://i.imgur.com/zY53i1A.png"
          alt="chicken dinner"
          className="h-14 w-14 mr-5 object-cover"
        />
      </motion.div>

      <motion.div
        className="flex  items-center justify-between text-black  px-6 py-1"
        variants={statsVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2, type: "tween" }}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">10</p>
          <p className="text-md font-semibold">RANK PTS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">17</p>
          <p className="text-md font-semibold">ELIMS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">27</p>
          <p className="text-md font-semibold">TOTAL PTS</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Table() {
  const gradientStyle = {
    background: "linear-gradient(to right, #004d00, #4CAF50)", // Very dark green to light green gradient
  };

  const rankGradient = {
    background: "linear-gradient(to right,#b8e8d7, #CDFADB)",
  };

  const nameGradient = {
    background: "linear-gradient(to right, #B8E8D7, #CDFADB)", // Light aqua to pale blue gradient
  };

  const statsGradient = {
    background: "linear-gradient(to right, #F5F5F5, #B0B0B0)", // White to light gray gradient
  };

  const titleVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const container = {
    hidden: {
      opacity: 0,
    },

    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        type: "tween",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <motion.div>
      <motion.div animate="visible" initial="hidden" variants={titleVariant}>
        <div
          className="flex bg-green-500 max-w-screen-lg h-10 px-2 items-center rounded"
          style={gradientStyle}
        >
          <div className="flex items-center justify-center gap-10 text-md font-semibold">
            <p className="flex-1 w-10">RANK</p>
            <p className="flex-3 w-96 ">TEAM</p>
          </div>
          <div className="flex gap-10 text-black font-bold text-md">
            <p className="w-28">RANK PTS</p>
            <p className="w-28">ELEM PTS</p>
            <p className="">TOTAL PTS</p>
          </div>
        </div>
      </motion.div>
      <motion.ul variants={container} initial="hidden" animate="show">
        {data.map((team: TableData) => {
          return (
            <motion.li
              className="flex max-2-screen-lg h-10  border-solid border-gray-300 border-[1px]"
              variants={item}
              transition={{ type: "tween" }}
            >
              <div className="flex items-center justify-center text-md font-semibold">
                <p
                  className="flex-1 w-14 flex h-full text-black px-2 pr-2"
                  style={rankGradient}
                >
                  #{team.rank}
                </p>
                <p
                  className="flex-3 w-96 h-full m-0 px-2 text-black font-bold text-md"
                  style={nameGradient}
                >
                  {team.team}
                </p>
              </div>
              <div
                className="flex gap-10 text-black font-bold text-md w-full"
                style={statsGradient}
              >
                <p className="ml-12 w-28">{team.rankPts}</p>
                <p className="ml-4 w-28">{team.elemPts}</p>
                <p className="mr-4">{team.totalPts}</p>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
}
