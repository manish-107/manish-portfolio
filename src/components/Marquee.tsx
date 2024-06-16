import { motion } from "framer-motion";
import SkillSection from "./SkillSection";

const Marquee: React.FC = () => {
  const marqueeVariants = {
    animate: {
      x: ["0%", "-50%"], // Move halfway (since items are doubled)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20, // Adjust duration for speed
        },
      },
    },
  };

  const items = ["REACT", "PRISMA", "DOCKER", "TYPESCRIPT", "EXPRESS", "MONGODB", "MERN","PRISMA"];

  return (
    <div className="w-full py-10 mt-10 text-4xl font-bold text-gray-400 bg-gray-900 md:text-7xl rounded-tl-3xl rounded-tr-3xl">
      <div className="flex overflow-hidden border-t-2 border-b-2 whitespace-nowrap">
        <motion.div
          className="flex p-2 md:p-3"
          variants={marqueeVariants}
          animate="animate"
          style={{ width: "200%" }} 
        >
          {[...items, ...items].map((item, index) => (
            <h1 key={index} className="mx-4 md:mx-10">
              {item}
            </h1>
          ))}
        </motion.div>
      </div>
      <div className="containerr max-auto">
        <section className="mt-20 ml-10 mr-10">

      <SkillSection/>
      
        </section>
      </div>
    </div>
  );
};

export default Marquee;
