import { motion } from "framer-motion";

export function Card() {
  const gradientStyle = {
    background: "linear-gradient(to bottom, #B1E8B1, #126912)", // Replace with your light and dark green colors
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
      className="h-96 w-96 rounded"
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
        transition={{ delay: 2, type: "tween" }}
      />
      <motion.div className="flex  items-center">
        <div className="flex items-center ">
          <img
            src="https://i.imgur.com/UB23RYa.png"
            alt="logo"
            className="h-16 w-16 "
          />
          <p className="text-2xl font-bold">DS</p>
        </div>
        <p></p>
      </motion.div>
    </motion.div>
  );
}
