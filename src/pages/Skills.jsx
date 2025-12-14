import {
  SiDjango,
  SiReact,
  SiMongodb,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
} from "react-icons/si";
import { FaHtml5, FaJs, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Skills() {
  const iconVar = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          alt="Django_logo"
        >
          <SiDjango className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          alt="React_logo"
        >
          <SiReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVar(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          alt="Python_logo"
        >
          {/* <FaPython className="text-7xl text-blue-500"/>  */}
          <img
            src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"
            style={{ height: "72px", width: "72px" }}
            alt="Python_logo"
          />
        </motion.div>
        <motion.div
          variants={iconVar(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          alt="Html_logo"
        >
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVar(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          alt="Bootstrap_logo"
        >
          <FaBootstrap className="text-7xl text-violet-700" />
        </motion.div>
        <motion.div
          variants={iconVar(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          alt="TailwindCss_logo"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVar(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          alt="JS_logo"
        >
          <FaJs className="text-7xl text-amber-400" />
        </motion.div>
        <motion.div
          variants={iconVar(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          alt="MonogoDb_logo"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          alt="NextJs_logo"
        >
          <SiNextdotjs className="text-7xl text-gray-500" />
        </motion.div>
        <motion.div
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          alt="NestJs_logo"
        >
          <SiNestjs className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          alt="Postgres_logo"
        >
          <SiPostgresql className="text-7xl text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}
